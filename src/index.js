import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';

import { createBrowserHistory } from 'history';

import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers';

import RouteList from './containers/List';
import RouteEdit from './containers/Edit';
import RouteCreate from './containers/Create';

import './styles/App.css';

const initialState = {
    contacts: [],
    filter: '',
};

const history = createBrowserHistory();
const store = createStore(connectRouter(history)(rootReducer), initialState, compose(
    applyMiddleware(
        routerMiddleware(history)
    )
));

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

registerServiceWorker();