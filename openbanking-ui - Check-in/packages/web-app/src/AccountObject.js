import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'

export default function AccountObject ({account})
{
    const data = useSelector((state) => state.app.data)
    

    const dispatch = useDispatch()

    return (
        <>
            <tr className="rowStyle">
            <td className="col-sm">{account.AccountId}</td>            
            <td className="col-sm">{account.Currency}</td>
            <td className="col-sm">{account.Description}</td>
            <td className="col-sm">{account.AccountType}</td>
            <td className="col-sm">{account.Nickname}</td>
            <td><button onClick={() => getAccountTransactions(dispatch, account.AccountId)}>Manage Budget</button></td>
            <td><button onClick={() => getAccountTransactions(dispatch, account.AccountId)}>Get Recommendation</button></td>
            </tr>
        </>
    )
}   