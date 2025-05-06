import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Sun, Moon, Menu } from 'lucide-react';

interface NavigationBarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      className={`${
        scrolled
          ? 'shadow-sm bg-body'
          : 'bg-transparent'
      } py-3 transition-all`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-primary" onClick={() => setExpanded(false)}>
          Nova Tech Solutions
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <div 
            className="theme-switch me-3 d-flex align-items-center justify-content-center"
            onClick={toggleTheme}
            role="button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-primary" />
            ) : (
              <Sun size={20} className="text-warning" />
            )}
          </div>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="border-0 shadow-none"
          >
            <Menu size={24} />
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              className="mx-2"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/about" 
              className="mx-2"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              className="mx-2"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/contact"
              className="btn btn-primary text-white ms-3"
              onClick={() => setExpanded(false)}
            >
              Get Started
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;