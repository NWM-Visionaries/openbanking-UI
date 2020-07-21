import React, {useState} from 'react'
import TransactionObject from './TransactionObject'
import PieChart from './PieChartCustom'
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

export default function TransactionTable( { data = {} } )
{
    const [selectedFilter, setFilter] = useState("TransactionInformation")
    const dispatch = useDispatch()

    if (!data) {
        return null
    }

    const TransactionList = data.Data.Transaction.map(transObj => <TransactionObject transactionObj = {transObj}></TransactionObject>)
    let CurrencyAmounts = {}
    
    data.Data.Transaction.forEach(element => {
        
        let currentValue = 0
        let key = element.Amount.Currency

        if (selectedFilter == "Currency")
        {
            key = element.Amount.Currency
        }
        else if(selectedFilter == "CreditDebitIndicator")
        {
            key = element.CreditDebitIndicator
        }
        else
        {
            key = element.TransactionInformation
        }

        if(CurrencyAmounts !== undefined)
        {
            currentValue = CurrencyAmounts[key]

            if (currentValue == undefined)
            {
                currentValue = 0
            }
        }

        Object.assign(CurrencyAmounts, CurrencyAmounts,{[key]: Number(element.Amount.Amount)+ Number(currentValue)})
        
    });

    console.log(CurrencyAmounts)

    return <div>
        
        <select 
            value={selectedFilter} 
            onChange={(event) => setFilter(event.target.value)} 
        >
       <option value="Currency">Currency</option>
        <option value="CreditDebitIndicator">CreditDebitIndicator</option>
        <option value="TransactionInformation">Transaction Information</option>
      </select>
      &emsp; &emsp; &emsp; &emsp; 
      <button onClick={() => getAccountList(dispatch)}>Go back to account summary</button>
        <PieChart data={CurrencyAmounts}></PieChart>
        
        <table className="tableStyle">
            <tr className="rowStyle">
                <th className="col-sm">Account ID</th>
                <th className="col-sm">Amount</th>
                <th className="col-sm">Currency</th>
                <th className="col-sm">CreditDebitIndicator</th>
                <th className="col-sm">Transaction Information</th>
            </tr>
        {TransactionList}
        </table>
        
    </div>
}