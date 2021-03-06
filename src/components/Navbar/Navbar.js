import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll,} from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import {
    MobileIcon, 
    Nav, 
    NavbarContainer, 
    NavBtn, 
    NavBtnLink, 
    NavItem, 
    NavLinks, 
    NavLogo, 
    NavMenu } from './NavbarElements';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <Nav scrollNav={setScrollNav} >
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        activeClass="active"
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signIn">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
          </Nav>
          </IconContext.Provider>
        </>
    );
};

export default Navbar;