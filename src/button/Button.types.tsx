import { Appearance } from '../_types'

export type ButtonProps = {
  appearance?: Appearance
  children: string,
  onClick?: () => void
}
