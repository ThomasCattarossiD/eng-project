'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import students from '../../data/students.json';

export default function Home() {
  return (
    <Container className="py-5">
      <header className="text-center mb-5">
        <h1 className="fw-bold">Notre Promotion</h1>
        <p className="text-muted">Master 2 Informatique - 2025</p>
      </header>

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {students.map((student) => (
          <Col key={student.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={student.avatar} />
              <Card.Body className="text-center">
                <Card.Title className="fw-semibold">{student.name}</Card.Title>
                <Card.Text className="text-secondary fs-small">{student.specialty}</Card.Text>
                <Button variant="outline-primary" size="sm" href={`/etudiants/${student.id}`}>
                  Voir le profil
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
