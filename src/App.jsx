import React from "react";
import ReactGA from "react-ga";

import "./style.css";

import About from "./components/About";
import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";
import Jerseys from "./components/Jerseys";
import Stats from "./components/Stats";

function App() {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize("UA-22412489-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  return (
    <>
      <AppHeader />
      <Jerseys />
      <Stats />
      <About />
      <AppFooter />
    </>
  );
}

export default App;
