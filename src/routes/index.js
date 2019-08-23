import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Repository, Error404 } from 'pages';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/repository" component={Repository} />
                <Route path="*" component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}
