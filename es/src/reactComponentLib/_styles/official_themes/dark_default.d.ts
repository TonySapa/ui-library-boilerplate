declare const darkDefault: {
    Button: {
        default_container: {
            cursor: string;
            background: import("../../_types").Color;
            border: string;
            transition: string[][];
            '&:hover': {
                background: string;
            };
            '&:active': {
                boxShadow: string;
            };
            '&:focus': {
                boxShadow: string;
            };
            borderRadius: string;
            height: string;
            fontFamily: string;
            fontSize: number;
            paddingLeft: string;
            paddingRight: string;
        };
        default_label: {
            fontSize: number;
            fontWeight: string;
            letterSpacing: string;
            color: string;
        };
        success_container: {
            cursor: string;
            background: import("../../_types").Color;
            border: string;
            boxShadow: string;
            transition: string[][];
            '&:hover': {
                background: string;
            };
            '&:active': {
                boxShadow: string;
            };
            '&:focus': {
                boxShadow: string;
            };
            borderRadius: string;
            height: string;
            fontFamily: string;
            fontSize: number;
            paddingLeft: string;
            paddingRight: string;
        };
        success_label: {
            fontSize: number;
            fontWeight: string;
            letterSpacing: string;
            color: import("../../_types").Color;
        };
        danger_container: {
            cursor: string;
            background: import("../../_types").Color;
            border: string;
            boxShadow: string;
            transition: string[][];
            '&:hover': {
                background: string;
            };
            '&:active': {
                boxShadow: string;
            };
            '&:focus': {
                boxShadow: string;
            };
            borderRadius: string;
            height: string;
            fontFamily: string;
            fontSize: number;
            paddingLeft: string;
            paddingRight: string;
        };
        danger_label: {
            fontSize: number;
            fontWeight: string;
            letterSpacing: string;
            color: import("../../_types").Color;
        };
    };
};
export default darkDefault;
