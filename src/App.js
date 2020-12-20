import './App.css';
import ExpenseTracker  from './components/expenseTracker/expenseTracker'
import { ExpenseTrackerProvider } from "./contexts/epenseTrackerContext";

function App() {
  return (
    <div>
      <ExpenseTrackerProvider >
        <ExpenseTracker/>
      </ExpenseTrackerProvider>
    </div>
  );
}

export default App;
