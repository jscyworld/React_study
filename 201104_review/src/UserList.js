import React from "react";

const User = React.memo(function User({ user, toggleUser, deleteUser }) {
    const { name, email, active, id } = user;
    return (
        <div>
            <b
                style={{ color: active ? "green" : "black", cursor: "pointer" }}
                onClick={() => {
                    toggleUser(id);
                }}
            >
                name: {name}
            </b>
            <span> / email: {email} </span>
            <button
                onClick={() => {
                    deleteUser(id);
                }}
            >
                Delete
            </button>
        </div>
    );
});

function UserList({ users, toggleUser, deleteUser }) {
    return (
        <div>
            {users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                    toggleUser={toggleUser}
                    deleteUser={deleteUser}
                />
            ))}
        </div>
    );
}

export default React.memo(UserList);
