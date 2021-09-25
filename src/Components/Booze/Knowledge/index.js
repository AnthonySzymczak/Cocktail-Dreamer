import React from 'react'

<BrandyCard
img="../images/Brandy.jpg"
imgAlt="Bottles of Brandy"
eyebrow="Brandy"
title="Ingredients, Types, and History"
url="../Brandy"
/>

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
      
        <div><h3>
                This page is where we incorporate the seven kowledge-based pages into cards 
                to be clicked on and then bring you to the corresponding pages. 
        </h3></div>
     /*   <div class="flex items-center justify-between w-full">
        <div class="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
            <div class="w-full lg:w-2/3 h-64 dark:bg-gray-800">Let me Test</div>
            <div class="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">The text here</div>
        </div> */
        
  <div>
    <img class="rounded" src="img" alt="imgAlt"/>
    <div className="mt-2">
      <div>
        <div className="text-xs text-blue-600 uppercase font-bold">{{ eyebrow }}</div>
        <div className="font-bold text-blue-700 leading-snug">
          <a href="url" class="hover:underline">{{ title }}</a>
        </div>
      </div>
    </div>
  </div>
);
};

export default {
    props: ['img', 'imgAlt', 'eyebrow', 'title', 'pricing', 'url']
  }
  );
};



export default Knowledge;