import './styles/App.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';

import { createBrowserHistory } from 'history';

import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers';

// Routes
import RouteList from './containers/List';
import RouteEdit from './containers/Edit';
import RouteCreate from './containers/Create';

import { asyncReset } from './actions/contacts';

// Init firebase
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

const initialState = {
    contacts: [],
    filter: '',
};

// Create store
const history = createBrowserHistory();
const store = createStore(connectRouter(history)(rootReducer), initialState, compose(
    applyMiddleware(
        routerMiddleware(history),
        thunk
    )
));

// Reset store with the initial list of contacts and render the routes
store.dispatch(asyncReset()).then(()=> {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={RouteList} />
                    <Route path="/contacts/:id" component={RouteEdit} />
                    <Route path="/create" component={RouteCreate} />
                </Switch>
            </ConnectedRouter>
        </Provider>,
    
        document.getElementById('root')
    );
});

registerServiceWorker();