import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import PasswordRecovery from '../containers/PasswordRecovery';
import NotFound from '../pages/NotFound';
import '../styles/global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path={'/'} component={ Home } />
                    <Route exact path={'/login'} component={ Login } />
                    <Route exact path={'/password-recovery'} component={ PasswordRecovery } />
                    <Route path="*" component={ NotFound } />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;