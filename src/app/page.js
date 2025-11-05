'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import students from '../../data/students.json';
import Link from 'next/link';

export default function Home() {
  return (
    <Container className="py-5">
      <header className="text-center mb-5">
        <h1 className="fw-bold">Our Class</h1>
        <p className="text-muted">Computer Science Masters - 2025</p>
      </header>

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {students.map((student) => (
          <Col key={student.id}>
            <Card className="h-100 shadow-sm">
              <Link href={`/students/${student.id}`} passHref>
                <Card.Img variant="top" src={student.avatar} className="profile-avatar" />
              </Link>
              <Card.Body className="text-center">
                <Card.Title className="fw-semibold">{student.name}</Card.Title>
                <Card.Text className="text-secondary fs-small">{student.specialty}</Card.Text>
                <Button variant="outline-primary" size="sm" href={`/students/${student.id}`}>
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
