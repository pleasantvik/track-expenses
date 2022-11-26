import { ExpenseItem } from "./ExpenseItem";
import "./ExpenseList.css";
export const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    // expensesContent = ;
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
    </ul>
  );
};
