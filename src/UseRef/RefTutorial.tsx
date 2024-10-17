import React, { useRef } from 'react'

const RefTutorial = () => {
    //const inputRef = useRef(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const onClick=()=>{
        if (inputRef.current) {
        inputRef.current.value="";}
    }
    return (
        <div>
            <h1>Type</h1>
            <input type='text' placeholder='Type something'  ref={inputRef}/>
            <button onClick={onClick}>Delete</button>
        </div>
    );
}

export default RefTutorial