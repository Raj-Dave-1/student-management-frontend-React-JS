// 🚩 Dada Ki Jay Ho 🚩

import { Navbar, Container, Col } from "react-bootstrap";

export default function MyFooter() {
  let year = new Date().getFullYear();
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container className="text-center text-muted">
        <Col className="text-light">{year} - All Rights Reserved!!!</Col>
      </Container>
    </Navbar>
  );
}
