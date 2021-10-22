import React from "react";
import dateFormat from "dateformat";
import "./PostsStyling.scss"

export function SinglePost(prop) {
    var datePosted = new Date(prop.data.postedAt)
    var date = dateFormat(datePosted, "dd/mm/yyyy hh:MM")


    return (
        <div className="post-container">
            <div className="userContent">
                <div className="userContentRight">
                    <h2 className="screen-name">{prop.data.postedBy.displayName}</h2>
                    <p className="post-time">{date}</p>
                </div>
                <img className="profile-picture" src={prop.data.postedBy.profileImageUrl}></img>
            </div>
            <div className="post-message">
                <p className="message">{prop.data.message}</p>
                <img className="post-image" src={prop.data.imageUrl}></img>
                <p>👍 {prop.data.likes.length}</p>
            </div>
        </div>
        )};
