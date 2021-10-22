import React, {useState} from 'react';
import {getPostsData} from "./PostsPage";

export function CreatePost(props)
{
    const [formInputs, setFormInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formInputs)
        };

        fetch('https://localhost:5001/posts/create', requestOptions).then(() => getPostsData(props.setPostData));
        props.setButtonPopup(false)
        alert("Post has been created...")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your message:
                <input
                    type="text"
                    name="Message"
                    value={formInputs.Message || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your image url:
                <input
                    type="text"
                    name="ImageUrl"
                    value={formInputs.ImageUrl || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your id:
                <input
                    type="text"
                    name="UserID"
                    value={formInputs.UserID || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit"/>
        </form>
    );
}