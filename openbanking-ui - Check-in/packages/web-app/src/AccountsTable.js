import React from 'react'
import AccountObject from './AccountObject'
import PieChart from './PieChartCustom'

export default function AccountTable( { data = {} } )
{
    console.log(data)

    if (!data) {
        return null
    }

    const AccountList = data.Data.Account.map(account => <AccountObject account = {account}></AccountObject>)
    const AccountType = data.Data.Account.AccountId

    return <div>
        <table className="tableStyle">
            <tr className="rowStyle">
                <th className="col-md">Nickname</th>
                <th className="col-md">Currency</th>
                <th className="col-md">Description</th>
                <th className="col-md">Account Type</th>
                <th className="col-md">Account ID</th>
                <th className="col-md" colSpan={2}>Actions </th>
            </tr>
        {AccountList}
        </table>
        <PieChart data={AccountType}></PieChart>
    </div>
}