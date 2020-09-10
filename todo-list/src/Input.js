import React from 'react'

function Input ({onClick, value, onChange, onKeyDown, inputValid}) {

    let errorMessage;
    if(!inputValid){
        errorMessage = <p>Input must be between 1 and 140 characters.</p>

    }

    return ( <div className="todo-input">
            <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={value}/>
            <button value={value} onClick={onClick}>Add Item</button>
            {errorMessage}
            </div>)


}


export default Input