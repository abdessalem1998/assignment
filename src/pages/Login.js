import React from 'react';

function Login() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <form className='border'>
        <div class="m-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="m-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary m-3">Submit</button>
      </form>
    </div>
  );
}

export default Login;
