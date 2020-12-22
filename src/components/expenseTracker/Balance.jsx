import { useContext} from "react";
import {TransactionContext } from '../../contexts/epenseTrackerContext'


export const Balance = () => {
    const {state} = useContext(TransactionContext)
    const income = state.map(amount => amount.amount)
    const totalIncome = income.reduce((acc, curr)=>(acc +=curr),0)
    const sign = totalIncome < 0 ? '-' : '+'

    return (
        <div className="balance-container text-center">
            <span ><b>Current Balance</b></span><br/>
            <span className="text-size">{sign}${Math.abs(totalIncome)}</span>
        </div>
    )
}
