import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccountList,
  getAccountById,
  getAccountBalances,
  getAccountTransactions,
  getAccountRecommendations,
  getAccountProducts,
  getAccountStandingOrders,
} from "@openbanking/ui-data/lib/services/account-service";

export default function AccountObject({ account }) {
  const data = useSelector((state) => state.app.data);

  const dispatch = useDispatch();

  const [accountRecom, setAccountRecom] = useState({});
  const [hasError, setErrors] = useState(false);

  async function fetchAccountRecommendations(accountId) {
    console.log(
      "http://localhost:4002/open-banking/recommendation/getRecs?accountId=" +
        accountId
    );
    const res = await fetch(
      "http://localhost:4002/open-banking/recommendation/getRecs?accountId=" +
        accountId
    );

    const responseJSON = res.data;
    console.log(responseJSON);
    console.log(JSON.stringify(responseJSON));
    res
      .json()
      .then((data) => {
        console.log(data);
        let recomdString = "Recommendations for Account " + accountId + " : ";
        for (let index = 0; index < data.Actions.length; index++) {
          recomdString =
            recomdString +
            " Rec " +
            (index + 1) +
            " :- " +
            data.Actions[index].Action;
        }
        //data.Actions.forEach(action => {recomdString+ " ; " +action.Action})
        alert(recomdString);
      })
      .catch((err) => setErrors(err));

    console.log(accountRecom);
  }

  return (
    <>
      <tr className="rowStyle">
        <td className="col-md">{account.Nickname}</td>
        <td className="col-md">{account.Currency}</td>
        <td className="col-md">{account.Description}</td>
        <td className="col-md">{account.AccountType}</td>

        <td className="col-md">{account.AccountId}</td>
        <td>
          <button
            onClick={() => getAccountTransactions(dispatch, account.AccountId)}
          >
            Manage Budget
          </button>
        </td>
        <td>
          <button
            onClick={() => fetchAccountRecommendations(account.AccountId)}
          >
            Get Recommendation
          </button>
        </td>
      </tr>
    </>
  );
}
