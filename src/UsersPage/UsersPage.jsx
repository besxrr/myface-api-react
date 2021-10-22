import React, { useEffect, useState } from "react";
import { SingleUser } from "./SingleUser";
import {CreateUser} from "./CreateUser";

export function UsersPage() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch("https://localhost:5001/users").then(response => response.json().then(data => {
            setUserData(data)
        }));
    }, []);

    if(userData == null)
    {
        return (<div className="UsersPage">
            <h3>Loading user data</h3>
        </div>);
    }

    let usersHTML = [];
    userData.items.map((user) => {
        usersHTML.push(<SingleUser key={user.id} data={user}/>);
    });

    return (
        <div className="UsersPage">
            <CreateUser/>
            {usersHTML}
        </div>
    );
};