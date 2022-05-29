import React, { memo } from 'react'

import { useStyles } from './Button.styles'
import { ButtonProps } from './Button.types'

const Button = memo(function Button({
  appearance = 'default',
  children,
  onClick
}: ButtonProps) {
  const classes = useStyles()
  return (
    <button onClick={onClick} className={classes[`${appearance}_container`]}>
      <span className={classes[`${appearance}_label`]}>{children}</span>
    </button>
  )
})

export default Button
