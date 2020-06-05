import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
function routes() {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
            </div>
        </Router>
    );
}

export default routes;