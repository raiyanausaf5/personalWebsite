import Header from "../Components/Header";
import React from "react";
import '../index.css';
import {Route, Routes} from 'react-router-dom';
import Resume from "./Resume";
import Projects from "./Projects";

export default function Main() {
  return (
    <><Header /><Routes>
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
    </Routes></>
    
  );
}

