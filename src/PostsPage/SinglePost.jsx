import React from "react";
import dateFormat from "dateformat";

export function SinglePost(prop) {
    var datePosted = new Date(prop.data.postedAt)
    var date = dateFormat(datePosted, "dd, mm, yyyy, h:MM")


    return (
        <div className="post-container">
            <div>
                <h2 className="screen-name">{prop.data.postedBy.displayName}</h2>
                <p className="post-time">{date}</p>
                <img src={prop.data.postedBy.profileImageUrl}></img>
            </div>
            <div className="post-message">
                <p>{prop.data.message}</p>
                <img src={prop.data.imageUrl}></img>
                <p>👍 {prop.data.likes.length}</p>
            </div>
        </div>
        )};
