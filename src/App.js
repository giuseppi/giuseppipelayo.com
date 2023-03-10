import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    </BrowserRouter>
  );
}

export default App;
