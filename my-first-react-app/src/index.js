import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};
const formatName = (user) => {
  return user.firstName + ' ' + user.lastName;
};

const tick = () => {
  const element = (
    <div>
      <h1>Hello, {formatName(user)}!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(
    <React.StrictMode>{element}</React.StrictMode>,
    document.getElementById('root')
  );
};

setInterval(tick, 1000);
