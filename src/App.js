import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cocktails from '../Components/Cocktails/Cocktails';
import ContactForm from './components/Contact';
import CYO from '../Components/CYO/Cyo';
import Knowledge from '../Components/Booze/Knowledge';
import suggestions from '../Components/Suggestions/Suggestions';
import './App.css';

function App() {
  return (
    <>
 
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={About}/>
            <Route path='/Cocktails' exact component={Cocktails}/>
            <Route path='/contact' exact component={ContactForm}/>
            <Route path='/CYO' exact component={CYO}/>
            <Route path='/knowledge' exact component={Knowledge}/>
            <Route path='/suggestions' exact component={suggestions}/>
            
          </Switch>

        </Router>
        <Footer />

      </>

  );
  }


export default App;