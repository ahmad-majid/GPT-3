import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Headers,
  Features,
  WhatGPT3,
} from "./container";
import { Cta, Brand, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Headers />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
