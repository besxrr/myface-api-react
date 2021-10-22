import React, {useState} from 'react';
import {FetchUserDataFromDatabase} from "./UsersPage";

export function CreateUser(props)
{
    const [formInputs, setFormInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formInputs.ProfileImageUrl == undefined)
            formInputs.ProfileImageUrl = "https://softwire.sharepoint.com/sales/Collateral/Sales%20Collateral/Photos%20and%20Videos/Headshots/Employee%20Headshots/Current%20Employees/Ben%20Fernandes/square%20headshot.jpg";

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formInputs)
        };

        fetch('https://localhost:5001/users/create', requestOptions).then(() =>
            FetchUserDataFromDatabase(props.setUserData)
        );

        setFormInputs({});
        props.setTrigger(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Firstname:
                <input
                    type="text"
                    name="FirstName"
                    value={formInputs.FirstName || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Lastname:
                <input
                    type="text"
                    name="LastName"
                    value={formInputs.LastName || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter username:
                <input
                    type="text"
                    name="Username"
                    value={formInputs.Username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Email:
                <input
                    type="text"
                    name="Email"
                    value={formInputs.Email || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter profile image url:
                <input
                    type="text"
                    name="ProfileImageUrl"
                    value={formInputs.ProfileImageUrl || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit"/>
        </form>
    );
}