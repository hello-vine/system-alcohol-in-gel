import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home';

import Login from '../pages/login';

import Register from '../pages/register';

export default function Routes() {

    return (

        <BrowserRouter>
        
            <Switch>

                <Route exact path="/" component={Home} />

                <Route exact path="/login" component={Login} />

                <Route exact path="/register" component={Register} />

            </Switch>

        </BrowserRouter>

    );

}