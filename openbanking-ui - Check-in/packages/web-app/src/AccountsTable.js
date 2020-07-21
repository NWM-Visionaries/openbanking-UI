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
                <th className="col-sm">Account ID</th>
                <th className="col-sm">Currency</th>
                <th className="col-sm">Description</th>
                <th className="col-sm">Account Type</th>
                <th className="col-sm">Nickname</th>
                <th className="col-sm" colSpan={3}>Actions </th>
            </tr>
        {AccountList}
        </table>
        <PieChart data={AccountType}></PieChart>
    </div>
}