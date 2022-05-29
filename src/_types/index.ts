type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

export type Appearance = 'default' | 'primary' | 'success' | 'danger'
export type Color = RGB | RGBA | HEX
