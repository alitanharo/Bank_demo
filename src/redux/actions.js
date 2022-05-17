import {
  DO_LOGIN,
  INSERT_EMAIL,
  INSERT_PASSWORD,
  INSERT_USERNAME,
  ADD_CUSTOMER,
  SET_SENDER_BALANC,
  SET_RECEIVER_BALANC,
  ADD_MESSAGE,
} from "./actiontypes";

export function doLogin(loginer) {
  return {
    type: "DO_LOGIN",
    loginer: loginer,
  };
}

export function insertUsername(username) {
  return {
    type: "INSERT_USERNAME",
    username: username,
  };
}

export function insertPassword(password) {
  return {
    type: "INSERT_PASSWORD",
    password: password,
  };
}

export function insertEmail(email) {
  return {
    type: "INSERT_EMAIL",
    email: email,
  };
}

export function addCustomer(customer) {
  return {
    type: "ADD_CUSTOMER",
    customer: customer,
  };
}

export function setSenderBalance(senderBalance) {
  return {
    type: "SET_SENDER_BALANC",
    senderbalance: senderBalance,
  };
}
export function setReceiverBalance(receiverBalance) {
  return {
    type: "SET_RECIVER_BALANC",
    receiverBalance: receiverBalance,
  };
}

export function addMessage(message) {
  return {
    type: "ADD_MESSAGE",
    message: message,
  };
}
