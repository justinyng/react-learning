import NasaProjects from 'Components/NasaProjects';
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Components/Welcome';

ReactDOM.render(
  <React.StrictMode>
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
    <Welcome/>
    <NasaProjects/>
  </React.StrictMode>,
  document.getElementById('root')
);
