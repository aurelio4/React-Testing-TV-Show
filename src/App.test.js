import React from "react";
import { render, waitFor } from "@testing-library/react";
import  { fetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow");

const mockData = {
  data: {
    summary: 'test summary',
    image: {
      original: 'original_img_here'
    },
    _embedded: {
      episodes: {
        id: '123',
        image: { original: 'original_img_here'},
        name: 'name',
        season: 1,
        number: 1,
        summary: '<p>Summary</p>',
        runtime: 60
      }
    }
  }
}

test("app fetches data and renders it", async () => {
    fetchShow.mockResolvedValueOnce([mockData]);
    const { queryAllByText } = render(<App />);
    await waitFor(() =>expect(queryAllByText(/name/i)).toHaveLength(1));
})