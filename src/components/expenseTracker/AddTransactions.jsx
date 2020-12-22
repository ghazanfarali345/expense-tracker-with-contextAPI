import React,{useContext, useState} from 'react'
import { TransactionContext} from '../../contexts/epenseTrackerContext'

export const AddTransactions = () => {
    const {state, addTransaction} = useContext(TransactionContext)
    const[amount, setAmount] = useState('')
    const[description, setDescription] = useState('')
    const formSubmitHandler = (event) => {
        event.preventDefault();
        addTransaction({    
            id:state.length + 1,
            amount:Number(amount),
            description:description
        })
        setAmount('');
        setDescription('')
    }
    return (
        <div className="input">
        <div>

        <h3>Add new transation</h3>
        <form onSubmit={formSubmitHandler}>

            <label>Description</label>
            <br />

            <input type="text" onChange={(e)=>setDescription(e.target.value)} />
            <br />
            <label>Amount</label>
            <br />

            <input type="number" onChange={(e)=>setAmount(e.target.value)} />
            <br />
            <button   className="btn" >Submit</button>
        </form>
        </div>

    </div>
    )
}
