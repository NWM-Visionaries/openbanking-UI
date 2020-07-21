import { SET_ACCOUNT_ID, SET_ACCOUNT_DATA } from '../actionCreators/account'

const initialState = {
    accountId:null,
    accountData:null
}
function accountReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACCOUNT_ID: {
            return { ...state, accountId: action.accountId }
        }
        case SET_ACCOUNT_DATA: {
            return { ...state, accountData: action.accountData }
        }
        default:
            return state
    }
}

export default accountReducer
