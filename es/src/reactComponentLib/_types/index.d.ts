declare type RGB = `rgb(${number}, ${number}, ${number})`;
declare type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
declare type HEX = `#${string}`;
export declare type Appearance = 'default' | 'primary' | 'success' | 'danger';
export declare type Color = RGB | RGBA | HEX;
export {};
