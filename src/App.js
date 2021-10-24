

import './App.css';
import './Contact.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Blog from './components/Blog';
import Tutorial from './components/Tutorial';
import Community from './components/Community';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path = '/About' component={About}/>
        <Route path = '/Features' component={Features}/>
        <Route path = '/Services' component={Services}/>
        <Route path = '/Blog' component={Blog}/>
        <Route path = '/Tutorial' component={Tutorial}/>
        <Route path = '/Community' component={Community}/>
        <Route path = '/Contact' component={Contact}/>
        <Route path = '/Register' component={Register}/>
        <Route path = '/Login' component={Login}/>
        <Route component={PageNotFound} />
      </Switch>

    </>
  );
}

export default App;
