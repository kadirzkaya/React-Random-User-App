import React from 'react'

function UserList({ users }) {

    const capitalize=(gender)=>{
        return gender.charAt(0).toUpperCase()+gender.slice(1);
    }
    console.log(users)
    const renderedUsers = users.map((user) => {
        return (
            <div key={user.login.uuid} className="card">
                <img src={user.picture.large} className='image' alt='user-img'/>
                <div className="details">
                    <h4><b>{user.name.first} {user.name.last}</b></h4>
                    <p>{capitalize(user.gender)}</p>
                    <p>{user.email}</p>
                    <p>{user.location.country}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='card-list'>{renderedUsers}</div>
    )
}

export default UserList