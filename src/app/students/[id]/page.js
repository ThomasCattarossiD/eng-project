'use client';

import { Container, Row, Col, Image, Badge, Button, Card } from 'react-bootstrap';
import students from '../../../../data/students.json';
import { useParams } from 'next/navigation';
import Link from 'next/link';

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

  return (
    <Container className="py-5">
      <Row className="g-5">
        <Col md={4} className="text-center">
          <Image src={student.avatar} roundedCircle fluid className="shadow-sm mb-3" />
          <h2 className="fw-bold">{student.name}</h2>
          <p className="text-muted">{student.specialty}</p>
          <div className="d-grid gap-2">
            {student.linkedin && <Button variant="outline-primary" href={student.linkedin} target="_blank">LinkedIn</Button>}
            {student.github && <Button variant="outline-secondary" href={student.github} target="_blank">GitHub</Button>}
          </div>
        </Col>
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title as="h3">About</Card.Title>
              <Card.Text>
                {student.bio}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-4 shadow-sm">
            <Card.Body>
              <Card.Title as="h3">Skills</Card.Title>
              <div>
                {student.skills.map((skill, index) => (
                  <Badge pill bg="primary" className="me-2 mb-2 p-2 fw-normal" key={index}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
