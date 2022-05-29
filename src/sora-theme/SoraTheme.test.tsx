import React from 'react'
import { render, screen } from '@testing-library/react'
import SoraTheme from './SoraTheme'
import darkDefault from '../_styles/official_themes/dark_default'
import Button from '../button/Button'

describe('SoraTheme wrapper', () => {
  test('renders children text', () => {
    render(<SoraTheme theme={darkDefault}>Hola</SoraTheme>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })

  test('Styles of all children elements are customized', () => {
    render(
      <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <SoraTheme theme={darkDefault}>
          <Button>Customized1</Button>
          <Button>Customized2</Button>
        </SoraTheme>
        <Button>Default1</Button>
        <Button>Default2</Button>
      </div>
    )
    const CustomButton = screen.getByText(/Customized1/i).getAttribute('class')
    const CustomButton2 = screen.getByText(/Customized2/i).getAttribute('class')
    const Default1 = screen.getByText(/Default1/i).getAttribute('class')
    const Default2 = screen.getByText(/Default2/i).getAttribute('class')
    expect(CustomButton).toMatch(`${CustomButton2}`)
    expect(Default1).toMatch(`${Default2}`)
    expect(CustomButton).not.toMatch(`${Default1}`)
    expect(CustomButton).not.toMatch(`${Default2}`)
  })
})
