import React from 'react';
import Navbar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cocktails from './Components/Cocktails/Cocktails';
import ContactForm from './Components/Contact/index';
// import Create from './Components/Create';
import Knowledge from './Components/Booze/Knowledge/index';
//import Suggestions from './Components/Suggestions/Suggestions';
import AboutUs from './Components/AboutUs';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import './App.css';

// sub calls for knowledge rendering.
import brandy from './Components/Booze/Brandy/brandy';
import gin from './Components/Booze/Gin/gin';
import vodka from './Components/Booze/Vodka/vodka';
import tequila from './Components/Booze/Mezcal-and-Tequila/tequila';
import rum from './Components/Booze/Rum-Cachaca/rum';
import whiskey from './Components/Booze/Whiskeys/whiskeys';
import liqueurs from './Components/Booze/Liqueurs-Aperitifs-After-Dinner-Spirits/liqueurs';
import preHistory from './Components/Booze/PreHistory/preHistory';
import tools from './Components/Booze/Tools/tools';


function App() {
  return (
    <>
 
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Welcome}/>
            <Route path='/Cocktails' exact component={Cocktails}/>
            <Route path='/Contact' exact component={ContactForm}/>
            {/* <Route path='/Create' exact component={Create}/> */}
            <Route path='/Knowledge' exact component={Knowledge}/>
            {/* <Route path='/Suggestions' exact component={Suggestions}/> */}
            <Route path='/AboutUs' exact component={AboutUs}/>
            <Route path= '/brandy' exact component={brandy}/>
            <Route path='/gin' exact component={gin}/>
            <Route path='/vodka' exact component={vodka}/>
            <Route path='/tequila' exact component={tequila}/>
            <Route path='/rum' exact component={rum}/>
            <Route path='/whiskey' exact component={whiskey}/>
            <Route path='/liqueurs' exact component={liqueurs}/>
            <Route path='/preHistory' exact component={preHistory}/>
            <Route path='/tools' exact component={tools}/>
          </Switch>
        </Router>
        <Footer />

      </>

  );
  }


export default App;