import React, { useState, useEffect } from 'react';
import axios from "axios";

function Home() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://otif-server-dot-otif-mx.uc.r.appspot.com/access')
            .then((response) => {
                setUsers(response.data)
            }, (error) => {
                console.log(error);
            });
    }, []);
    console.log(users)
    return (
        <div>
            <label className="my-3">Home page</label>
            <div className="mb-5 container">
                <input type="text" placeholder='search ...' className="form-control mx-auto" />
            </div>
            <div className='row'>
                {
                    users.map((user,index) => (
                        <div className="card col-sm-3 p-2" key={index}>
                            <ul className="list-group list-group-flush m-2">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                    ))
                    }
            </div>
        </div>
    );
}

export default Home;