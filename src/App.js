import React from 'react';
import Navbar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cocktails from './Components/Cocktails/Cocktails';
import ContactForm from './Components/Contact/index';
import Create from './Components/Create';
import Knowledge from './Components/Booze/Knowledge/index';
import Suggestions from './Components/Suggestions/Suggestions';
import AboutUs from './Components/AboutUs';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
 
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Welcome}/>
            <Route path='/Cocktails' exact component={Cocktails}/>
            <Route path='/Contact' exact component={ContactForm}/>
            <Route path='/Create' exact component={Create}/>
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