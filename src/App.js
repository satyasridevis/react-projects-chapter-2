import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";

import logo from "./assets/logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header logo={logo} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile userName="octocat" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
