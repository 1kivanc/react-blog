import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id'component={Blog} />
        <Route path='/About/' component={About} />
        <Route path='/Login/' component={Login} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
