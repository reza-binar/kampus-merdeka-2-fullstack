import React from "react";

// Create Card component that we can reused it in other components
const Card = (props) => {
  const { title, description, imgSrc, imgAlt, btnText, btnHref } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img src={imgSrc} alt={imgAlt} className="card-img-top" /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={btnHref} className="btn btn-primary">
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default Card;
