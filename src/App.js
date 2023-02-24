import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "react-loaders";

// CSS
import "./App.scss";

// Layout
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
      <Loader type="semi-circle-spin" />
    </BrowserRouter>
  );
}

export default App;
