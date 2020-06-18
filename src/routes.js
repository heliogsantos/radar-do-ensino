import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from './views/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Schools from './views/Schools';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Route component={Home} path="/" exact/>
            <Route component={Schools} path="/schools/:id"/>
            <Footer />
        </Router>
    );
}

export default AppRouter;