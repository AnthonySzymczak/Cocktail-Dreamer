import React from 'react';
import Navbar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cocktails from './Components/Cocktails/Cocktails';
import ContactForm from './Components/Contact/index';
import CYO from './Components/CYO/Cyo';
import Knowledge from './Components/Booze/Knowledge';
import Suggestions from './Components/Suggestions/Suggestions';
import AboutUs from './Components/AboutUs';
import './App.css';

function App() {
  return (
    <>
 
        <Router>
          <Navbar />
          <Switch>
            {/* <Route path='/' exact component={About}/> */}
            <Route path='/Cocktails' exact component={Cocktails}/>
            <Route path='/Contact' exact component={ContactForm}/>
            <Route path='/CYO' exact component={CYO}/>
            <Route path='/Knowledge' exact component={Knowledge}/>
            <Route path='/Suggestions' exact component={Suggestions}/>
            <Route path='/AboutUs' exact component={AboutUs}/>
            
          </Switch>

        </Router>
        {/* <Footer /> */}

      </>

  );
  }


export default App;