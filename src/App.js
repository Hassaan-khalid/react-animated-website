import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Service from './Service';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* we use Navbar as a seperate component and decelare on top bcz we show on top */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
      <Footer />

    </>
  );
}

export default App;
