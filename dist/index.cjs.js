'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactJss = require('react-jss');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var useStyles = reactJss.createUseStyles({
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
    return (React__default["default"].createElement("button", { className: classes.myButton },
        React__default["default"].createElement("span", { className: classes.myLabel }, children)));
};

exports.Demo = Demo;
