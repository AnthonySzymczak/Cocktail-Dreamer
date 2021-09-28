import React from 'react'
import ImageB from '../../../images/Brandy.jpg'
import ImageG from '../../../images/Gin.jpg'
import ImageV from '../../../images/Vodka.jpg'
import ImageW from '../../../images/Whiskey.jpg'
import ImageR from '../../../images/Rum.jpg'
import ImageT from '../../../images/Tequila.jpg'
/*function Template({ children, ...attrs }) {
    return (
      <template
        {...attrs}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  } */
function Knowledge() {
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
          <a href="url" className="hover:underline">Ingredients, Types, and History</a>
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
          <a href="url" className="hover:underline">Ingredients, Types, and History</a>
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
          <a href="url" className="hover:underline">Ingredients, Types, and History</a>
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
          <a href="url" className="hover:underline">Ingredients, Types, and History</a>
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
          <a href="url" className="hover:underline">Ingredients, Types, and History</a>
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
          <a href="url" className="hover:underline">Ingredients, Types, and History</a>
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