import React from 'react';
import Navbar from './Pages/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cocktails from './Pages/Cocktails/Cocktails';
import ContactForm from './Pages/Contact/index';
import CYO from './Pages/CYO/Cyo';
import Knowledge from './Pages/Booze/Knowledge';
import Suggestions from './Pages/Suggestions/Suggestions';
import AboutUs from './Pages/AboutUs';
import Welcome from './Pages/Welcome';
import Footer from './Pages/Footer'
import './App.css';

function App() {
  return (
    <>
 
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Welcome}/>
            <Route path='/Cocktails' exact component={Cocktails}/>
            <Route path='/Contact' exact component={ContactForm}/>
            <Route path='/CYO' exact component={CYO}/>
            <Route path='/Knowledge' exact component={Knowledge}/>
            <Route path='/Suggestions' exact component={Suggestions}/>
            <Route path='/AboutUs' exact component={AboutUs}/>
            
          </Switch>

        </Router>
        <Footer />

      </>

  );
  }


export default App;