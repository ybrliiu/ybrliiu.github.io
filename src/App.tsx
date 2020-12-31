import style from './App.module.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={ style.background }></div>
      <div className={ style.container }>
        <nav>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT ME</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/users' exact>
            <Users />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}

export default App;
