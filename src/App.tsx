import React from 'react';
import style from './App.module.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './components/home';
import { AboutMe } from './components/about-me';
import { Links } from './components/links';

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

function fetchCurrentPathName() :string {
  const segments = window.location.pathname.split('/');
  return segments[ segments.length - 1 ];
}

type Page = { linkTo: string, name: string };

const pages: Page[] = [
  { name: 'HOME', linkTo: '' },
  { name: 'ABOUT ME', linkTo: 'about-me' },
  { name: 'LINKS', linkTo: 'links' },
  { name: 'PROJECTS', linkTo: 'projects' },
  { name: 'LIKES', linkTo: 'likes' },
  { name: 'EXTRA', linkTo: 'extra' },
];

function initialPageName() :string {
  const pathName = fetchCurrentPathName();
  const map = new Map<string, string>();
  for (let page of pages) {
    map.set(page.linkTo, page.name);
  }
  const pageName = map.get(pathName);
  if (pageName === undefined) {
    throw new Error('ページの定義がないです');
  }
  return pageName;
}

class App extends React.Component {

  state: { pages: Page[]; currentPageName: string; };

  constructor(props: any) {
    super(props);
    this.state = {
      pages: pages,
      currentPageName: initialPageName(),
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
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );    
  }

}

export default App;
