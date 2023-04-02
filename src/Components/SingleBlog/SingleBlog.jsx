import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css'

const SingleBlog = ({blog, handleWatchTime, handleBookMarked}) => {
    console.log(blog)
    return (
        <div>
            <div>
                <img className='w-100' src={blog.coverImage} alt="" />
            </div>
            <div className="autor-time-section row mt-5">
                <div className="autor col-md-8 row">
                    <div className='col-md-2 col-4'>
                        <img className='rounded-circle w-100 p-0' src={blog.authorImage} alt="" />
                    </div>
                    <div className='col-md-6 ms-'>
                        <h4>{blog.authorName}</h4>
                        <p>{blog.publishDate}</p>
                    </div>
                </div>
                <div className="time-section col-md-4">
                    <p>{blog.readTime} min read
                    <button className='btn btn-none' onClick={() => handleBookMarked(blog.blogTitle)}><FontAwesomeIcon icon={faBookmark} /></button>
                    </p>
                    
                </div>
            </div>
            <h2>{blog.blogTitle}</h2>
            <p>#beginner # programmer</p>
            <button className='btn btn-none mb-4 text-decoration-underline text-success read-time' onClick={() =>handleWatchTime(blog.readTime)}>Mark as read</button>


        </div>
    );
};

export default SingleBlog;