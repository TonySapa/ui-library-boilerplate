/* eslint-disable */
import React from 'react';
import { createUseStyles } from 'react-jss';

var useStyles = createUseStyles({
    myButton: {
        color: 'green',
        margin: {
            top: 5,
            right: 0,
            bottom: 0,
            left: '1rem'
        },
        '& span': {
            fontWeight: 'bold'
        }
    },
    myLabel: {
        fontStyle: 'italic'
    }
});

var Demo = function (_a) {
    var children = _a.children;
    var classes = useStyles();
    return (React.createElement("button", { className: classes.myButton },
        React.createElement("span", { className: classes.myLabel }, children)));
};

export { Demo };
