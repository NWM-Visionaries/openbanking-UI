import { SET_ACCOUNT_ID, SET_ACCOUNT_DATA } from '../actionCreators/account'

export const setAccountId = (accountId) => {
    return { type: SET_ACCOUNT_ID, accountId }
}

export const setAccountData = (data) => {
    return { type: SET_ACCOUNT_DATA, data }
}
