import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu-component';
import './App.css';

function App () {
  
  return (
    <div >
      <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
       <Menu />
    </div>
  );

  }



export default App;