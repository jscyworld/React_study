import { useReducer, useCallback } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.name]: action.value,
            };
        case "RESET":
            return Object.keys(state).reduce((inputs, name) => {
                inputs[name] = "";
                return inputs;
            }, []);
        default:
            return state;
    }
}

function useInputs(initForm) {
    const [form, dispatch] = useReducer(reducer, initForm);
    const onTyping = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: "CHANGE_INPUT",
            name,
            value,
        });
    }, []);
    const reset = useCallback(() => {
        dispatch({ type: "RESET" });
    }, []);
    return [form, onTyping, reset];
}

export default useInputs;
