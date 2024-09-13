import React, { useState } from 'react';

function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, image });
        setTitle('');
        setDescription('');
        setImage('');
    };

    return (
        <div>
            <h1>Create a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <br />
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default Create;