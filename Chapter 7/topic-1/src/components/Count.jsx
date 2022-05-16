import React from "react";

function Count(props) {
  const { count, logo, handleClick } = props;

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />

      <div>
        <h4>Total Click</h4>
        <h1>{count}</h1>
        <button className="App-button" onClick={handleClick}>
          Click
        </button>
      </div>
    </>
  );
}

export default Count;
