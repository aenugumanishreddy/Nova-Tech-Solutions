import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

interface ScheduleConsultationProps {
  show: boolean;
  onHide: () => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleConsultation: React.FC<ScheduleConsultationProps> = ({ show, onHide }) => {
  const [date, setDate] = useState<Value>(new Date());
  const [time, setTime] = useState('09:00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Format the selected date and time for display
    const formattedDate = date instanceof Date ? format(date, 'MMMM dd, yyyy') : '';
    
    alert(`Consultation scheduled for ${formattedDate} at ${time}. We'll send you a confirmation email shortly.`);
    
    setLoading(false);
    onHide();
    resetForm();
  };

  const resetForm = () => {
    setDate(new Date());
    setTime('09:00');
    setName('');
    setEmail('');
    setPhone('');
    setTopic('');
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Schedule a Consultation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Preferred Date</Form.Label>
            <div className="d-flex align-items-center">
              <Calendar className="me-2" size={20} />
              <DateRangePicker
                value={date}
                onChange={setDate}
                minDate={new Date()}
                className="w-100"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Preferred Time</Form.Label>
            <div className="d-flex align-items-center">
              <Clock className="me-2" size={20} />
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                min="09:00"
                max="17:00"
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Consultation Topic</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Brief description of what you'd like to discuss"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            className="w-100"
            disabled={loading}
          >
            {loading ? (
              <div className="d-flex align-items-center justify-content-center">
                <div className="loading-spinner me-2"></div>
                Scheduling...
              </div>
            ) : (
              'Schedule Consultation'
            )}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ScheduleConsultation;