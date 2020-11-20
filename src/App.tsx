import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Apply from './components/Apply/Apply';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Success from './components/Success/Success';
import Update from './components/Update/Update';
import { languageContext } from './store/LanguageProvider';

function App() {
  const { language, setLanguage } = useContext(languageContext);

  return (
    <div>
      <Navbar language={language} setLanguage={setLanguage} />
      <Switch>
        <Route path="/apply" component={Apply} />
        <Route path="/update" component={Update} />
        <Route path="/success" component={Success} />
        <Redirect to="/update" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
