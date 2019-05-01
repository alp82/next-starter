export interface SearchGifsApiParams {
  query: string
}

export interface TenorMedia {
  tinygif: {
    url: string
  }
}

export interface TenorItem {
  media: TenorMedia[]
}

export interface TenorResponse {
  results: TenorItem[]
}

const apiKey = 'LYBXXK2VWWKU'

export const searchGifs = ({ query }: SearchGifsApiParams): Promise<TenorResponse> => {
  const url = `http://api.tenor.com/v1/search?api_key=${apiKey}&q=${query}&limit=20`
  return fetch(url)
    .then(result => result.json())
}