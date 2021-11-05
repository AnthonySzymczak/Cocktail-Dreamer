import React from 'react'


import ImageB from '../../../images/Brandy.jpg'
import ImageG from '../../../images/Gin.jpg'
import ImageV from '../../../images/Vodka.jpg'
import ImageW from '../../../images/Whiskey.jpg'
import ImageR from '../../../images/Rum.jpg'
import ImageT from '../../../images/Tequila.jpg'
import ImageP from '../../../images/preHistory.jpg'
import ImageTools from '../../../images/tools.jpg'

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

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./Knowledge.css";


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
      <Route path='/brandy' exact component={brandy} />
      <Route path='/gin' exact component={gin} />
      <Route path='/vodka' exact component={vodka} />
      <Route path='/tequila' exact component={tequila} />
      <Route path='/rum' exact component={rum} />
      <Route path='/whiskey' exact component={whiskey} />
      <Route path='/liqueurs' exact component={liqueurs} />
      <Route path='/preHistory' exact component={preHistory} />
      <Route path='/tools' exact component={tools} />
    </Switch>
  </Router>

  return (
    <>
      <div><h3>
        Scroll down and read up on some of the most popular drinks around the world.
      </h3></div>
      <div>
        <div>
          <div class="min-h-half bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <img className="photo rounded-lg" src={ImageP} alt="PreHistory" />
                <div className='mt-2'>
                  <div class="max-w-md mx-auto">
                    <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Pre-History
                    </h2>
                    <h1 className="font-bold text-blue-700 leading-snug">
                      <Link to="/preHistory" className="hover:underline">A brief Pre-History</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div class="min-h-half bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <img className="photo rounded-lg" src={ImageTools} alt="Tools" />
                <div className='mt-2'>
                  <div class="max-w-md mx-auto">
                    <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Tools
                    </h2>
                    <h1 className="font-bold text-blue-700 leading-snug">
                      <Link to="/tools" className="hover:underline">Upgrade your craft!</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="min-h-half bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <img className="photo rounded-lg" src={ImageTools} alt="Liqueurs" />
                <div className='mt-2'>
                  <div class="max-w-md mx-auto">
                    <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Liqueurs, Aperitifs, Digestifs!
                    </h2>
                    <h1 className="font-bold text-blue-700 leading-snug">
                      <Link to="/liqueurs" className="hover:underline">Liqueurs, Aperitifs, Digestifs!</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="min-h-half bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <img className="photo rounded-lg" src={ImageB} alt="Brandy" />
                <div className='mt-2'>
                  <div class="max-w-md mx-auto">
                    <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Brandy</h2>
                    <h1 className="font-bold text-blue-700 leading-snug">
                      <Link to="/brandy" className="hover:underline">Dive in, Brandy..</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="min-h-half bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <img className="photo rounded-lg" src={ImageG} alt="Gin Bottle" />
                <div className='mt-2'>
                  <div class="max-w-md mx-auto">
                    <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Gin
                    </h2>
                    <h1 className="font-bold text-blue-700 leading-snug">
                      <Link to="/gin" className="hover:underline">Grab your Tuxedo, Gin..</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="min-h-half bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <img className="photo rounded-lg" src={ImageV} alt="Vodka" />
                <div className='mt-2'>
                  <div class="max-w-md mx-auto">
                    <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Vodka
                    </h2>
                    <h1 className="font-bold text-blue-700 leading-snug">
                      <Link to="/vodka" className="hover:underline">Dive in, Vodka..!</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="min-h-half bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <img className="photo rounded-lg" src={ImageT} alt="Tequila" />
                <div className='mt-2'>
                  <div class="max-w-md mx-auto">
                    <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Tequila
                    </h2>
                    <h1 className="font-bold text-blue-700 leading-snug">
                      <Link to="/tequila" className="hover:underline">Let's Celebrate Tequila!!</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="min-h-half bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <img className="photo rounded-lg" src={ImageR} alt="Rum" />
                <div className='mt-2'>
                  <div class="max-w-md mx-auto">
                    <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Rum
                    </h2>
                    <h1 className="font-bold text-blue-700 leading-snug">
                      <Link to="/rum" className="hover:underline">Becoming a Beach Bum?</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="min-h-half bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <img className="photo" src={ImageW} alt="Whiskey Bottle" />
                <div className='mt-2'>
                  <div class="max-w-md mx-auto">
                    <h2 className="justify-center text-xs text-blue-600 uppercase font-bold">Whiskey
                    </h2>
                    <h1 className="font-bold text-blue-700 leading-snug">
                      <Link to="/whiskey" className="hover:underline">Dive in, Whiskey..</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Knowledge;