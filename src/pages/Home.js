import React from 'react';

function Home() {
    return (
        <div>
            <label className="my-3">Home page</label>
            <div className="mb-5">
                <input type="text" placeholder='search ...' className="form-control w-25 mx-auto" />
            </div>
            <div className='row'> 
                <div className="card col-3 mx-2">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>
                <div className="card col-3 mx-2">
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