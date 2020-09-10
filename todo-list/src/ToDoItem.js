import React from 'react'

function ToDoItem({errand, done, toggleClick,deleteItem,deleteID}) {
    let checkboxInnerText = ""

    if(done.includes("true")){
        checkboxInnerText = "X"
    }

    return ( <div className="todo-item">
                <div className="errand-text">
                {errand}
                </div>
                <div className="user-actions">
                    <div className={done} onClick={toggleClick}>{checkboxInnerText}</div>
                    <button className={deleteID} onClick={deleteItem}>DELETE</button>
                </div>
            </div>)


}

export default ToDoItem