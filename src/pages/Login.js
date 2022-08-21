import React, { useState } from 'react';

function Login() {

    const [loginForm, setLoginFrom] = useState({
        userName: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginForm)
    }

    return (
        <div className="App d-flex justify-content-center align-items-center">
            <form className='border' onSubmit={handleSubmit}>
                <div className="m-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={loginForm.userName}
                        onChange={(e) => { setLoginFrom({ ...loginForm, userName: e.target.value }) }}
                    />
                </div>
                <div className="m-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={loginForm.password}
                        onChange={(e) => { setLoginFrom({ ...loginForm, password: e.target.value }) }}
                    />
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>
        </div>
    );
}

export default Login;
