import React from "react";
import ReactGA from "react-ga";

import "./App.css";

import { About, Footer, Header, Jerseys, Stats } from "./components/app";

function App() {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize("UA-22412489-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  return (
    <>
      <Header />
      <Jerseys />
      <Stats />
      <About />
      <Footer />
    </>
  );
}

export default App;
