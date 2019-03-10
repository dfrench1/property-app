
import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import '!style-loader!css-loader!rc-slider/assets/index.css'; 


  hydrate(
    <BrowserRouter>
      <App location={location}/>
    </BrowserRouter>,
    document.getElementById('root')
  );