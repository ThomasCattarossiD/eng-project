'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Promo M2 Informatique</title>
        <meta name="description" content="Annuaire de la promotion 2025 du Master 2 Informatique." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="d-flex flex-column min-vh-100">
        <Navbar bg="light" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="/">Promo M2 Info 2025</Navbar.Brand>
          </Container>
        </Navbar>

        <main className="flex-grow-1">
          {children}
        </main>

        <footer className="bg-light py-3 mt-auto">
          <Container className="text-center text-muted">
            &copy; {new Date().getFullYear()} - Master 2 Informatique
          </Container>
        </footer>
      </body>
    </html>
  );
}
