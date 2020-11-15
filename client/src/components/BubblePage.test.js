import React from "react"
import { render, screen } from "@testing-library/react"
import BubblePage from "./BubblePage"
import { axiosWithAuth } from "../utils/axiosWithAuth"

const fetchColors = () => {
  axiosWithAuth().get("/api/colors")
    .then(res => setColorList(res.data))
    .catch(err => console.log(err))
}

const mockFetchColors = fetchColors()

jest.mock(mockFetchColors);

test("Fetches data and renders the bubbles", async () => {
  const mockColors = [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff",
      },
      id: 3,
    },
  ]

  const { rerender } = render(<BubblePage mockColors={[]} />)

  rerender(<BubblePage mockColors={mockColors} />)

  expect(await screen.findByText(/bubbles/i)).toBeInTheDocument()
  expect(await screen.findByText(/colors/i)).toBeInTheDocument()
})
