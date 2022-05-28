import React from 'react'
import { render, screen } from '@testing-library/react'
import Demo from './Demo'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<Demo>Hola</Demo>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
