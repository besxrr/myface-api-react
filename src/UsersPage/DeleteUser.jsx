import React, {useState} from 'react';
import {FetchUserDataFromDatabase} from "./UsersPage";

export function DeleteUser(props) {

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: `${props.id}`
        };

        fetch('https://localhost:5001/users/delete', requestOptions).then(() =>
            FetchUserDataFromDatabase(props.setUserData)
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="hidden"
            />

            <input className="myButton" type="submit" value="delete"/>
        </form>
    );
}
