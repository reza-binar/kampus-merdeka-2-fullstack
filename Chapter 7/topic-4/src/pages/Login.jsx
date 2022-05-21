import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { login, logout, loginWithGoogle } from "../redux/actions/authActions";

const Login = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
    }
    if (password === "") {
      alert("Password is required");
    }
    if (email !== "" && password !== "") {
      dispatch(login({ email, password }));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(loginWithGoogle(tokenResponse.access_token));
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div>
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              {!isAuthenticated ? (
                <>
                  <div className="d-grid">
                    <div className="m-auto">
                      <Button variant="primary" onClick={() => googleLogin()}>
                        <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                      </Button>
                    </div>
                  </div>

                  <Form className="mt-4" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <div className="d-grid gap-2">
                      <Button variant="primary" size="lg" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </>
              ) : (
                <div className="d-grid gap-2">
                  <Button variant="danger" size="lg" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Login;
