import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

import logo from "./assets/logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />

        <Routes>
          <Route path="/" element={<Profile userName="octocat" />}></Route>
          <Route
            path="/projects"
            element={<Projects userName="octocat" />}
          ></Route>
          <Route
            path="/projects/:name"
            element={<ProjectDetail userName="octocat" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
