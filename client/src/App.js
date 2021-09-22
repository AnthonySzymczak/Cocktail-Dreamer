import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Navbar from './Pages/NavBar';
import Cocktails from './Pages/Cocktails/Cocktails';
import ContactForm from './Pages/Contact/index';
import CYO from './Pages/CYO/Cyo';
import Knowledge from './Pages/Booze/Knowledge';
import Suggestions from './Pages/Suggestions/Suggestions';
import AboutUs from './Pages/AboutUs';
import Welcome from './Pages/Welcome';
import Footer from './Pages/Footer'
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