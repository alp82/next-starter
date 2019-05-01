import { addDecorator, addParameters, configure } from '@storybook/react'
import {  } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('..', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}


// addDecorator((Story) => <Story />)
addDecorator(checkA11y);
addDecorator(withKnobs);

configure(loadStories, module)