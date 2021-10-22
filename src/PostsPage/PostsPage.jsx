import React, {useEffect, useState} from "react";
import {SinglePost} from "./SinglePost";
import {CreatePost} from "./CreatePost";
import {PopUp} from "./PopUp";

export function getPostsData(setPostData){
    fetch("https://localhost:5001/posts").then(response => response.json().then(data => {
        setPostData(data)
    }));
}

export function PostsPage() {
    const[buttonPopup, setButtonPopup] = useState(false);
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        getPostsData(setPostData)
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
            <button onClick={() => setButtonPopup(true)}>Create new post</button>
            <PopUp  trigger={buttonPopup} setTrigger ={setButtonPopup}>
                <CreatePost setPostData = {setPostData} setButtonPopup = {setButtonPopup}/>
            </PopUp>
            {postsHTML}
        </div>
)};