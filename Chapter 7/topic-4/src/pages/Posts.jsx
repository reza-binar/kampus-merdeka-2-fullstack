import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post";
import logo from "../logo.svg";

import { getAllPosts } from "../redux/actions/postActions";

const Posts = (props) => {
  const dispatch = useDispatch();
  const { posts, error } = useSelector((state) => state.post);

  useEffect(() => {
    (async () => {
      dispatch(getAllPosts());
    })();
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <Container>
      <Row className="my-4">
        {posts.length === 0 ? (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Loading...</h1>
          </>
        ) : (
          posts.map((post) => (
            <Col key={post.id} md={4} className="my-2">
              <Post post={post} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Posts;
