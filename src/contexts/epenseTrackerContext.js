import { createContext,useReducer } from "react";
import {expenseTrakerReduer  } from "../reducers/expenseTrakerReduer";

const initialState = [
    {id:1, amount: 20, description:'cash'},
    {id:2, amount: -770, description:'utility bill'},
   
]

export const TransactionContext = createContext(initialState)

export const ExpenseTrackerProvider = ({children}) =>{
    const [state, dispatch] = useReducer(expenseTrakerReduer, initialState)
    
    function addTransaction(newData){
        dispatch({
            type: 'Add',
            payload:{
                id:newData.id,
                amount:newData.amount,
                description:newData.description
            }
        });
    }
    function deleteTransaction(id){
        dispatch({

            type:'Delete',
            payload: id
        })
    } 
   
    return(
        <TransactionContext.Provider value={{state, addTransaction, deleteTransaction}}>
            {children}
        </TransactionContext.Provider>
    )

}