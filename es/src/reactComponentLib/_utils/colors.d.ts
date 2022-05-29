/******************************************************************************
 * Similar to SASS mix function. Mixes 2 colors and returns the color created
 * @param {string} color
 * @param {number} decimal
 * @returns {Color} Hex color
 *****************************************************************************/
export declare const shadeColor: (color: string, decimal: number) => string;
/******************************************************************************
 * Takes a string of a hex formatted color and returns the rgb/rgba equivalent.
 * @param {Color} hex color to transform to rgba.
 * @param {number} opacity last value on rgba string, in scale 0 to 1.
 * @returns {sgring} string containing rgba value.
 *****************************************************************************/
export declare const hexToRGB: (hex: string, opacity: number) => string;
declare const colors: {
    shadeColor: (color: string, decimal: number) => string;
    hexToRGB: (hex: string, opacity: number) => string;
};
export default colors;
