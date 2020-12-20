export const expenseTrakerReduer = ((state, action) => {    
    let newState = [...state]
    switch(action.type){
        case "Add" : { 
            return [action.payload, ...newState]
        }
        case "Delete": {
            console.log(action.payload)
            let abc =  newState.filter(a => a.id !== action.payload) 
            return [...abc]
        }  
        default :
            return state;

    }
})
