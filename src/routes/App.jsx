import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import PasswordRecovery from '../containers/PasswordRecovery';
import '../styles/global.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path={'/'} component={ Home } />
                    <Route exact path={'/login'} component={ Login } />
                    <Route exact path={'/password-recovery'} component={ PasswordRecovery } />
                    <Route component={ NotFound } />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;