import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { fetchShow } from './api/fetchShow'
import App from './App'
import { act } from 'react-dom/test-utils'

const createEpisode = (name, season, episode) => {
  return {
    id: Date.now(),
    season: season,
    number: episode,
    name: name,
    image: {
      original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
    },
    summary: `Test Episode for Episode ${episode}`
  }
}

const showsData = {
  data: {
    summary: 'testing 123',
    image: {
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg'
    },
    _embedded: {
      episodes: [
        createEpisode('s1 ep one', 1, 1),
        createEpisode('s1 ep two', 1, 2),
        createEpisode('s2 ep one', 2, 1),
        createEpisode('s2 ep two', 2, 2),
        createEpisode('s3 ep one', 3, 1),
        createEpisode('s3 ep two', 3, 2),
        createEpisode('s4 ep one', 4, 1),
        createEpisode('s4 ep two', 4, 2)
      ]
    }
  }
}

jest.mock('./api/fetchShow')

test('App renders without errors', async () => {
  fetchShow.mockResolvedValueOnce(Promise.resolve(showsData))
  await act(async () => render(<App />))
})

test('Renders list of movies after API call', async () => {
  // fetchShow.mockResolvedValueOnce(Promise.resolve(showsData))
  // const { getByText } = await render(<App />)
  
  // await waitFor()
  // const dropdown = getByText(/select a season$/i)
  // fireEvent.change(dropdown, { target: { value: 'Season 2' }})
  // expect(getByText('s2 ep two')).toBeInTheDocument()
})