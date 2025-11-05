'use client';

import { Container, Row, Col, Image, Button, Card, ListGroup } from 'react-bootstrap';
import students from '../../../../data/students.json';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Helper function to calculate age
function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Helper function to get flag emoji from nationality
function getFlagEmoji(nationality) {
    const flags = {
        'French': '🇫🇷',
        'American': '🇺🇸',
        'Spanish': '🇪🇸',
        'Canadian': '🇨🇦',
        // Add more mappings as needed
    };
    return flags[nationality] || '';
}

export default function StudentProfile() {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <Container className="text-center py-5">
        <h2>Student Not Found</h2>
        <p>The student you are looking for does not exist.</p>
        <Link href="/" passHref>
          <Button variant="primary">Back to Home</Button>
        </Link>
      </Container>
    );
  }

  const age = calculateAge(student.dob);
  const formattedDob = new Date(student.dob).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric' 
  });

  return (
    <Container className="py-5">
      <Link href="/" passHref className="mb-4 d-inline-block">
        <Button variant="outline-secondary">← Back to Class List</Button>
      </Link>
      <Card className="shadow-sm">
        <Card.Body>
          <Row className="g-4">
            <Col md={4} className="text-center border-end">
              <Image src={student.avatar} roundedCircle fluid className="shadow-sm mb-3" style={{width: '150px', height: '150px'}} />
              <h2 className="fw-bold h3">{student.name}</h2>
              <p className="text-muted mb-1">{age} years old</p>
              <p className="text-muted mb-1">Born on {formattedDob}</p>
              <p className="text-muted">{getFlagEmoji(student.nationality)} {student.nationality}</p>
            </Col>
            <Col md={8}> 
              <h4 className="fw-bold">Coding Profile</h4>
              <ListGroup variant="flush" className="mb-4">
                <ListGroup.Item>
                  <h6 className="fw-bold">Strengths:</h6>
                  <p className="mb-0">{student.codingStrengths}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6 className="fw-bold">Weaknesses:</h6>
                  <p className="mb-0">{student.codingWeaknesses}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6 className="fw-bold">Biggest Achievement:</h6>
                  <p className="mb-0">{student.biggestAchievement}</p>
                </ListGroup.Item>
              </ListGroup>

              <h4 className="fw-bold">Fun Fact</h4>
              <p>{student.funFact}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
