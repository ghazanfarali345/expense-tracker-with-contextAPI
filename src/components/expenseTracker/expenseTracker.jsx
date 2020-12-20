import React, { useContext, useState} from 'react'
import { TransactionContext} from '../../contexts/epenseTrackerContext'

const ExpenseTracker = () => {

    const {state, addTransaction, deleteTransaction} = useContext(TransactionContext)
    const[amount, setAmount] = useState('')
    const[description, setDescription] = useState('')
    // let  isDisabled =  false
    // console.log(amount,description)
    // console.log(context,'df')

    const totalIncome = () => {
        let income = 0;
        for (var i = 0; i < state.length; i++) {
            if (state[i].amount > 0) {
                income += state[i].amount
            }
        }
        return income;
    }

    const totalExpense = () => {
        let expense = 0;
        for (var i = 0; i < state.length; i++) {
            if (state[i].amount < 0) {
                expense += state[i].amount
            }
        }
        return expense;
    }
    const removeListItem = (id) =>{
        // console.log(e)
        deleteTransaction(id)
    }  

    // const isButtonDisbled = () =>{
    //     if (description.length > 0 && amount.length > 0){
    //         return true
    //     }else{
    //         return false
    //     }
    // }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        addTransaction({    
            id:state.length + 1,
            amount:Number(amount),
            description:description
        })
    }

    return (

        <div className="container">

        <h3 className="text-center">Expense Tracker App Ghazanfar Ali</h3>
            <div className="balance-container text-center pt-20">
                <span ><b>Current Balance</b></span><br/>
                <span className="text-size">${totalIncome() + totalExpense()}</span>
            </div>
            <div className="income-expense-container">
                <div>Income <br /> ${totalIncome()}</div>
                <div> Expense <br /> ${totalExpense()}</div>
            </div>
            <div className="transation-list">
                <h3>History</h3>
                <hr/>
                <ul>
                    {
                        state.map((value) => {
                            return <li key={value.id}>
                                
                                <span>{value.description}</span>
                                <span>${value.amount}</span>
                                <button onClick={()=>removeListItem(value.id)} className="delete-btn ">x</button></li>
                        })
                    }
                </ul>
            </div>
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
                    {/* <input type="submit" value="Submit" /> */}
                    <button   className="btn" >Submit</button>
                </form>
                </div>

            </div>


        </div>
    )
}

export default ExpenseTracker;