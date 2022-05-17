import "./App.css";
import UserLoggin from "./components/UserLoggin";
import SendMessage from "./components/SendMessage";
import Transaction from "./components/Transaction";
//import MessageList from "./components/MessageList";
import SingIn from "./components/SingIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singin" element={<SingIn />} />
          <Route path="login" element={<UserLoggin />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="message" element={<SendMessage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
