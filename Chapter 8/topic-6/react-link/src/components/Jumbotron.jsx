import React from "react";

function Jumbotron() {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 text-center">
          <h1>Halaman Bootstrap Pertama</h1>
          <p>Resize the page to see the effect!</p>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-4">
            <h3>Kolom 1</h3>
            <p>
              <span className="badge bg-primary">Hello</span> Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Tempora accusantium natus
              blanditiis velit consequuntur voluptatem molestias facere
              repellendus deserunt doloremque excepturi officiis soluta,
              inventore, earum nisi odio asperiores ab dolor!
            </p>
          </div>
          <div className="col-sm-4">
            <h3>Kolom 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              accusantium natus blanditiis velit consequuntur voluptatem
              molestias facere repellendus deserunt doloremque excepturi
              officiis soluta, inventore, earum nisi odio asperiores ab dolor!
            </p>
          </div>
          <div className="col-sm-4">
            <h3>Kolom 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              accusantium natus blanditiis velit consequuntur voluptatem
              molestias facere repellendus deserunt doloremque excepturi
              officiis soluta, inventore, earum nisi odio asperiores ab dolor!
            </p>
          </div>
        </div>

        <h2>Table</h2>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="info">
              <td>1</td>
              <td>Haikal</td>
              <td>haikal@email.com</td>
            </tr>
            <tr className="info">
              <td>2</td>
              <td>Dandy</td>
              <td>dandy@email.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Jumbotron;
