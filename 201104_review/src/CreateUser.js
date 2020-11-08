import React, { useCallback, useContext, useRef } from "react";
import { UserDispatch } from "./App";
import useInputs from "./useInputs";

function CreateUser({ initLength }) {
    const [{ name, email }, onTyping, reset] = useInputs({
        name: "",
        email: "",
    });
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(initLength + 1);

    const createUser = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                name,
                email,
            },
        });
        nextId.current += 1;
        reset();
    }, [name, email, reset, dispatch]);

    const handelKeyPress = (e) => {
        if (e.key === "Enter") {
            createUser();
        }
    };

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
                onKeyPress={handelKeyPress}
                placeholder="type email"
            ></input>
            <div>
                <button onClick={createUser}>Add user</button>
            </div>
        </div>
    );
}

export default CreateUser;
