import React, {useEffect, useState} from "react";
import {SinglePost} from "./SinglePost";
import {CreatePost} from "./CreatePost";

export function PostsPage() {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        fetch("https://localhost:5001/posts").then(response => response.json().then(data => {
            setPostData(data)
        }));
    }, []);

    if(postData == null)
    {
        return (<div className="PostsPage">
            <h3>Loading user data</h3>
        </div>);
    }

    let postsHTML = [];

    postData.items.map((post) => {
        postsHTML.push(<SinglePost key={post.id} data={post}/>);
    });

    return (
        <div className="PostsPage">
            <CreatePost/>
            {postsHTML}
        </div>
)};