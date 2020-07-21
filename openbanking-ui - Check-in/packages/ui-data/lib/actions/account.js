"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAccountData = exports.setAccountId = void 0;

var _account = require("../actionCreators/account");

var setAccountId = function setAccountId(accountId) {
  return {
    type: _account.SET_ACCOUNT_ID,
    accountId: accountId
  };
};

exports.setAccountId = setAccountId;

var setAccountData = function setAccountData(data) {
  return {
    type: _account.SET_ACCOUNT_DATA,
    data: data
  };
};

exports.setAccountData = setAccountData;