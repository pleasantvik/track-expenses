import { useState } from "react";
import { Card } from "./Card";
import "./Expenses.css";
import { ExpensesFilter } from "../NewExpense/ExpenseFilter";
import { ExpenseList } from "./ExpenseList";
import { ExpensesChart } from "./ExpensesChart";

export const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};
