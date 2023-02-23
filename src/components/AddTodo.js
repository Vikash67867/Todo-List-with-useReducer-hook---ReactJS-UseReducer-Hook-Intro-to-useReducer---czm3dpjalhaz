import React from "react"

const AddTodo = ({ dispatch }) => {

    const handleSubmit = (e) =>{
        e.preventDefault() // refresh page
        // console.log(e.target.title.value)
        let todoData = {id:Date.now(),title:e.target.title.value}
        dispatch({type:"ADD_TODO",payload:todoData})
       e.target.Reset()
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} id="todo-form">
                <input name="title" id="todo-input" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export { AddTodo }