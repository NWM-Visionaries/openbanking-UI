"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccountList = getAccountList;
exports.getAccountById = getAccountById;
exports.getAccountBalances = getAccountBalances;
exports.getAccountTransactions = getAccountTransactions;
exports.getAccountDirectDebits = getAccountDirectDebits;
exports.getAccountStandingOrders = getAccountStandingOrders;
exports.getAccountProducts = getAccountProducts;
exports.getAccountRecommendations = getAccountRecommendations;

var _request = _interopRequireDefault(require("./request"));

var _app = require("../actions/app");

var _account = require("../actions/account");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//accounts api's
function getAccountList(dispatch) {
  (0, _request["default"])(dispatch, '/aisp/accounts', 'GET', null, {}, function (response) {
    //callback placeholder where one or multiple actions can be dispatched
    dispatch((0, _app.setData)(response));
    dispatch((0, _account.setAccountData)(response));

    if (response.Data.Account.length > 0) {
      dispatch((0, _account.setAccountId)(response.Data.Account[0].AccountId));
    }
  });
} // get account by id


function getAccountById(dispatch, accountId) {
  (0, _request["default"])(dispatch, "/aisp/accounts/".concat(accountId), 'GET', null, {}, function (response) {
    dispatch((0, _app.setData)(response));
  });
}

function getAccountBalances(dispatch, accountId) {
  (0, _request["default"])(dispatch, "/aisp/accounts/".concat(accountId, "/balances"), 'GET', null, {}, function (response) {
    dispatch((0, _app.setData)(response));
  });
}

function getAccountTransactions(dispatch, accountId) {
  (0, _request["default"])(dispatch, "/aisp/accounts/".concat(accountId, "/transactions"), 'GET', null, {}, function (response) {
    dispatch((0, _app.setData)(response));
  });
}

function getAccountDirectDebits(dispatch, accountId) {
  (0, _request["default"])(dispatch, "/aisp/accounts/".concat(accountId, "/direct-debits"), 'GET', null, {}, function (response) {
    dispatch((0, _app.setData)(response));
  });
}

function getAccountStandingOrders(dispatch, accountId) {
  (0, _request["default"])(dispatch, "/aisp/accounts/".concat(accountId, "/standing-orders"), 'GET', null, {}, function (response) {
    dispatch((0, _app.setData)(response));
  });
}

function getAccountProducts(dispatch, params) {
  (0, _request["default"])(dispatch, '/aisp/products', 'GET', params, {}, function (response) {
    dispatch((0, _app.setData)(response));
  });
}

function getAccountRecommendations(dispatch, accountId) {
  (0, _request["default"])(dispatch, "/aisp/accounts/".concat(accountId), 'GET', null, {}, function (response) {
    dispatch((0, _app.setData)(response));
  });
}