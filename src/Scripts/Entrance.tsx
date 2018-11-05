import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import 'css!../Contents/bootstrap/css/bootstrap.css';

export const Run=(domNode)=>{
    
    ReactDOM.render(
        
        <App />,
        document.getElementById(domNode));
};