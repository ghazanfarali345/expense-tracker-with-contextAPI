import React,{useContext} from 'react'
import { TransactionContext} from '../../contexts/epenseTrackerContext'


export const IncomeExpense = () => {
    const {state} = useContext(TransactionContext)

    const amount = state.map(val => val.amount)
    
    const income = amount.filter(item =>item > 0)
    .reduce((acc, cur)=>(acc += cur),0).toFixed(2)

    const expense = amount.filter(item =>item < 0)
    .reduce((acc, cur)=>(acc += cur),0).toFixed(2)
    
    return (
        <div className="income-expense-container">
                <div >Income <br /><span className="c-green">${income}</span></div>
                <div> Expense <br /><span className="c-red"> ${Math.abs(expense)}</span></div>
            </div>
    )
}
