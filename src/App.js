import { CssBaseline } from '@material-ui/core';
import ReactGA from 'react-ga';

import About from './components/About';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import Jerseys from './components/Jerseys';
import Stats from './components/Stats';

function App() {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-22412489-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  return (
    <>
      <CssBaseline />
      <AppHeader />
      <Jerseys />
      <Stats />
      <About />
      <AppFooter />
    </>
  );
}

export default App;
