import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';


const BlogContainer = ({handleWatchTime, handleBookMarked}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div>
            <div className="single-blog-container">
               {
                blogs.map((blog) => (
                    <SingleBlog
                    blog={blog}
                    handleWatchTime={handleWatchTime}
                    handleBookMarked={handleBookMarked}
                    
                    ></SingleBlog>
                ))
               }
            </div>
        </div>
    );
};

export default BlogContainer;