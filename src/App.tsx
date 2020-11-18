import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Apply from './components/Apply/Apply';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Success from './components/Success/Success';
import Update from './components/Update/Update';

function App() {
  return (
    <div>
      <Navbar />
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
