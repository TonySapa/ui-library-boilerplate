import { spacing_scale } from "./misc";
import { fontFamily, typography_base } from "./typography";

export const inputGlobalStyles = {
  container: {
    border: 'none',
    borderRadius: '10px',
    height: '40px',
    fontFamily: fontFamily,
    fontSize: typography_base,
    paddingLeft: `${spacing_scale[3]}px`,
    paddingRight: `${spacing_scale[3]}px`
  }
}
