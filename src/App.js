import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./App.css";

// Layout
import Layout from "./components/layout.js";

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
