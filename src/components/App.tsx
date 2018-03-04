import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageNotFound } from './404/404';

interface AppProps {
    store: any;
}

const App: React.SFC<AppProps> = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <div>React Boilerplate</div>
                <Switch>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
