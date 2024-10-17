import React, { useReducer } from 'react';

type StateType = {
    count: number;
    showText: boolean;
};

type ActionType = {
    type: "INCREMENT" | "toggleShowText";
};

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };
        case "toggleShowText":
            return { count: state.count, showText: !state.showText };
        default:
            return state;
    }
};

const ReducerTutorial = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            <h1>{state.count}</h1>
            {<button onClick={() => dispatch({ type: "INCREMENT" /* "toggleShowText"*/ })}>Click Here</button>}
            {state.showText && <p>This is a text</p>}
        </div>
    );
}

export default ReducerTutorial;
