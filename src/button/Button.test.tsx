import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'
import { ThemeProvider } from 'react-jss'

describe('Button', () => {
  test('Renders children text', () => {
    render(<Button>Hola</Button>)
    const ButtonElement = screen.getByText(/Hola/i)
    expect(ButtonElement).toBeInTheDocument()
  })

  test('Accepts an `onClick` handler that gets called upon clicking', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    expect(handleClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(2)
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

  test('Styles are customized if wrapped by JSS ThemeProvider', () => {
    const customTheme = {
      default_container: {
        background: 'lime',
        border: 'green',
        borderRadius: '4px',
        padding: '20px'
      },
      default_label: {
        color: 'white',
        fontSize: '20px'
      }
    }
    render(
      <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <ThemeProvider theme={customTheme}>
          <Button>Customized</Button>
        </ThemeProvider>
        <Button>Default1</Button>
        <Button>Default2</Button>
      </div>
    )
    const CustomButton = screen.getByText(/Customized/i).getAttribute('class')
    const Default1 = screen.getByText(/Default1/i).getAttribute('class')
    const Default2 = screen.getByText(/Default2/i).getAttribute('class')
    expect(Default1).toMatch(`${Default2}`)
    expect(CustomButton).not.toMatch(`${Default1}`)
    expect(CustomButton).not.toMatch(`${Default2}`)
  })
})
