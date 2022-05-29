import { CSSinJS } from './global';
declare type RGB = `rgb(${number}, ${number}, ${number})`;
declare type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
declare type HEX = `#${string}`;
export declare type Appearance = 'default' | 'primary' | 'success' | 'danger';
export declare type Color = RGB | RGBA | HEX;
export interface Theme {
    Button?: {
        default_container?: CSSinJS;
        default_label?: CSSinJS;
        primary_container?: CSSinJS;
        primary_label?: CSSinJS;
        success_container?: CSSinJS;
        success_label?: CSSinJS;
        danger_container?: CSSinJS;
        danger_label?: CSSinJS;
    };
}
export {};
