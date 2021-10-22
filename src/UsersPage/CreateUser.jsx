import React, {useState} from 'react';
import {FetchUserDataFromDatabase} from "./UsersPage";

export function CreateUser(props)
{
    const bens = [
        "https://softwire.sharepoint.com/sales/Collateral/Sales%20Collateral/Photos%20and%20Videos/Headshots/Employee%20Headshots/Current%20Employees/Ben%20Fernandes/_74A9941-47.jpg",
        "https://softwire.sharepoint.com/sales/Collateral/Sales%20Collateral/Photos%20and%20Videos/Headshots/Employee%20Headshots/Current%20Employees/Ben%20Fernandes/_74A9942-48.jpg",
        "https://softwire.sharepoint.com/sales/Collateral/Sales%20Collateral/Photos%20and%20Videos/Headshots/Employee%20Headshots/Current%20Employees/Ben%20Fernandes/_74A9942-48.jpg",
        "https://softwire.sharepoint.com/sales/Collateral/Sales%20Collateral/Photos%20and%20Videos/Headshots/Employee%20Headshots/Current%20Employees/Ben%20Fernandes/_74A9944-50.jpg",
        "https://softwire.sharepoint.com/sales/Collateral/Sales%20Collateral/Photos%20and%20Videos/Headshots/Employee%20Headshots/Current%20Employees/Ben%20Fernandes/_74A9949-51.jpg",
        "https://softwire.sharepoint.com/sales/Collateral/Sales%20Collateral/Photos%20and%20Videos/Headshots/Employee%20Headshots/Current%20Employees/Ben%20Fernandes/_74A9950-52.jpg",
        "https://softwire.sharepoint.com/sales/Collateral/Sales%20Collateral/Photos%20and%20Videos/Headshots/Employee%20Headshots/Current%20Employees/Ben%20Fernandes/_74A9952-53.jpg",
        "https://softwire.sharepoint.com/sales/Collateral/Sales%20Collateral/Photos%20and%20Videos/Headshots/Employee%20Headshots/Current%20Employees/Ben%20Fernandes/square%20headshot.jpg",
        "https://media-exp1.licdn.com/dms/image/C5603AQFh4ZaHdJnUwA/profile-displayphoto-shrink_400_400/0/1632568319488?e=1640217600&v=beta&t=LWEpRL_1eTLrOx2ay5-U0DrxAxWFAltMZl75o2HzUuU",
        "https://media-exp1.licdn.com/dms/image/C4D03AQE_USajMJtKYg/profile-displayphoto-shrink_400_400/0/1633550612092?e=1640217600&v=beta&t=flW0BJjM1Bzz5irxBbs56eVK4UanE7MRQiIuB_1spno",
        "https://media-exp1.licdn.com/dms/image/C4E03AQGdLuHMX3qtEw/profile-displayphoto-shrink_400_400/0/1607629032312?e=1640217600&v=beta&t=He8bCcH_65IgrAIkjS9iAWnknyJfvCPH0RSnrEDV4lE"

    ];
    const [formInputs, setFormInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formInputs.ProfileImageUrl == undefined)
            formInputs.ProfileImageUrl = bens[Math.floor(Math.random() * bens.length)];

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