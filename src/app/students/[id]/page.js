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

  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col md={4} className="text-center">
          <Image src={student.avatar} roundedCircle fluid className="shadow-sm mb-3" />
          <h2 className="fw-bold">{student.name}</h2>
          <p className="text-muted">{age} years old</p>
          <p className="text-muted">{student.nationality}</p>
        </Col>
        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Header as="h3">Coding Profile</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h6 className="fw-bold">Strengths:</h6>
                <p>{student.codingStrengths}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 className="fw-bold">Weaknesses:</h6>
                <p>{student.codingWeaknesses}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 className="fw-bold">Biggest Achievement:</h6>
                <p>{student.biggestAchievement}</p>
              </ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className="shadow-sm">
            <Card.Header as="h3">Fun Fact</Card.Header>
            <Card.Body>
              <Card.Text>
                {student.funFact}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
