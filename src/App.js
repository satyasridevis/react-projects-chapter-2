import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
// import ProjectDetail from "./pages/ProjectDetail";
import logo from "./assets/logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="octocat" />} />
        </Routes>
        <Route path="/projects" element={<Projects userName="octocat" />} />
      </BrowserRouter>

      {/* <BrowserRouter>
          <Header logo={logo} />
          <Routes>
            <Route path="/" element={<Profile userName="octocat" />}></Route>
            <Route path="/" element={<Projects userName="octocat" />}></Route>
            <Route
              path="/projects/:name"
              element={<ProjectDetail userName="octocat" />}
            />
          </Routes>
        </BrowserRouter> */}
    </div>
  );
};

export default App;
