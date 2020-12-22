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
                <div>Income <br /> ${income}</div>
                <div> Expense <br /> ${Math.abs(expense)}</div>
            </div>
    )
}
