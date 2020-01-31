import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Nikolett Palyi',
      headerLinks: [
        { title: 'Home', path: '/portfolio' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      portfolio: {
        title: 'projects',
        subTitle: 'React exercises',
        text: 'Checkout my side projects below'
      },
      about: {
        title: 'about me'
      },
      contact: {
        title: 'contact'
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Nikolett Palyi</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/portfolio'>
                  Home
                </Link>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path='/portfolio'
            exact
            render={() => (
              <HomePage
                title={this.state.portfolio.title}
                subTitle={this.state.portfolio.subTitle}
                text={this.state.portfolio.text}
              />
            )}
          />
          <Route
            path='/about'
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path='/contact'
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
