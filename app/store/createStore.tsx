// create a store that can be used to share state between functional components
//
// source: https://blog.usejournal.com/react-hooks-the-rebirth-of-state-management-and-beyond-7d84f6026d87

import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useImmer } from 'use-immer'
import deepEqual from '../utils/deep-equal'

interface UseStore {
  state: Record<string, any>
  setState: Function
  useValue: <T,>(name: string) => [T, (value: T) => void]
}

export default () => {
  // Make a context for the store
  const initialContext = { state: {}, setState: (draft: Record<string, any>) => draft }
  const context = React.createContext(initialContext)

  // Make a provider that takes an initialValue
  const Provider = ({ initialValue = {}, children }: { initialValue: any; children: React.ReactNode }): JSX.Element => {
    // Make a new state instance
    const [state, setState] = useImmer(initialValue)

    // Memoize the context value to update when the state does
    const contextValue = useMemo(() => ({ state, setState }), [state])

    // Provide store to children
    return <context.Provider value={contextValue}>{children}</context.Provider>
  }
  
  Provider.propTypes = {
    initialValue: PropTypes.any,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]),
  }

  // a higher order component to wrap a component with the store provider
  const withProvider = (ComposedComponent: React.ElementType, { initialValue }: any): Function => {
    const WithProvider = (props: Record<string, any>): JSX.Element => (
      <Provider initialValue={initialValue}>
        <ComposedComponent {...props} />
      </Provider>
    )
    return WithProvider
  }

  // A hook to help consume the store
  // useStore returns an object with {
  //   state,
  //   setState,
  //   useValue,
  // }
  // whereas state returns an object
  // setState uses an immer draft
  // and useValue returns getter and setter for a specific attribute
  const useStore = (): UseStore => {
    const { state, setState } = useContext(context)

    const useValue = <T,>(name: string): [T, (value: T) => void] => {
      const value: T = useMemo(
        (): T => state[name],
        [state[name]]
      )

      const setValue = (value: T): void => {
        if (deepEqual(value, state[name])) return
        setState((draft: Record<string, any>): void => {
          draft[name] = value
        })
      }

      return [value, setValue]
    }

    return { state, setState, useValue }
  }

  return { useStore, Provider, withProvider }
}