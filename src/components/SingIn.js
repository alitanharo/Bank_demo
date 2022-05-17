import React, { useState } from "react";
import { Customers } from "./customers";
import {
  insertUsername,
  insertPassword,
  insertEmail,
  addCustomer,
} from "../redux/actions";
import { connect } from "react-redux";

function SingIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState("");
  const customer = new Customers(
    ` ${username}`,
    ` ${password}`,
    `${balance}`,
    `${email}`
  );

  function handleChange(e) {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username && password && email !== "") {
      props.insertUsername(username);
      props.insertPassword(password);
      props.insertEmail(email);
      props.addCustomer(customer);
      customer.setCookie("username", username, 2024);

      // vip[0].setCookie("username", "alex", 2024);
      // vip[1].setCookie("username", "tom", 2024);
      //  vip[2].setCookie("username", "jerry", 2024);

      alert(
        `Hi ${customer.username} welcome to your bank, please login for start!   `
      );
      console.log(customer);

      setUsername("");
      setEmail("");
      setPassword("");
      document.getElementById("singin").innerText =
        "Greate , now you have a new account , log in and visit it !";
    } else {
      alert("Please enter your information before submite!");
    }
  }

  return (
    <div className="singin" id="singin">
      <form onSubmit={handleSubmit}>
        <h2> Sing in and create a new account</h2>
        <label>Please enter your information</label>
        <br />
        <input
          name="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
        />
        <br /> <br />
        <button className="button" type="submit">
          sing in
        </button>
      </form>
    </div>
  );
}

export default connect(null, {
  insertUsername,
  insertPassword,
  insertEmail,
  addCustomer,
})(SingIn);
