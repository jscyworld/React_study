import React from "react";

function CreateUser({ name, email, createUser, onTyping }) {
    return (
        <div>
            <input
                name="name"
                value={name}
                onChange={onTyping}
                placeholder="type name"
            ></input>
            <input
                name="email"
                value={email}
                onChange={onTyping}
                placeholder="type email"
            ></input>
            <div>
                <button onClick={createUser}>Add user</button>
            </div>
        </div>
    );
}

export default CreateUser;
