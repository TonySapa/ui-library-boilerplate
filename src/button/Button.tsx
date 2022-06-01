import React, { memo } from 'react'

import { useStyles } from './Button.styles'
import { ButtonProps } from './Button.types'

const Button = memo(function Button({
  appearance = 'default',
  children,
  disabled,
  onClick,
  dataTestId
}: ButtonProps) {
  const classes = useStyles()
  return (
    <button onClick={onClick} className={classes[`${appearance}_container`]} disabled={disabled} data-testid={dataTestId}>
      <span>{children}</span>
    </button>
  )
})

export default Button
