import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "redux/store";
import { Home } from "Pages/Home";

function App() {
  return (
    <StoreProvider store={store}>
      <ToastContainer />
      <Home />
    </StoreProvider>
  );
}

export default App;
