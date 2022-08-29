// 🚩 Dada Ki Jay Ho 🚩

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/card";
import axios from "axios";

export default function Student() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  let textChanged = (event) => {
    if (event.target.name === "id") {
      setId(event.target.value);
    }
    if (event.target.name === "name") {
      setName(event.target.value);
    }
    if (event.target.name === "address") {
      setAddress(event.target.value);
    }
  };

  const student = { id: id, name: name, address: address };

  let addStudent = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/addStudent", student)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => alert(error));
    setId("");
    setName("");
    setAddress("");
  };
  return (
    <div>
      <Container className="my-3">
        <Card>
          <Form onSubmit={addStudent}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Student Id</Form.Label>
              <Form.Control
                name="id"
                value={id}
                type="text"
                onChange={textChanged}
                placeholder="Enter Student Id"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={name}
                onChange={textChanged}
                placeholder="Enter Student Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Student Address</Form.Label>
              <Form.Control
                name="address"
                type="text"
                value={address}
                onChange={textChanged}
                placeholder="Student address"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
