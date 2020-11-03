import { useCallback, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {...state, [action.name]: action.value};
        case "RESET":
            return Object.keys(state).reduce((inputs, name)=>{
                inputs[name] = "";
                return inputs;
            }, {}); 
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback((e)=>{
        const { name, value } = e.target;
        dispatch({
            type: "CHANGE_INPUT",
            name, value
        })
    }, []);
    const reset = useCallback((e)=>dispatch({type: "RESET"}), []);
    return [state, onChange, reset];
}

export default useInputs;