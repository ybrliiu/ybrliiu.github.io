import React from 'react';
import style from './App.module.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

type NavLinkProps = {
  name: string,
  linkTo: string,
  isCurrentPage: boolean,
  onClick: () => void,
};

function NavLink(props: NavLinkProps) {
  return (
    <li>
      <Link
        to={ '/' + props.linkTo }
        className={ props.isCurrentPage ? style['current-page'] : '' }
        onClick={ props.onClick }
      >
        { props.name }
      </Link>
    </li>
  );
}

type Page = { linkTo: string, name: string };
class App extends React.Component {

  state: { pages: Page[]; currentPageName: string; };

  constructor(props: any) {
    super(props);
    this.state = {
      pages: [
        { name: 'HOME', linkTo: '' },
        { name: 'ABOUT ME', linkTo: 'about-me' },
        { name: 'LINKS', linkTo: 'links' },
        { name: 'PROJECTS', linkTo: 'projects' },
        { name: 'LIKES', linkTo: 'likes' },
        { name: 'EXTRA', linkTo: 'extra' },
      ],
      currentPageName: 'HOME',
    };
  }

  clickNavLink(page: Page) {
    this.setState({

      currentPageName: page.name,
    })
  }

  renderNavLinks() {
    const navLinks = this.state.pages.map(page => {
      return (
        <NavLink
          key={ page.name }
          isCurrentPage={ this.state.currentPageName === page.name }
          name={ page.name }
          linkTo={ page.linkTo }
          onClick={ () => this.setState({ currentPageName: page.name }) }
        />
      );
    });
    return navLinks;
  }

  render() {
    return (
      <BrowserRouter>
        <div className={ style.background }></div>
        <div className={ style.container }>
          <nav>
            <ul className={ style.navigation }>
              { this.renderNavLinks() }
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
