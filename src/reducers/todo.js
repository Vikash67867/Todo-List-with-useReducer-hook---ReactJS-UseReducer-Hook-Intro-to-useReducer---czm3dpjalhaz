const todoReducer = (state, action) => {
    switch (action.type) {
     case "ADD_TODO":
        state:[...state,action.payload]
        return state
        case "DELETE_TODO": 
        let data = [...state]
            let index = state.findIndex((d) => d.id == action.payload) //find index by id
            data.splice(index,1)
           return data

    }
}

export { todoReducer }