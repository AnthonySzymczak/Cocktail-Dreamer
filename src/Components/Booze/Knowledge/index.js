import React from 'react'
import ImageB from '../../../images/Brandy.jpg'
import ImageG from '../../../images/Gin.jpg'
import ImageV from '../../../images/Vodka.jpg'
import ImageW from '../../../images/Whiskey.jpg'
import ImageR from '../../../images/Rum.jpg'
import ImageT from '../../../images/Tequila.jpg'

// Import Files to links
import brandy from '../Brandy/brandy'
import gin from '../Gin/gin'
import vodka from '../Vodka/vodka'
import tequila from '../Mezcal-and-Tequila/tequila'
import rum from '../Rum-Cachaca/rum'
import whiskey from '../Whiskeys/whiskeys'
import liqueurs from '../Liqueurs-Aperitifs-After-Dinner-Spirits/liqueurs'
import preHistory from '../PreHistory/preHistory'
import tools from '../Tools/tools'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


/*function Template({ children, ...attrs }) {
    return (
      <template
        {...attrs}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  } */
function Knowledge() {


  <Router>
  <Switch>
    <Route path='/brandy' exact component={brandy}/>
    <Route path='/gin' exact component={gin}/>
    <Route path='/vodka' exact component={brandy}/>
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

    return (
      <>
        <div><h3>
                Scroll down and read up on some of the most popular drinks around the world.
        </h3></div>
        
  <div>
    <img className="photo" src={ImageB} alt="Brandy bottle"/>
    <div className='mt-2'>
      <div>
        <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Brandy
        </h2>
        <h1 className="font-bold text-blue-700 leading-snug">
          <Link to="/brandy" className="hover:underline">Ingredients, Types, and History</Link>
        </h1>
      </div>
    </div>
  </div>
  <div>
    <img className="photo" src={ImageG} alt="Gin bottle"/>
    <div className='mt-2'>
      <div>
        <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Gin
        </h2>
        <h1 className="font-bold text-blue-700 leading-snug">
          <Link to="/gin" className="hover:underline">Ingredients, Types, and History</Link>
        </h1>
      </div>
    </div>
  </div>
  <div>
    <img className="photo" src={ImageV} alt="Vodka bottle"/>
    <div className='mt-2'>
      <div>
        <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Vodka
        </h2>
        <h1 className="font-bold text-blue-700 leading-snug">
          <Link to="/vodka" className="hover:underline">Ingredients, Types, and History</Link>
        </h1>
      </div>
    </div>
  </div>
  <div>
    <img className="photo" src={ImageT} alt="Tequila bottle"/>
    <div className='mt-2'>
      <div>
        <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Tequila
        </h2>
        <h1 className="font-bold text-blue-700 leading-snug">
          <Link to="/tequila" className="hover:underline">Ingredients, Types, and History</Link>
        </h1>
      </div>
    </div>
  </div>
  <div>
    <img className="photo" src={ImageR} alt="Rum bottle"/>
    <div className='mt-2'>
      <div>
        <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Rum
        </h2>
        <h1 className="font-bold text-blue-700 leading-snug">
          <Link to="/rum" className="hover:underline">Ingredients, Types, and History</Link>
        </h1>
      </div>
    </div>
  </div>
  <div>
    <img className="photo" src={ImageW} alt="Whiskey bottle"/>
    <div className='mt-2'>
      <div>
        <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Whiskey
        </h2>
        <h1 className="font-bold text-blue-700 leading-snug">
          <Link to="/whiskey" className="hover:underline">Ingredients, Types, and History</Link>
        </h1>
      </div>
    </div>
  </div>
  </>
  );
};
     /*   <div className="flex items-center justify-between w-full">
        <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
            <div className="w-full lg:w-2/3 h-64 dark:bg-gray-800">Let me Test</div>
            <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">The text here</div>
        </div> */
export default Knowledge;