import React, { useEffect } from 'react';
import axios from "axios";

function Home() {
    useEffect(() => {
        axios.get('https://otif-server-dot-otif-mx.uc.r.appspot.com/access')
            .then((response) => {
                console.log(response)
            }, (error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <label className="my-3">Home page</label>
            <div className="mb-5 container">
                <input type="text" placeholder='search ...' className="form-control mx-auto" />
            </div>
            <div className='row'>
                <div className="card col-sm-3 m-2">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>
                <div className="card col-sm-3 m-2">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;