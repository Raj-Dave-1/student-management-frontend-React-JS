// 🚩 Dada Ki Jay Ho 🚩

import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/listStudents")
      .then((response) => setStudents(response.data))
      .catch((error) => alert(error));
  });
  return (
    <Container className="my-4">
      <Card>
        <Card.Header>Student List</Card.Header>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Student Name</th>
              <th>Student Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card.Footer> Information of Students</Card.Footer>
      </Card>
    </Container>
  );
}
