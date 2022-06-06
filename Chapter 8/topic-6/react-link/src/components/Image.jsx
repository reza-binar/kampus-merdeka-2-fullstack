import React from "react";

function Image() {
  return (
    <div className="container p-4">
      <h2>Gambar Acak</h2>
      <div className="row">
        <div className="col-sm-3">
          <img
            src="https://picsum.photos/900"
            alt="Responsive"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-3">
          <img
            src="https://picsum.photos/1000"
            alt="Rounded"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-sm-3">
          <img
            src="https://picsum.photos/1100"
            alt="Rounded Circle"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-sm-3">
          <img
            src="https://picsum.photos/1200"
            alt="Thumbnail"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
    </div>
  );
}

export default Image;
