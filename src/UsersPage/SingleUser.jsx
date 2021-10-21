import React from "react";

export function SingleUser(prop) {
    return (
        <div className="user-container">
            <h2 className="user-username">{prop.data.displayName}</h2>
            <img src={prop.data.profileImageUrl}></img>
            <address className="user-email"><a href={`mailto:${prop.data.email}`}>{prop.data.email}</a></address>
        </div>
    )};
