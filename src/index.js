import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css'; //import cssnya
import App from './App';
import { appendFile } from 'fs';
import * as serviceWorker from './serviceWorker';

//const items = ['Merah','Kuning','Hijau','Biru'];

const items = [
  {
    name : "white",
    background : 'white',
   
  },
  {
    name : "black",
    color : 'black',
  }
];

ReactDOM.render(<App items={items}/>,
  document.getElementById('root')
);

serviceWorker.register();
