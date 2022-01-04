import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Preferences from "./Components/Preferences/Preferences";
import ChatPage from "./Components/ChatPage";
import Login from "./Components/Login/Login";
import useToken from "./Components/Custom/useToken";
import "./App.css";

// ! Check the below link for how to add login auth
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
// ! Passing Socket in Context
// https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ChatPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/preferences" element={<Preferences />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
