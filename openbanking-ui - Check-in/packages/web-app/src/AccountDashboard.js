import React, { useState, useEffect } from "react";
import logo from "./open-banking.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccountList,
  getAccountById,
  getAccountBalances,
  getAccountTransactions,
  getAccountDirectDebits,
  getAccountProducts,
  getAccountStandingOrders,
} from "@openbanking/ui-data/lib/services/account-service";
import InfoDisplay from "@openbanking/ui-common/lib/InfoDisplay";
import "./Accounts.css";
import AccountTable from "./AccountsTable";
import TransactionTable from "./TransactionTable";

//accounts api list
const AccountDashboard = () => {
  const data = useSelector((state) => state.app.data);
  const accountId = useSelector((state) => state.account.accountId);
  const accountList = useSelector((state) => state.account.accountData);

  const dispatch = useDispatch();

  const [accountsList, setaccountsList] = useState({});
  const [hasError, setErrors] = useState(false);
  const [healthStatus, setHealthStatus] = useState("");
  const [healthServerTotal, sethealthServerTotal] = useState("");
  const [healthServerFree, sethealthServerFree] = useState("");
  const [healthServerThreshold, sethealthServerThreshold] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(getAccountList(dispatch));

      console.log(res);

      res
        .json()
        .then((data) => setaccountsList(data))
        .catch((err) => setErrors(err));
    }

    fetchData();
    fetchServiceHealth();
  }, []);

  async function fetchServiceHealth(accountId) {
    console.log("http://8493a6129097.ngrok.io/actuator/health");
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/http://8493a6129097.ngrok.io/actuator/health"
    );

    const responseJSON = res.data;
    console.log(responseJSON);
    console.log(JSON.stringify(responseJSON));
    res
      .json()
      .then((data) => {
        console.log(data);
        const statusString = "Status : " + data.status;
        setHealthStatus(statusString);
        const healthServerTotalString =
          "Server Details : Total - " + data.details.diskSpace.details.total;
        sethealthServerTotal(healthServerTotalString);
        const healthServerFreeString =
          "Free - " + data.details.diskSpace.details.free;
        sethealthServerFree(healthServerFreeString);
        const healthServerThresholdString =
          "Threshold - " + data.details.diskSpace.details.threshold;
        sethealthServerThreshold(healthServerThresholdString);
      })
      .catch((err) => setErrors(err));
  }

  let conditionalDivTag;

  if (data !== null) {
    if (data.Data.Account !== undefined) {
      conditionalDivTag = (
        <div>
          <AccountTable data={data}></AccountTable>
        </div>
      );
    } else {
      conditionalDivTag = conditionalDivTag = (
        <div>
          <TransactionTable data={data}></TransactionTable>
        </div>
      );
    }
  } else {
    conditionalDivTag = <div>Blank Data</div>;
  }

  return (
    <div className="mainContainer">
      <div>
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp;
        <button onClick={() => fetchServiceHealth()}>Get Service Health</button>
        <br></br>
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; Health Check : {healthStatus} <br></br>
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp;
        {healthServerTotal}
        <br></br>
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp;
        {healthServerFree}
        <br></br>
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp;
        {healthServerThreshold}
      </div>
      <h2 className="pageTitle">Account Dashboard</h2>
      &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
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
  );
};

export default AccountDashboard;
