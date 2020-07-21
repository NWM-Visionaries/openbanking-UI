import React,  { useState, useEffect }  from 'react'
import logo from './open-banking.jpg'
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
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'
import AccountTable from './AccountsTable'
import TransactionTable from './TransactionTable'

//accounts api list
const AccountDashboard = () => {
    const data = useSelector((state) => state.app.data)
    const accountId = useSelector((state) => state.account.accountId)
    const accountList = useSelector((state) => state.account.accountData)

    const dispatch = useDispatch()

    const [accountsList, setaccountsList] = useState({});
    const [hasError, setErrors] = useState(false);

    useEffect(() => {
        async function fetchData() {
          const res = await fetch(getAccountList(dispatch));
          
          console.log(res)
          
          res.json()
            .then(data => setaccountsList(data))
            .catch(err => setErrors(err));
        }
    
        fetchData();
      },[]);

      async function fetchAccountRecommendations(accountId)
      {
        const res = await fetch('http://899f97053d28.ngrok.io/open-banking/recommendation/getRecs?accountId='+accountId);
          
          console.log(res)
          
          res.json()
            .then(res => setaccountsList(res))
            .catch(err => setErrors(err));
      }


    let conditionalDivTag

    if(data !== null)
    {
        if (data.Data.Account !== undefined)
        {
            conditionalDivTag = <div><AccountTable data={data}></AccountTable></div>
        }
        else
        {
            conditionalDivTag =conditionalDivTag = <div><TransactionTable data={data}></TransactionTable></div>
        }
    }
    else
    {
        conditionalDivTag = <div>Blank Data</div>
    }

    return (
        <div className="mainContainer">
            <h2 className="pageTitle">Account Dashboard</h2>
            <div className="dashboard">
                <div className="row">
                    {/*<InfoDisplay data={data} /> */}
                    {conditionalDivTag}
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="journeyBtns">
                        {/*<button className="journeyBtn" onClick={() => getAccountList(dispatch)}>Account Details</button>
                        <button className="journeyBtn" onClick={() => getAccountById(dispatch, accountId)}>Get Recommendations</button>
                        </div>
                        <div className="journeyBtns">
                        <button className="journeyBtn" onClick={() => getAccountTransactions(dispatch, accountId)}>Expense Management</button>
                        <button className="journeyBtn" onClick={() => getAccountById(dispatch, accountId)}>Easy Billing</button>
                        */}
                        <img src={logo}></img>
                        </div>
                    </div>
                </div>
                <div className="row"></div>
                
            </div>
        </div>
    )
}

export default AccountDashboard
