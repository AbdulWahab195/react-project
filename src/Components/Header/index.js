import React, { Component } from 'react';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import './Header.css';

class Header extends Component {

    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

  render() {
    return (
        <div className="header">
          <MDBNavbar dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand>
            <strong className="white-text">Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
                <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink to="#!">About Us</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                      <span className="mr-2">Services</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">App Developer</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Web Developer</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Wordpress Developer</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Reactjs Developer</MDBDropdownItem>
                      </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink to="#!">Portfolio</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink to="#!">Contact Us</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                    <span className="mr-2">Download</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">Old Version</MDBDropdownItem>
                      <MDBDropdownItem href="#!">New Version</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <MDBNavItem>
                <MDBFormInline waves>
                    <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </MDBFormInline>
                </MDBNavItem>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
     </div>
    );
  }
}

export default Header;
