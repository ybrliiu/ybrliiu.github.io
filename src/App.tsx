import React from 'react';
import style from './App.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavigationMenu } from './components/navigation-menu';
import { Home } from './components/home';
import { AboutMe } from './components/about-me';
import { Links } from './components/links';
import { FallBack } from './components/fallback';

function App() {
  return (
    <BrowserRouter>
      <div className={ style.background }></div>
      <div className={ style.container }>
        <NavigationMenu />
        <Switch>
          <div className={ style['contents-container'] }>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about-me' exact>
              <AboutMe />
            </Route>
            <Route path='/links' exact>
              <Links />
            </Route>
            <Route path='/projects' exact>
              <FallBack />
            </Route>
            <Route path='/likes' exact>
              <FallBack />
            </Route>
            <Route path='/extra' exact>
              <FallBack />
            </Route>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;