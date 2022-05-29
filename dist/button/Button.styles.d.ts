export declare const styles: {
    default_container: {
        background: string;
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
        cursor: string;
        borderRadius: string;
        height: string;
        fontFamily: string;
        fontSize: number;
        paddingLeft: string;
        paddingRight: string;
    };
    default_label: {
        color: import("../_types").Color;
        fontSize: number;
        fontWeight: string;
        letterSpacing: string;
    };
    primary_container: {
        background: import("../_types").Color;
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
        cursor: string;
        border: string;
        borderRadius: string;
        height: string;
        fontFamily: string;
        fontSize: number;
        paddingLeft: string;
        paddingRight: string;
    };
    primary_label: {
        color: string;
        fontSize: number;
        fontWeight: string;
        letterSpacing: string;
    };
    success_container: {
        background: string;
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
        cursor: string;
        border: string;
        borderRadius: string;
        height: string;
        fontFamily: string;
        fontSize: number;
        paddingLeft: string;
        paddingRight: string;
    };
    success_label: {
        color: string;
        fontSize: number;
        fontWeight: string;
        letterSpacing: string;
    };
    danger_container: {
        background: import("../_types").Color;
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
        cursor: string;
        border: string;
        borderRadius: string;
        height: string;
        fontFamily: string;
        fontSize: number;
        paddingLeft: string;
        paddingRight: string;
    };
    danger_label: {
        color: string;
        fontSize: number;
        fontWeight: string;
        letterSpacing: string;
    };
};
export declare const useStyles: (data?: (((value: string[], index: number, array: string[][]) => unknown) & {
    theme?: Jss.Theme | undefined;
}) | undefined) => import("jss").Classes<"default_container" | "default_label" | "primary_container" | "primary_label" | "success_container" | "success_label" | "danger_container" | "danger_label">;
