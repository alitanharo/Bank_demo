import React, { useState } from "react";
import { connect } from "react-redux";
import { setSenderBalance, setReceiverBalance } from "../redux/actions";
import { vip } from "./customers";
import { Outlet, Link } from "react-router-dom";

function Transaction(props) {
  const loginerArr = props.l;
  const lastloginer = loginerArr[loginerArr.length - 1];
  const sender = lastloginer.username;
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const customerArr = props.c;
  const usernameArr = props.u;
  const usernameVipArr = ["alex", "tom", "jerry"];
  const customerList = customerArr.concat(vip);
  const usernameList = usernameArr.concat(usernameVipArr);
  const receiverIsCustomer = usernameList.includes(receiver);
  const receiverIndex = usernameList.indexOf(receiver);
  const receiverAccount = customerList[receiverIndex];
  const riport = lastloginer.lastTransaction;
  // const accountnumber =
  // lastloginer.username.length * lastloginer.email.length * 12345;
  function changeHandler(e) {
    if (e.target.type === "text") {
      setReceiver(e.target.value);
    } else {
      setAmount(e.target.value);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    if (receiverIsCustomer === true && lastloginer.balance > amount) {
      props.setSenderBalance(lastloginer.send(amount));
      props.setReceiverBalance(receiverAccount.receive(amount));
      if (lastloginer.balance >= 0) {
        alert(
          `Now ${sender} balance is : ${lastloginer.balance} $ and ${receiver} balance is : ${receiverAccount.balance} $`
        );
        setReceiver("");
        setAmount("");
        console.log(customerList);
        console.log(loginerArr);
        // console.log(usernameArr);
        //console.log(receiverIndex);
        // console.log(receiverIsCustomer);
        //console.log(receiverAccount);
        //console.log(usernameList);
        console.log(sender);
        console.log(lastloginer.balance);
        console.log(receiver);
        console.log(receiverAccount.balance);
      } else {
        alert("Your balance is not enough for this transaction");

        setAmount("");
      }
    } else {
      alert("receiver or your balance is not valid for this transaction");
    }
  }
  function handleClick(e) {
    lastloginer.logout();
    console.log(lastloginer);
  }

  return (
    <div className="transaction" id="transaction">
      <button onClick={handleClick}>
        {" "}
        <Link className="nav-link" to="/login">
          Logout
        </Link>
      </button>
      <br /> <br />
      <div className="history">
        <p className="ah">
          {" "}
          <b>Account History</b>
        </p>
        <cite>{Date()}</cite>
        <p>{"Account number: "}</p>
        <p>{"user name:" + lastloginer.username}</p>
        <p>{"E-mail:" + lastloginer.email}</p>
        <p>{"balance:" + lastloginer.balance + "$"}</p>
        <p>{"last transaction:" + riport + "$"}</p>
      </div>
      <h1> transaction </h1>
      <form onSubmit={submitHandler}>
        <label>from : </label>
        <input
          id="send"
          name="sender"
          type="search"
          value={sender}
          onChange={changeHandler}
        />
        <label> to : </label>
        <input
          placeholder="just write your receiver's username,(E.g:jerry)"
          name="recever"
          type="text"
          value={receiver}
          onChange={changeHandler}
        />
        <br /> <br />
        <label> amount : </label>
        <input
          name="amount"
          type="number"
          value={amount}
          onChange={changeHandler}
          min="1"
          max="10000"
          //step={100}
        />
        <label>$</label>
        <button className="button" type="submit">
          send
        </button>
      </form>
      <br /> <br />
    </div>
  );
}

const mapStatetoprops = (state) => {
  return {
    l: state.loginer,
    u: state.username,
    c: state.customer,
  };
};
export default connect(mapStatetoprops, {
  setSenderBalance,
  setReceiverBalance,
})(Transaction);
