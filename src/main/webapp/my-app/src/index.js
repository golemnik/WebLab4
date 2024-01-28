import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import {Provider} from "react-redux";
import store from "./store/Store"
import ControlledGraph from "./components/drawing/ControlledGraph";

const root = ReactDOM.createRoot(document.getElementById('root'));
function render () {
    console.log("root:", root);
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );

}


store.subscribe(render);
render();
