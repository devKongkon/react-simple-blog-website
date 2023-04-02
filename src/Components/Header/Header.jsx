import React from 'react';

const Header = () => {
    return (
        <div className='d-flex justify-content-between container mt-3'>
            <div>
                <h2 className='fw-bold'>My Blog</h2>
            </div>
            <div>
                <nav className="nav fs-4 fw-bold">
                    <a className='pe-5' aria-current="page" href="#">Home</a>
                    <a className='pe-5' href="#">Blog</a>
                    <a className='pe-0' href="#">Contact</a>
                </nav>
            </div>


        </div>
    );
};

export default Header;