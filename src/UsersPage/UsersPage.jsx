import React, { useEffect, useState } from "react";
import { SingleUser } from "./SingleUser";
import {CreateUser} from "./CreateUser";

// TODO: Pass setUserData function as context
export function FetchUserDataFromDatabase(setUserData)
{
    fetch("https://localhost:5001/users").then(response => response.json().then(data => {
        setUserData(data)
    }));
}

export function UsersPage() {
    const [userData, setUserData] = useState(null);

    useEffect(() => FetchUserDataFromDatabase(setUserData),[]);

    if(userData == null)
    {
        return (<div className="UsersPage">
            <h3>Loading user data</h3>
        </div>);
    }

    let usersHTML = [];
    userData.items.map((user) => {
        usersHTML.push(<SingleUser key={user.id} data={user} setUserData={setUserData}/>);
    });

    return (
        <div className="UsersPage">
            <CreateUser setUserData={setUserData}/>
            {usersHTML}
        </div>
    );
};