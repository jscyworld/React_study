import { useCallback, useMemo, useReducer, useRef } from "react";
import "./App.css";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const initialState = {
    inputs: { name: "", email: "" },
    users: [
        {
            id: 1,
            name: "Sirius",
            email: "jmoumnet@gmail.com",
            active: false,
        },
        {
            id: 2,
            name: "Leia",
            email: "leia@gmail.com",
            active: false,
        },
        {
            id: 3,
            name: "Marie",
            email: "marie@gmail.com",
            active: false,
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_USER":
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.id
                        ? { ...user, active: !user.active }
                        : user
                ),
            };
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id),
            };
        case "CHANGE_INPUT":
            return {
                ...state,
                inputs: { ...state.inputs, [action.name]: action.value },
            };
        case "CREATE_USER":
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user),
            };
        default:
            return state;
    }
}

function countActivatedUser(userlist) {
    console.log("counting activated user...");
    return userlist.filter((user) => user.active).length;
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const { name, email } = state.inputs;
    const nextId = useRef(initialState.users.length + 1);

    const onTyping = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: "CHANGE_INPUT",
            name,
            value,
        });
    }, []);

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
    }, [name, email]);

    const toggleUser = useCallback((id) => {
        dispatch({
            type: "TOGGLE_USER",
            id,
        });
    }, []);

    const deleteUser = useCallback((id) => {
        dispatch({
            type: "DELETE_USER",
            id,
        });
    }, []);

    const count = useMemo(() => countActivatedUser(users), [users]);

    return (
        <div>
            <CreateUser
                name={name}
                email={email}
                createUser={createUser}
                onTyping={onTyping}
            />
            <br />
            <UserList
                users={users}
                toggleUser={toggleUser}
                deleteUser={deleteUser}
            />
            <p>Active user: {count}</p>
        </div>
    );
}

export default App;
