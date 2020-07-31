import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

const mockData = { 
  id: '101',
  image: { medium: 'medium_image'},
  name: 'test',
  season: 1,
  number: 1,
  summary: '<p>Summary</p>',
  runtime: 20
}

test("renders episodes with and without props", () => {
    const { queryAllByText, rerender } = render(<Episodes episodes={[]} />)
    expect(queryAllByText(/season/i) === null)

    rerender(<Episodes episodes={[mockData]}/>) 
    expect(queryAllByText(/test/i)).toHaveLength(1)
})