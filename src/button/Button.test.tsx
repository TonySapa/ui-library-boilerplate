import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  test('Renders children text', () => {
    render(<Button>Hola</Button>)
    const ButtonElement = screen.getByText(/Hola/i)
    expect(ButtonElement).toBeInTheDocument()
  })

  test('Button appearance is "default" if not specified', () => {
    render(<Button>Default</Button>)
    const DefaultButton = screen.getByText(/Default/i)
    expect(DefaultButton.getAttribute('class')).toMatch(/default/gi)
  })

  test('Button is styled different if "appearance" is specified', () => {
    render(<Button appearance='primary'>Primary</Button>)
    const PrimaryButton = screen.getByText(/Primary/i)
    expect(PrimaryButton.getAttribute('class')).toMatch(/primary/gi)
    render(<Button appearance='success'>Success</Button>)
    const SuccessButton = screen.getByText(/Success/i)
    expect(SuccessButton.getAttribute('class')).toMatch(/success/gi)
    render(<Button appearance='danger'>Danger</Button>)
    const DangerButton = screen.getByText(/Danger/i)
    expect(DangerButton.getAttribute('class')).toMatch(/danger/gi)
  })
})
