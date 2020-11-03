import React from 'react';

const User = React.memo(
    function User({user, deleteUser, isOnline}) {
        const { name, nickname, id, online } = user;
        return (
            <div>
                <b onClick={()=>{isOnline(id)}} style={{cursor: "pointer", color: online ? "green" : "black"}}>name: {name} </b>
                <span> / ID: {nickname} </span>
                <button onClick={()=>deleteUser(id)}>Delete</button>
            </div>
        )
    }
)


function UserList({userList, deleteUser, isOnline}) {
    return (
        <div>
            {userList.map(user => (<User key={user.id} user={user} deleteUser={deleteUser} isOnline={isOnline} />))}
        </div>
    );
}

export default React.memo(UserList);