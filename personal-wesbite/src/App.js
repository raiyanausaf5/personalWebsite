import React from 'react'
import Resume from "./Pages/Resume.js";
import Projects from "./Pages/Projects.js";
import Main from "./Pages/Main.js";
import Contact from "./Pages/ContactMe.js";
import About from "./Pages/AboutMe.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header.js";

export const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contactme" element={<Contact />} />
      <Route path="/aboutme" element={<About />} />
    </Routes>
    </>
  )
}
