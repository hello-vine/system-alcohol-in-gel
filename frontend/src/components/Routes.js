import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home';

import Login from '../pages/login';

import Register from '../pages/register';

import Bespeak from '../pages/bespeak';

import FollowBespeak from '../pages/follow-bespeak';

import Products from '../pages/produtcs';

import Config from '../pages/config';

export default function Routes() {

    return (

        <BrowserRouter>
        
            <Switch>

                <Route exact path="/" component={Home} />

                <Route exact path="/login" component={Login} />

                <Route exact path="/register" component={Register} />

                <Route exact path="/bespeak" component={Bespeak} />

                <Route exact path="/follow-bespeak" component={FollowBespeak} />

                <Route exact path="/products" component={Products} />

                <Route exact path="/config" component={Config} />

            </Switch>

        </BrowserRouter>

    );

}