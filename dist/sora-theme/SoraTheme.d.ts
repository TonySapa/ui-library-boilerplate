/// <reference types="react" />
import { SoraThemeProps } from './SoraTheme.types';
/******************************************************************************
 * Wraps children elements and styles them with the theme passed as prop.
 * @param {Theme} theme object containing the styles.
 * @param {ReactNode} children JSX elements to be styled with context.
 * @returns {React.FC} Wrapper with theme containing styles as a Context.
 *****************************************************************************/
declare const SoraTheme: ({ children, theme }: SoraThemeProps) => JSX.Element;
export default SoraTheme;
