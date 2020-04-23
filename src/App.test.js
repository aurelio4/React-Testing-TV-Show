import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import  { fetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow");

const mockData = {
  data: {
    _embedded: {
      episodes: [
      {
        id: '123',
        image: { original: 'original_img_here'},
        name: 'episode name',
        season: 1,
        number: 1,
        summary: 'summary',
        runtime: 60
      },
      {
        id: '124',
        image: { original: 'original_img_here'},
        name: 'episode name',
        season: 1,
        number: 2,
        summary: 'second summary',
        runtime: 60
      }
    ]},
    summary: 'test summary',
    image: {
      original: 'original_img_here'
    }
  }
}

test("app fetches data and renders episodes on season select", async () => {
    fetchShow.mockResolvedValueOnce(mockData)
    const { getAllByText, getByText } = render(<App />)
    await wait(() => getByText(/select a season/i))
    fireEvent.mouseDown(getByText(/select a season/i))
    expect(getAllByText(/season/i)).toHaveLength(2)
    fireEvent.mouseDown(getByText(/season 1/i))
    expect(getAllByText(/season 1, episode/i)).toHaveLength(2)
})