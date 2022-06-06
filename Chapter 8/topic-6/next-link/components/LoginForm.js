function LoginForm() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <h5 className="card-header">Login with Your Account</h5>
            <div className="card-body">
              <div className="alert alert-danger" role="alert">
                Email not found!
              </div>
              <div className="alert alert-danger" role="alert">
                Password must include numbers and letters!
              </div>

              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
