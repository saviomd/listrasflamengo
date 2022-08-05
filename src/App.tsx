import { useEffect } from "react";

import "./App.css";

import { About, Footer, Header, Jerseys, Stats } from "./components/app";
import { trackGaPageView } from "./utils";

function App() {
  useEffect(() => {
    trackGaPageView();
  }, []);

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
