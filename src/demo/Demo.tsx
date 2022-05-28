import React from 'react'

import { useStyles } from './Demo.styles'
import { DemoProps } from './Demo.types'

const Demo = ({ children }: DemoProps) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

export default Demo
