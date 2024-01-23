import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
// import { store } from './stores/store'
// import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
      <App />
    {/*<Provider store={store}>*/}
    {/*</Provider>*/}
  </React.StrictMode>
);

