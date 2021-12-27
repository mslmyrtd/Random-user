import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Container, Button } from "react-bootstrap";
import email from "../asset/email.svg";
import location from "../asset/location.svg";
import phone from "../asset/phone.svg";
const Card = () => {
  const [users, setUsers] = useState([]);
  const data = async () => {
    await axios("https://randomuser.me/api/").then((res) =>
      setUsers(res.data.results[0])
    );
  };
  useEffect(() => {
    data();
  }, []);
  console.log(users);
  return (
    <>
      <Container className="border border-primary rounded-1 w-50 mt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="mb-3 d-flex justify-content-center">
            <img
              src={users.picture?.large}
              className="rounded-circle img-fluid my-5"
            />
          </Col>
          <Col>
            <h4 className="h1-responsive font-weight-bold ">
              {users.name?.title} {users.name?.first} {users.name?.last}
            </h4>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="mb-3 d-flex justify-content-center">
            <img src={email} className="email" />
          </Col>
          <Col>
            <h6 className="h1-responsive font-weight-bold my-3">
              {users.email}
            </h6>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="mb-3 d-flex justify-content-center">
            <img src={phone} className="email" />
          </Col>
          <Col>
            <h6 className="h1-responsive font-weight-bold my-3">
              {users.phone}
            </h6>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="mb-3 d-flex justify-content-center">
            <img src={location} className="email" />
          </Col>
          <Col>
            <h6 className="h1-responsive font-weight-bold my-3">
              {users.location?.state}
            </h6>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="mb-3 d-flex justify-content-center">
            <h6 className="h1-responsive font-weight-bold my-1">
              Age: {users.dob?.age}
            </h6>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="mb-3 d-flex justify-content-center ">
            <h6 className="h1-responsive font-weight-bold my-1">
              Register Date: {users.dob?.date.slice(0, 10)}
            </h6>
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center mt-4 ">
        <Button variant="primary" size="lg" onClick={data} className="w-50">
          Random User
        </Button>
      </div>
    </>
  );
};

export default Card;
