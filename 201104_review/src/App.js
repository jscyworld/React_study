import { createContext, useMemo, useReducer } from "react";
import "./App.css";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const initialState = {
    users: [
        {
            id: 1,
            name: "Sirius",
            email: "jmoumnet@myEmail.com",
            active: false,
        },
        {
            id: 2,
            name: "Leia",
            email: "leia@myEmail.com",
            active: false,
        },
        {
            id: 3,
            name: "Marie",
            email: "marie@myEmail.com",
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

export const UserDispatch = createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const count = useMemo(() => countActivatedUser(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser initLength={initialState.users.length} />
            <br />
            <UserList users={users} />
            <p>Active user: {count}</p>
        </UserDispatch.Provider>
    );
}

export default App;
