import React, { useState } from "react";
import { connect } from "react-redux";
import { doLogin } from "../redux/actions";
import { vip } from "./customers";

function UserLoggin(props) {
  const [loginer, setLoginer] = useState("");
  const [pswd, setPswd] = useState("");
  const customerArr = props.c;
  const usernameArr = props.u;
  const passwordArr = props.p;
  const customerList = customerArr.concat(vip);
  // const lastCustomer = customerArr[customerArr.length - 1];

  function handleChange(e) {
    if (e.target.type === "search") {
      setLoginer(e.target.value);
    } else {
      setPswd(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (loginer && pswd !== "") {
      for (let i = 1; i < customerList.length; i++) {
        if (
          (loginer === usernameArr[i] && pswd === passwordArr[i]) ||
          (loginer === customerList[i].username &&
            pswd === customerList[i].password)
        ) {
          props.doLogin(customerList[i]);
          //lastCustomer.getCookie("username");

          console.log(customerList);
          console.log(customerArr);
          console.log(usernameArr);
          console.log(customerList[i]);
          //console.log(passwordArr);
          // vip[0].getCookie("username");
          // vip[1].getCookie("username");
          //vip[2].getCookie("username");
          alert(
            `Welcome ${customerList[i].username} your balance is: 0 ${customerList[i].balance}  $`
          );
          console.log(loginer);
          document.getElementById("login").innerText =
            "Your log in was successful, just look at your account  by clicking in my page in the top !";
        } else {
          setPswd("");
          setLoginer("");
        }
      }
    } else {
      alert("Enter username and password.");
    }
  }

  return (
    <div className="login" id="login">
      <form onSubmit={handleSubmit}>
        <header>
          <h1>The vulnerable Bank</h1>
        </header>
        <label>Please login for start as a customer</label> <br />
        <input
          name="loginer"
          type="search"
          value={loginer}
          onChange={handleChange}
          placeholder="username"
        />
        <br />
        <input
          name="pswd"
          type="password"
          value={pswd}
          onChange={handleChange}
          placeholder="password "
        />
        <br /> <br />
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

const mapStatetoprops = (state) => {
  return {
    u: state.username,
    p: state.password,
    e: state.email,
    c: state.customer,
  };
};

export default connect(mapStatetoprops, { doLogin })(UserLoggin);
