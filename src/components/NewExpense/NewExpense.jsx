import "./NewExpense.css";
import uuid from "react-uuid";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: uuid(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
