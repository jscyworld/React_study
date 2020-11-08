import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
    const { name, email, active, id } = user;
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{ color: active ? "green" : "black", cursor: "pointer" }}
                onClick={() => {
                    dispatch({ type: "TOGGLE_USER", id });
                }}
            >
                name: {name}
            </b>
            <span> / email: {email} </span>
            <button
                onClick={() => {
                    dispatch({ type: "DELETE_USER", id });
                }}
            >
                Delete
            </button>
        </div>
    );
});

function UserList({ users }) {
    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
}

export default React.memo(UserList);
