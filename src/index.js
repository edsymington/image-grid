import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css';

// Mount the app to the DOM
ReactDOM.render(<React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app-root')
);