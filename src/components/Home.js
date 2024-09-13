import React, { useState, useEffect } from 'react';
import image1 from "../images/"

const blogData = [
    { id: 1, title: 'First Blog', description: 'This is the first blog', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Second Blog', description: 'This is the second blog', image: 'https://via.placeholder.com/150' },
    // Add more blogs as needed
];

function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogData);
    }, []);

    return (
        <div>
            <h1>Blog List</h1>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                    <img src={blog.image} alt={blog.title} />
                </div>
            ))}
        </div>
    );
}

export default Home;