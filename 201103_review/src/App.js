import { useCallback, useMemo, useReducer, useRef } from 'react';
import './App.css';
import CreateList from './CreateList';
import UserList from './UserList';
import useInputs from './Hooks/useInputs';

function countOnlineUser(userList) {
    console.log("counting...");
    return userList.filter(user => user.online).length;
}

function reducer(state, action) {
    switch (action.type) {
        case "CREATE_USER":
            return { inputs: initState.inputs, userList: state.userList.concat(action.user) };
        case "ONLINE_USER":
            return { ...state, userList: state.userList.map(user => user.id === action.id ? {...user, online: !user.online} : user) };
        case "DELETE_USER":
            return { ...state, userList: state.userList.filter(user => user.id !== action.id) };
        default:
            return state;
    }
}

const initState = {
    userList: [
        { id: 1, name: "Sirius", nickname: "jmoumnet", online: false },
        { id: 2, name: "Harry", nickname: "seeker", online: false },
    ]
}

function App() {
    const [{ name, nickname }, onChange, reset ] = useInputs({name: "", nickname: ""});
    const [state, dispatch] = useReducer(reducer, initState);
    const { userList } = state;
    const nextId = useRef(3);

    const createUser = useCallback(()=>{
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                name, nickname
            }
        });
        nextId.current += 1;
        reset();
    }, [name, nickname, reset]);

    const isOnline = useCallback((id)=>{
        dispatch({
            type: "ONLINE_USER",
            id
        })
    }, []);

    const deleteUser = useCallback((id)=>{
        dispatch({
            type: "DELETE_USER",
            id
        });
    }, []);

    const count = useMemo(()=>countOnlineUser(userList), [userList])
    return (
        <div>
            <CreateList name={name} nickname={nickname} onChange={onChange} createUser={createUser} />
            <UserList userList={userList} isOnline={isOnline} deleteUser={deleteUser} />
            <div>
                <p>Online user: {count}</p>
            </div>
        </div>
    );
}

export default App;
