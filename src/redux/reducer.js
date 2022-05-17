import {
  DO_LOGIN,
  INSERT_PASSWORD,
  INSERT_USERNAME,
  ADD_CUSTOMER,
  ADD_MESSAGE,
  SET_RECEIVER_BALANC,
  SET_SENDER_BALANC,
} from "./actiontypes";

const initialState = {
  loginer: [""],
  sender: [""],
  username: [""],
  password: [""],
  email: [""],
  customer: [{ username: "", password: "", balance: 0, email: "" }],
  senderBalance: [""],
  receiverBalance: [""],

  message: [""],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "DO_LOGIN":
      return { ...state, loginer: [...state.loginer, action.loginer] };
    case "INSERT_USERNAME":
      return { ...state, username: [...state.username, action.username] };
    case "INSERT_PASSWORD":
      return { ...state, password: [...state.password, action.password] };
    case "INSERT_EMAIL":
      return { ...state, email: [...state.email, action.email] };
    case "ADD_MESSAGE":
      return { ...state, message: [...state.message, action.message] };
    case "ADD_CUSTOMER":
      return { ...state, customer: [...state.customer, action.customer] };
    case "  SET_SENDER_BALANC":
      return {
        ...state,
        senderBalance: [...state.senderBalance, action.senderBalance],
      };
    case "  SET_RECEIVER_BALANC":
      return {
        ...state,
        receiverBalance: [...state.receiverBalance, action.receiverBalance],
      };

    default:
      return state;
  }
}

export default reducer;
