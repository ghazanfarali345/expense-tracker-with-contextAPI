import './App.css';
import { ExpenseTrackerProvider } from "./contexts/epenseTrackerContext";
import {Header} from './components/expenseTracker/Header'
import {Balance} from './components/expenseTracker/Balance'
import { IncomeExpense } from "./components/expenseTracker/IncomeExpense";
import { TrasactionsList } from "./components/expenseTracker/TransactionsList";
import { AddTransactions } from "./components/expenseTracker/AddTransactions";


function App() {
  return (
    
      <ExpenseTrackerProvider >
        <div className="container">
          <Header />
          <Balance/>
          <IncomeExpense/>
          <TrasactionsList/>
          <AddTransactions/>
        </div>
      </ExpenseTrackerProvider>
  
  );
}

export default App;
