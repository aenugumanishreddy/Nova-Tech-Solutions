import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: string; message: string} | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    setValidated(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setValidated(false);
    }, 1000);
  };
  
  return (
    <>
      {/* Page Title */}
      <section className="bg-primary text-white py-5 mt-5">
        <Container className="py-5">
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold">Contact Us</h1>
              <p className="lead">
                Get in touch with our team. We're here to help with any questions or inquiries.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-5">
        <Container className="py-5">
          <Row className="g-5">
            <Col lg={6}>
              <h2 className="fw-bold mb-4">Send Us a Message</h2>
              
              {submitStatus && (
                <Alert variant={submitStatus.type} dismissible onClose={() => setSubmitStatus(null)}>
                  {submitStatus.message}
                </Alert>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3" controlId="contactSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select a subject.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="contactMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="primary" type="submit" size="lg" className="px-4">
                  Send Message
                </Button>
              </Form>
            </Col>
            
            <Col lg={6}>
              <div className="ps-lg-5">
                <h2 className="fw-bold mb-4">Contact Information</h2>
                
                <div className="contact-info">
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <div className="feature-icon bg-primary bg-opacity-10 text-primary">
                        <MapPin size={30} />
                      </div>
                    </div>
                    <div>
                      <h5>Our Location</h5>
                      <p className="text-secondary">
                        Hyderabad<br />
                       500020
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <div className="feature-icon bg-primary bg-opacity-10 text-primary">
                        <Phone size={30} />
                      </div>
                    </div>
                    <div>
                      <h5>Phone Number</h5>
                      <p className="text-secondary">
                        +91 8328382486<br />
                        +91 8885382738
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <div className="feature-icon bg-primary bg-opacity-10 text-primary">
                        <Mail size={30} />
                      </div>
                    </div>
                    <div>
                      <h5>Email Address</h5>
                      <p className="text-secondary">
                        info@maha.com<br />
                        support@maha.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <div className="feature-icon bg-primary bg-opacity-10 text-primary">
                        <Clock size={30} />
                      </div>
                    </div>
                    <div>
                      <h5>Business Hours</h5>
                      <p className="text-secondary">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5">
                  <h4 className="mb-4">Find Us on Map</h4>
                  {/* Embedded map - using an image as placeholder */}
                  <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Map location" 
                      className="img-fluid"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-light py-5">
        <Container className="py-5">
          <Row className="mb-5 text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="lead text-secondary">
                Find answers to common questions about our services and processes.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={6}>
              <div className="mb-4">
                <h5 className="fw-bold mb-3">What industries do you serve?</h5>
                <p className="text-secondary">
                  We work with clients across various industries including healthcare, 
                  finance, retail, manufacturing, education, and more. Our solutions are 
                  customized to meet the specific needs of each industry.
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">What is your project process?</h5>
                <p className="text-secondary">
                  Our process typically includes discovery, planning, design, development, 
                  testing, deployment, and ongoing support. We follow agile methodologies 
                  to ensure flexibility and regular client feedback throughout the project.
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">Do you offer maintenance and support?</h5>
                <p className="text-secondary">
                  Yes, we provide ongoing maintenance and support for all our projects. 
                  We offer various support packages tailored to your specific needs, 
                  including 24/7 emergency support options.
                </p>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="mb-4">
                <h5 className="fw-bold mb-3">What is the typical project timeline?</h5>
                <p className="text-secondary">
                  Project timelines vary depending on scope and complexity. Small projects 
                  might take 4-6 weeks, while larger enterprise solutions can take several 
                  months. We'll provide a detailed timeline during the planning phase.
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">How do you handle data security?</h5>
                <p className="text-secondary">
                  We implement industry-standard security practices and compliance measures 
                  including encryption, secure authentication, regular security audits, and 
                  adherence to regulations such as GDPR, HIPAA, and others as required.
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">What technologies do you work with?</h5>
                <p className="text-secondary">
                  We work with a wide range of technologies including React, Angular, Node.js, 
                  Python, .NET, AWS, Azure, and more. We select the most appropriate technology 
                  stack based on your specific project requirements.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;