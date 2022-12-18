import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function formatName(user) {

  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: 'Anjali',
  lastName: 'Poudel'
};

const element =
  ReactDOM.createRoot(document.getElementById('root'));
element.render(
  <h1>
    Hello, {formatName(user)}!
  </h1>
);