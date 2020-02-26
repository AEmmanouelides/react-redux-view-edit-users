import { configureStore } from "@reduxjs/toolkit";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
// import { Nav, Navbar, NavItem } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import App from './App';
import './index.scss';
import Users from "./pages/User/Users";
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers';
import PageNotFound from "./pages/PageNotFound/PageNotFound";

  const store = configureStore({
      reducer: rootReducer
    })

  const Root: React.FC = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      
        <Provider store={store}>
          <Router>
              <div>
              <Navbar color='faded' light className='container'>
              <NavbarBrand onClick={toggleNavbar} >Welcome to React/Redux exercise!</NavbarBrand >
                 <NavbarToggler onClick={toggleNavbar} />
                 <Collapse isOpen={!collapsed} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink 
                      exact
                      activeClassName='active' 
                      className='link' 
                      to='/' >Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink 
                      exact
                      activeClassName='active' 
                      className='link' 
                      to='/users' >Users</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
    
              <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/users' component={Users} />
                <Route component={PageNotFound} />
              </Switch>
              </div>
          </Router>
        </Provider>
      )
}

  ReactDOM.render(<Root />, document.getElementById('root'))
  
  serviceWorker.unregister()