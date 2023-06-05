import React from 'react'
import Projects from "./Pages/Projects.js";
import Main from "./Pages/Main.js";
import About from "./Pages/AboutMe.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header.js";

export const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutme" element={<About />} />
    </Routes>
    </>
  )
}
