import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h4 className="text-white mb-4">Nova Tech Solutions</h4>
            <p className="text-light-emphasis">
              Empowering businesses with innovative solutions since 2015. 
              We strive to deliver excellence in every project we undertake.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="https://facebook.com" className="social-icon bg-primary text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="social-icon bg-info text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="social-icon bg-danger text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="social-icon bg-primary text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6}>
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-light-emphasis text-decoration-none hover-text-primary">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-light-emphasis text-decoration-none hover-text-primary">About</a></li>
              <li className="mb-2"><a href="/contact" className="text-light-emphasis text-decoration-none hover-text-primary">Contact</a></li>
              <li className="mb-2"><a href="#services" className="text-light-emphasis text-decoration-none hover-text-primary">Services</a></li>
              <li className="mb-2"><a href="#" className="text-light-emphasis text-decoration-none hover-text-primary">Privacy Policy</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h5 className="text-white mb-4">Contact Info</h5>
            <div className="contact-info">
              <div className="d-flex align-items-center contact-info-item">
                <MapPin size={20} className="text-primary me-3" />
                <p className="text-light-emphasis mb-0">Hyderabad, 500020</p>
              </div>
              <div className="d-flex align-items-center contact-info-item">
                <Phone size={20} className="text-primary me-3" />
                <p className="text-light-emphasis mb-0">+91 832811373</p>
              </div>
              <div className="d-flex align-items-center contact-info-item">
                <Mail size={20} className="text-primary me-3" />
                <p className="text-light-emphasis mb-0">info@novatechsolutions.com</p>
              </div>
              <div className="d-flex align-items-center contact-info-item">
                <Clock size={20} className="text-primary me-3" />
                <p className="text-light-emphasis mb-0">Mon-Fri: 9am-5pm</p>
              </div>
            </div>
          </Col>
          
          <Col lg={3} md={6}>
            <h5 className="text-white mb-4">Newsletter</h5>
            <p className="text-light-emphasis">Subscribe to our newsletter to receive updates and news.</p>
            <Form className="mt-3">
              <Form.Group className="mb-3" controlId="newsletterEmail">
                <Form.Control type="email" placeholder="Your Email" required />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
        
        <hr className="mt-4 border-secondary" />
        
        <div className="text-center py-3">
          <p className="mb-0 text-light-emphasis">© {new Date().getFullYear()} Nova Tech Solutions. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;