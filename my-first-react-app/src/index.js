import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Components/Welcome';

ReactDOM.render(
  <React.StrictMode>
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
  </React.StrictMode>,
  document.getElementById('root')
);
