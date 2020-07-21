import React from 'react'

export default function TransactionObject ({transactionObj})
{
    return (
        <>
            <tr className="rowStyle">
            <td className="col-sm">{transactionObj.AccountId}</td>
            
            <td className="col-sm">{transactionObj.Amount.Amount}</td>
            
            <td className="col-sm">{transactionObj.Amount.Currency}</td>
            <td className="col-sm">{transactionObj.CreditDebitIndicator}</td>
            <td className="col-sm">{transactionObj.TransactionInformation}</td>
            </tr>
        </>
    )
}   