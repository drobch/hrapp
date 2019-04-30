import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import { Button } from 'react-bootstrap';
import { Nav, Navbar, Image } from 'react-bootstrap';
import Vacancies from './Vacancies'
import Vacancy from './Vacancy'
import Profile from './Profile'
import Requests from './Requests'
import logout from './logout.png';


function Navigation() {
  return (
 
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand  >Поиск вакансий</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/vacancies">Вакансии</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/profile">Профиль</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/requests">Заявки</Nav.Link>
          </Nav>
          <Nav  >
            <Nav.Link href='/log'>
              <Image className="image_arrow" src={logout} />
            </Nav.Link>
          </Nav>
        </Navbar>
 
  )
}

export default Navigation;