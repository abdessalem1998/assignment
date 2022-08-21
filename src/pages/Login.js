import React, { useState } from 'react';
import axios from "axios";

function Login() {

    const [loginForm, setLoginFrom] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(false)
        axios.post('https://otif-server-dot-otif-mx.uc.r.appspot.com/access/signin',
            loginForm
        )
            .then((response) => {
                console.log(response.data.status);
                if (response.data.status === 1) {

                } else {
                    setError(true)
                }
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div className="App d-flex justify-content-center align-items-center">
            <form className='border p-3' onSubmit={handleSubmit}>
                <div className="m-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={loginForm.username}
                        onChange={(e) => { setLoginFrom({ ...loginForm, username: e.target.value }) }}
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
                <div className=''>
                    {error &&
                        <p className='text-danger'>
                            user name or password is incorrect
                        </p>
                    }
                </div>

                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>
        </div>
    );
}

export default Login;
