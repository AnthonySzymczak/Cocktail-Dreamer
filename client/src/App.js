import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Navbar from './pages/NavBar';
import Cocktails from './pages/Cocktails/Cocktails';
import ContactForm from './pages/Contact/index';
import CYO from './pages/CYO/Cyo';
import Knowledge from './pages/Booze/Knowledge';
import Suggestions from './pages/Suggestions/Suggestions';
import AboutUs from './pages/AboutUs';
import Welcome from './pages/Welcome';
import Footer from './pages/Footer'
import './App.css';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
     <ApolloProvider client={client}>
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

        <Footer />
        </Router>
 
        </ApolloProvider>

  );
  }


export default App;