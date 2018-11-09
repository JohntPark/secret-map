import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './admin.css';

class NavBar extends Component {
  state = {
    toggleOn: false,
    redirect: false
  };

  toggleOpen = () => {
    this.setState({ toggleOn: !this.state.toggleOn });
  };

  render() {
    let burgerClass = ['navbar-menu'];
    if (this.state.toggleOn) {
      burgerClass.push('is-active');
    }

    return (
      <nav className='navbar is-dark' id='navbarStyle'>
        <div className='navbar-brand '>
          <Link to='/dashboard' className='navbar-item'>
          </Link>

          <a
            role='button'
            className='navbar-burger burger'
            onClick={this.toggleOpen}
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div id='navbarBasicExample' className={burgerClass.join(' ')}>
          <div className='navbar-end' id='navbar-end'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>Products</a>

              <div className='navbar-dropdown'>
                <Link to='/dashboard' className='navbar-item'>
                  Get Products
                </Link>
                <Link to='/productCrud' className='navbar-item'>
                  Add Product
                </Link>
                <hr className='navbar-divider' />
              </div>
            </div>
          </div>
          <div className='navbar-item'>
            <div className='buttons' id='adminMapButton'>
              <Link to='/adminmap' className='button is-danger'>
                <strong>Map</strong>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
