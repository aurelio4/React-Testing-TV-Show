import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { fetchShow } from './api/fetchShow'
import App from './App'

jest.mock('./api/fetchShow')

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
    summary: 'this prints?',
    image: {
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg'
    },
    _embedded: {
      episodes: [
        {
          id: 101,
          season: 1,
          number: 1,
          name: 'Test Episode',
          image: {
            original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
          },
          summary: 'Test Episode for Season 1 Episode 1'
        }
      ]
    }
  }
}

test('Check if Dropdown changes to Season 1', async () => {
  fetchShow.mockResolvedValueOnce(showsData)
  const { getByText } = await render(<App />)
  fireEvent.change(getByText(/Select a season/i), { value: "Season 1" } )
  // await waitFor(() => getByText(/Test Episode/i))
})

// test('Renders list of movies after API call', async () => {
//   fetchShow.mockResolvedValueOnce(Promise.resolve(showsData))
//   const { getByText } = await render(<App />)
//   // await waitFor()
//   const dropdown = getByText(/select a season$/i)
//   expect(dropdown).toBeDefined()
//   // expect(getByText('s2 ep two')).toBeInTheDocument()
// })