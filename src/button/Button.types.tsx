import { Appearance } from '../_types'

export type ButtonProps = {
  appearance?: Appearance
  children: string,
  disabled?: boolean,
  onClick?: () => void,
  dataTestId?: string
}
