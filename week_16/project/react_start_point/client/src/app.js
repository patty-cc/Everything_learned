import React from 'react';
import ReactDOM from 'react-dom';
import BeerContainer from './containers/BeerContainer.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <BeerContainer />,
    document.getElementById('app')
  );
});
