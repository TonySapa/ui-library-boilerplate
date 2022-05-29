// global.d.ts
import { Color } from '../_types/index'

export type CSSinJS = {
  background?: string
  border?: string
  color?: Color | string
  transition?: Array<Array<string>>
  '&:hover'?: any
  '&:active'?: any
  '&:focus'?: any
}

declare global {
  namespace Jss {
    export interface Theme {
      Button: {
        default_container: CSSinJS
        default_label: CSSinJS
        primary_container: CSSinJS
        primary_label: CSSinJS
        success_container: CSSinJS
        success_label: CSSinJS
        danger_container: CSSinJS,
        danger_label: CSSinJS
      }
    }
  }
}

export {}
