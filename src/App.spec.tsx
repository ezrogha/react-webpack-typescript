import React from 'react'
import { render } from '@testing-library/react'
import App from "./App"

describe('App.js', () => {
    test('should be true', () => {
        expect(true).toEqual(true)
    })

    test('should work', () => {
        const { getByText, container } = render(<App />)
        expect(getByText("CHANGE")).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })

    test('should ', () => {
        const { queryByText } = render(<App />)
        expect(queryByText("CHANGE")).toBeTruthy()
    })
    
})
