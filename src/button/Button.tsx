import React from 'react'

import { useStyles } from './Button.styles'
import { ButtonProps } from './Button.types'

const Button = ({
  appearance = 'default',
  children
}: ButtonProps) => {
  const classes = useStyles()
  return (
    <button className={classes[`${appearance}_container`]}>
      <span className={classes[`${appearance}_label`]}>{children}</span>
    </button>
  )
}

export default Button
