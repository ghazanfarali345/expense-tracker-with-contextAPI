import React,{useContext} from 'react'
import { TransactionContext} from '../../contexts/epenseTrackerContext'

export const TrasactionsList = () => {
    const {state, deleteTransaction} = useContext(TransactionContext)
    const removeListItem = (id) =>{
        // console.log(e)
        deleteTransaction(id)
    } 
    // const sign = totalIncome 

    return (
        <div className="transation-list">
        <h3>History</h3>
        <hr/>   
        <ul>
            {
                state.map((value    ) => {
                    return <li className={value.amount < 0 ? 'b-red' : 'b-green'} key={value.id}>
                        
                        <span>{value.description}</span>
                        <span>{value.amount < 0 ? '-' : '+'}${Math.abs(value.amount)}</span>
                        <button onClick={()=>removeListItem(value.id)} className={`delete-btn ${value.amount > 0 ? 'background-green' : 'background-red'}`}>x</button></li>
                })
            }
        </ul>
    </div>
    )
}
