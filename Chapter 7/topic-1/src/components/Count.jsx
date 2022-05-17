import React from "react";
import { Button } from "react-bootstrap";

function Count(props) {
  const { children, count, logo, handleClick } = props;

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />

      <div>
        <h4>Total Click</h4>
        <h1>{count}</h1>
        <Button
          variant="primary"
          onClick={handleClick}
          // Inline Style
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Click
        </Button>
      </div>

      <div>{children}</div>
    </>
  );
}

export default Count;
