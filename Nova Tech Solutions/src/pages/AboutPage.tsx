import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Rocket, Database, Globe, Code, Cloud, Lock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const services = [
    {
      icon: <Database size={40} />,
      title: 'Data Management',
      description: 'Comprehensive data management solutions to organize, protect, and leverage your valuable information assets.',
      price: 'From $999/month',
      color: 'primary'
    },
    {
      icon: <Globe size={40} />,
      title: 'Web Development',
      description: 'Custom web applications and responsive websites designed to engage your audience and drive conversions.',
      price: 'From $4,999',
      color: 'success'
    },
    {
      icon: <Code size={40} />,
      title: 'Software Development',
      description: 'Bespoke software solutions tailored to your specific business requirements and objectives.',
      price: 'From $15,000',
      color: 'danger'
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Services',
      description: 'Secure, scalable cloud infrastructure and migration services to modernize your IT operations.',
      price: 'From $799/month',
      color: 'info'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that increase visibility and drive qualified leads to your business.',
      price: 'From $2,499/month',
      color: 'warning'
    },
    {
      icon: <Lock size={40} />,
      title: 'Cybersecurity',
      description: 'Robust security solutions to protect your business from evolving cyber threats and vulnerabilities.',
      price: 'From $1,299/month',
      color: 'dark'
    }
  ];

  return (
    <>
      {/* Page Title */}
      <section className="bg-primary text-white py-5 mt-5">
        <Container className="py-5">
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold">About Nova Tech Solutions</h1>
              <p className="lead">
                Learn about our mission, values, and the services we offer to transform businesses.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaborating" 
                className="img-fluid rounded-3 shadow"
              />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-5">
                <h2 className="fw-bold mb-4">Our Story</h2>
                <p className="lead mb-4">
                  Founded in 2025 , Nova Tech Solutions began with a simple mission: to help businesses leverage 
                  technology for growth and competitive advantage.
                </p>
                <p className="mb-4">
                  What started as a small consulting firm has grown into a comprehensive 
                  technology partner serving clients across industries worldwide. Our team of 
                  experts brings decades of combined experience in software development, data 
                  science, cybersecurity, and digital transformation.
                </p>
                <h3 className="h5 fw-bold mb-3">Our Mission</h3>
                <p className="mb-4">
                  To empower organizations through innovative technology solutions that 
                  drive efficiency, growth, and success in an ever-evolving digital landscape.
                </p>
                <h3 className="h5 fw-bold mb-3">Core Values</h3>
                <ul>
                  <li className="mb-2">Excellence in everything we do</li>
                  <li className="mb-2">Innovation as a driving force</li>
                  <li className="mb-2">Integrity and transparency</li>
                  <li className="mb-2">Client-focused approach</li>
                  <li>Continuous improvement</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Showcase */}
      <section className="bg-light py-5" id="services">
        <Container className="py-5">
          <Row className="mb-5 text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="fw-bold mb-3">Our Services</h2>
              <p className="lead text-secondary">
                Comprehensive solutions designed to meet your business needs and drive growth.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="h-100 border-0 shadow-sm service-card">
                  <Card.Body className="p-4">
                    <div className={`feature-icon bg-${service.color} bg-opacity-10 text-${service.color}`}>
                      {service.icon}
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="text-secondary mb-4">{service.description}</p>
                    <p className={`fw-bold text-${service.color} mb-0`}>{service.price}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <Container className="py-5">
          <Row className="mb-5 text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="fw-bold mb-3">Our Leadership Team</h2>
              <p className="lead text-secondary">
                Meet the experienced professionals leading NovaTech Solutions forward.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={3} md={6}>
              <Card className="border-0 shadow-sm service-card text-center h-100">
                <Card.Img 
                  variant="top" 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CEO"
                  className="rounded-top"
                />
                <Card.Body className="p-4">
                  <h4 className="mb-1">A.Manish Reddy</h4>
                  <p className="text-primary mb-3">Chief Executive Officer</p>
                  <p className="text-secondary">With 3+ years in technology leadership, Sarah drives our vision and strategy.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="border-0 shadow-sm service-card text-center h-100">
                <Card.Img 
                  variant="top" 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CTO"
                  className="rounded-top"
                />
                <Card.Body className="p-4">
                  <h4 className="mb-1">A.Nithish Reddy</h4>
                  <p className="text-primary mb-3">Chief Technology Officer</p>
                  <p className="text-secondary">An innovator with deep expertise in emerging technologies and software architecture.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="border-0 shadow-sm service-card text-center h-100">
                <Card.Img 
                  variant="top" 
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="COO"
                  className="rounded-top"
                />
                <Card.Body className="p-4">
                  <h4 className="mb-1">M.Risha Reddy</h4>
                  <p className="text-primary mb-3">Chief Operations Officer</p>
                  <p className="text-secondary">Leads our operational excellence and ensures client satisfaction.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="border-0 shadow-sm service-card text-center h-100">
                <Card.Img 
                  variant="top" 
                  src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CMO"
                  className="rounded-top"
                />
                <Card.Body className="p-4">
                  <h4 className="mb-1">Vedhin Govindh</h4>
                  <p className="text-primary mb-3">Chief Marketing Officer</p>
                  <p className="text-secondary">A creative strategist who drives our brand and marketing initiatives.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;