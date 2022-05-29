import { CSSinJS } from './global'

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

export type Appearance = 'default' | 'primary' | 'success' | 'danger'
export type Color = RGB | RGBA | HEX
export interface Theme {
  Button?: {
    default_container?: CSSinJS
    default_label?: CSSinJS
    primary_container?: CSSinJS
    primary_label?: CSSinJS
    success_container?: CSSinJS
    success_label?: CSSinJS
    danger_container?: CSSinJS,
    danger_label?: CSSinJS
  }
}
