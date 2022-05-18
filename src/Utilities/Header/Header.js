import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.webp';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" fixed='top'>
                <Container>
                    <Link to="/"><img src={logo} alt="" width={['40px']} /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="ms-auto d-flex justify-content-between w-50 flex-column flex-lg-row">
                            <CustomLink to="/home">Home</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                            <CustomLink to="/login">Log in</CustomLink>
                            <CustomLink to="/signup">Sign up</CustomLink>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </nav >
    );
};

export default Header;