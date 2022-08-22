import React, { useState, useEffect } from 'react';
import axios from "axios";

function Home() {
    const [users, setUsers] = useState([])
    const [find, setFind] = useState('')

    useEffect(() => {
        axios.get('https://otif-server-dot-otif-mx.uc.r.appspot.com/access')
            .then((response) => {
                setUsers(response.data)
            }, (error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <label className="my-3">Home page</label>
            <div className="mb-5 container">
                <input
                    type="text"
                    placeholder='search ...'
                    value={find}
                    onChange={(e) => { setFind(e.target.value) }}
                    className="form-control mx-auto"
                />
            </div>
            <div className='row'>
                {
                    find === ''
                        ? <h3>search ....</h3>
                        : users.map((user, index) => (
                            <div className=" col-sm-3 p-2 my-2" key={index}>
                                <ul className="card list-group list-group-flush">
                                    <li className="list-group-item"><p><b>username</b></p><p>{user.username}</p></li>
                                    <li className="list-group-item"><p><b>password</b></p><p>{user.password}</p></li>
                                    <li className="list-group-item"><p><b>profile_picture_url</b></p><p>{user.profile_picture_url}</p></li>
                                    <li className="list-group-item"><p><b>otif_points_balance</b></p><p>{user.otif_points_balance}</p></li>
                                    <li className="list-group-item"><p><b>email</b></p><p>{user.email}</p></li>
                                    <li className="list-group-item"><p><b>refer</b></p><p>{user.refer}</p></li>
                                    <li className="list-group-item"><p><b>phone_num</b></p><p>{user.phone_num}</p></li>
                                    <li className="list-group-item"><p><b>first_name</b></p><p>{user.first_name}</p></li>
                                    <li className="list-group-item"><p><b>last_name</b></p><p>{user.last_name}</p></li>
                                    <li className="list-group-item"><p><b>birthday</b></p><p>{user.birthday}</p></li>
                                    <li className="list-group-item"><p><b>verified</b></p><p>{user.verified}</p></li>
                                    <li className="list-group-item"><p><b>verification_hash</b></p><p>{user.verification_hash}</p></li>
                                </ul>
                            </div>
                        ))

                }
            </div>
        </div>
    );
}

export default Home;