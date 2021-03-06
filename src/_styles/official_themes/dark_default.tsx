import { hexToRGB, shadeColor } from '../../_utils/colors'
import { black, danger, success } from '../colors'
import { inputGlobalStyles } from '../inputs'
import { typography_scale } from '../typography'

const successShadow = hexToRGB(success, 0.25)
const dangerShadow = hexToRGB(danger, 0.25)
const blackTint = hexToRGB(black, 1.05)

const darkDefault = {
  Button: {
    default_container: {
      ...inputGlobalStyles.container,
      cursor: 'pointer',
      background: black,
      border: `1px solid ${hexToRGB('#ffffff', 0.5)}`,
      transition: [['background', '300ms'], ['width', '300ms']],
      '&:hover': {
        background: shadeColor(black, 0.8)
      },
      '&:active': {
        boxShadow: `0px 0px 7px 8px ${blackTint}`
      },
      '&:focus': {
        boxShadow: `0px 0px 7px 8px ${blackTint}`
      },
      '& span': {
        fontSize: typography_scale[3],
        fontWeight: 'bold',
        letterSpacing: '0.46px',
        color: 'white'  
      }
    },
    success_container: {
      ...inputGlobalStyles.container,
      cursor: 'pointer',
      background: black,
      border: `2px solid ${success}`,
      boxShadow: `0px 4px 10px 3px ${successShadow}`,
      transition: [['background', '300ms'], ['width', '300ms']],
      '&:hover': {
        background: shadeColor(success, 1.2)
      },
      '&:active': {
        boxShadow: `0px 0px 7px 8px ${successShadow}`
      },
      '&:focus': {
        boxShadow: `0px 0px 7px 8px ${successShadow}`
      },
      '& span': {
        fontSize: typography_scale[3],
        fontWeight: 'bold',
        letterSpacing: '0.46px',
        color: success  
      }
    },
    danger_container: {
      ...inputGlobalStyles.container,
      cursor: 'pointer',
      background: black,
      border: `2px solid ${danger}`,
      boxShadow: `0px 4px 10px 3px ${dangerShadow}`,
      transition: [['background', '300ms'], ['width', '300ms']],
      '&:hover': {
        background: shadeColor(danger, 1.2)
      },
      '&:active': {
        boxShadow: `0px 0px 7px 8px ${dangerShadow}`
      },
      '&:focus': {
        boxShadow: `0px 0px 7px 8px ${dangerShadow}`
      },
      '& span': {
        fontSize: typography_scale[3],
        fontWeight: 'bold',
        letterSpacing: '0.46px',
        color: danger  
      }  
    }
  }
}

export default darkDefault
