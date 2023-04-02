import React from 'react';
import './SideBar.css'

const SideBar = ({ watchTime, blogTitle, titleCount }) => {
    return (
        <div>
            <div className='border p-3 spent-time'>
                <h5 className='font-size'>Spent time on read: {watchTime} min</h5>
            </div>
            <div className='bookmarked-bg mb-5'>
                <h4 className='p-3 mt-3'>Bookmarked Blogs:{titleCount}</h4>
                <div className='list-unstyled'>

                    {blogTitle.map((title, index) => (
                        <li key={index} className='fs-5 fw-bold list-unstyled p-3 single-blog-bg mt-3'><span className=''>{title}</span></li>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default SideBar;