import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div >
      <Row>
        <Col
          md={6}
          className="d-flex flex-direction-column align-items-center justify-content-center px-5"
        >
          <div>
            <h1>Share the world with your friends</h1>
            <p>Hello App lets you connect with the world</p>
            <div className="mt-5">
              {!user ? (
                <LinkContainer to="/login">
                  <Button variant="success">
                    Sign in <i className="fas fa-sign-in"></i>
                  </Button>
                </LinkContainer>
              ) : (
                <LinkContainer to="/chat">
                  <Button variant="success">
                    Messages
                    <i className="fas fa-comments home-message-icon"></i>
                  </Button>
                </LinkContainer>
              )}
            </div>
          </div>
        </Col>
        <Col md={6} className="home__bg"></Col>
      </Row>
    </div>
  );
}

export default Home;

