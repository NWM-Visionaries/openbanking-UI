"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InfoDisplay;

var _react = _interopRequireDefault(require("react"));

require("./InfoDisplay.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//display formatted json data
function InfoDisplay(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data;

  if (!data) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "infoContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "formattedData"
  }, /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify(data, null, 4))));
}