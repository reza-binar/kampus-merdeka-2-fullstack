import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
    }
    if (password === "") {
      alert("Password is required");
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      const response = await fetch("http://localhost:3001/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.token) {
        localStorage.setItem("token", result.token);
        setToken(result.token);
      } else {
        alert("Something went wrong!");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const data = {
        access_token: tokenResponse.access_token,
      };
      const response = await fetch("http://localhost:8000/api/v1/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.token) {
        localStorage.setItem("token", result.token);
        setToken(result.token);
      } else {
        alert("Something went wrong!");
      }
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
              {!token ? (
                <>
                  <div className="d-grid">
                    <div className="m-auto">
                      <Button variant="primary" onClick={() => login()}>
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
