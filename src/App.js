import React from "react";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default App;
