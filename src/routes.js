import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home';
import Schools from './views/Schools';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Schools} path="/schools/:id"/>
        </BrowserRouter>
    );
}

export default Routes;