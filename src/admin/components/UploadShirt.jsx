import React from 'react';
import { useState, useEffect } from 'react';

const UploadShirt = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [formData, setFormData] = useState({
        size: "",
        textColor: "",
        price: 1000,
    });

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleUpload = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('shirt', selectedFile);
        data.append('size', formData.size);
        data.append('textColor', formData.textColor);
        data.append('price', formData.price);
        console.log(data);
        const response = await fetch('http://localhost:3000/api/upload/shirt', {
            method: 'POST',
            body: data,
        });
        const result = await response.json();
        console.log(result);
    }

    return (
        <div>
            <h1>Upload Shirt</h1>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} />
                <select
                    name="size"
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                </select>
                <select
                    name="textColor"
                    onChange={handleChange}
                >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                </select>
                <input
                    type="number"
                    name="price"
                    onChange={handleChange}
                />
                <button type="submit">Upload</button>
            </form>

            {imageUrl && (
                <div>
                    <h2>Uploaded Image:</h2>
                    <img src={imageUrl} alt="Uploaded" />
                </div>
            )}
        </div>
    );
}

export default UploadShirt;