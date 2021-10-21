import React, {useEffect, useState} from "react";
import {SingleUser} from "./SingleUser";

export function UsersPage() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch("https://localhost:5001/users").then(response => response.json().then(data => {
            setUserData(data)
        }));
    }, []);

    if(userData == null){
        return <p>Loading data!</p>
    }
    let usersHTML = [];

     for(let i =0; i < userData.items.length ; i++){
       usersHTML.push(<SingleUser key={userData.items[i].id} data={userData.items[i]}/>)
    }

    return (
        <div className="UsersPage">
            <div>{usersHTML}</div>
        </div>
    )};