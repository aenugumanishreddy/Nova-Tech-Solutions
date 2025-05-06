import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BarChart3, Layers, Users, Zap, Shield, LineChart, Sparkles, Lightbulb, Trophy } from 'lucide-react';
import ScheduleConsultation from '../components/ScheduleConsultation';

const HomePage: React.FC = () => {
  const [showScheduler, setShowScheduler] = useState(false);

  const features = [
    {
      icon: <BarChart3 size={40} />,
      title: 'Data Analytics',
      description: 'Make data-driven decisions with our advanced analytics platform.',
      color: 'primary'
    },
    {
      icon: <Layers size={40} />,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business needs.',
      color: 'success'
    },
    {
      icon: <Users size={40} />,
      title: 'Team Collaboration',
      description: 'Bring your team together with our collaboration tools.',
      color: 'danger'
    },
    {
      icon: <Zap size={40} />,
      title: 'Fast Performance',
      description: 'Blazing fast performance for all your business applications.',
      color: 'warning'
    },
    {
      icon: <Shield size={40} />,
      title: 'Enterprise Security',
      description: 'Bank-level security for all your sensitive data.',
      color: 'info'
    },
    {
      icon: <LineChart size={40} />,
      title: 'Growth Strategy',
      description: 'Strategic planning for sustainable business growth.',
      color: 'dark'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Innovation',
      description: 'Cutting-edge technology to keep you ahead of competition.',
      color: 'primary'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Creative Solutions',
      description: 'Innovative approaches to solve complex business problems.',
      color: 'success'
    },
    {
      icon: <Trophy size={40} />,
      title: 'Award-winning Support',
      description: '24/7 support from our expert team.',
      color: 'danger'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content py-5">
              <h1 className="display-4 fw-bold mb-4">Transform Your Business with Nova Tech Solutions</h1>
              <p className="lead mb-4">
                Innovative solutions designed to elevate your business to new heights.
                We combine technology and expertise to deliver exceptional results.
              </p>
              <div className="d-flex gap-3">
                <Button variant="light" size="lg">
                  Learn More
                </Button>
                <Button variant="outline-light" size="lg">
                  Contact Us
                </Button>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container className="py-5">
          <Row className="mb-5 text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="fw-bold mb-3">Why Choose Nova Tech Solutions</h2>
              <p className="lead text-secondary">
                Our comprehensive suite of services and solutions are designed to help 
                your business thrive in today's competitive landscape.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="h-100 border-0 shadow-sm feature-card p-4" style={{ '--animation-order': index } as React.CSSProperties}>
                  <div className={`feature-icon bg-${feature.color} bg-opacity-10 text-${feature.color}`}>
                    {feature.icon}
                  </div>
                  <Card.Body className="p-0">
                    <h4 className="mb-3">{feature.title}</h4>
                    <p className="text-secondary mb-3">{feature.description}</p>
                    <a href="#" className={`text-${feature.color} text-decoration-none d-inline-flex align-items-center`}>
                      Learn more 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-light py-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Business meeting" 
                className="img-fluid rounded-3 shadow"
              />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-5">
                <h2 className="fw-bold mb-4">Ready to Get Started?</h2>
                <p className="lead mb-4">
                  Join thousands of businesses that trust Maha for their technology needs.
                  Our expert team is ready to help you succeed.
                </p>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => setShowScheduler(true)}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ScheduleConsultation 
        show={showScheduler}
        onHide={() => setShowScheduler(false)}
      />
    </>
  );
};

export default HomePage;