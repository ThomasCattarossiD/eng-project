'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CS Master's Class Directory</title>
        <meta name="description" content="Directory of the 2025 Computer Science Master's class." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="d-flex flex-column min-vh-100">
        <Navbar bg="light" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="/">CS Masters 2025</Navbar.Brand>
          </Container>
        </Navbar>

        <main className="flex-grow-1">
          {children}
        </main>

        <footer className="bg-light py-3 mt-auto">
          <Container className="text-center text-muted">
            &copy; {new Date().getFullYear()} Thomas CATTAROSSI DARTIGUELONGUE
          </Container>
        </footer>
      </body>
    </html>
  );
}
