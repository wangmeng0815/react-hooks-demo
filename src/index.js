import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';     // ? 性能优化监听
import { BrowserRouter } from 'react-router-dom';


import { createStore, applyMiddleware, compose } from 'redux';
import { counter, addFunc, removeFunc, asyncAddFunc } from './reducer/index.js';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

// ! redux
// const store = createStore(counter, window.devToolsExtension ? window.devToolsExtension() : () => {});

// ? redux-thunk
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {}
));

function render() {
    // ! redux
    // ReactDOM.render(
    //     <BrowserRouter>
    //         <App store={store} addFunc={ addFunc } reduceFunc={ removeFunc } asyncAddFunc={ asyncAddFunc } />
    //     </BrowserRouter>,
    //     document.getElementById('root')
    // );

    // ! react-redux
    ReactDOM.render(
        <Provider store={ store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}
render();

// ! redux
// store.subscribe(render);



// reportWebVitals();
