import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.webp';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" fixed='top'>
                <Container>
                    <Link to="/"><h2 className='title'>The man</h2></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="ms-auto d-flex justify-content-between w-50 flex-column flex-lg-row">
                            <CustomLink to="/home">Home</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                            {!user ? <>
                                <CustomLink to="/login">Log in</CustomLink>
                                <CustomLink to="/signup">Sign up</CustomLink> </>
                                :
                                <button onClick={() => signOut(auth)} className='logout-btn'>Log out</button>}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </nav >
    );
};

export default Header;