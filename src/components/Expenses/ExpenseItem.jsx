import { useState } from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";
import "./ExpenseItem.css";
export const ExpenseItem = ({ title, amount, date }) => {
  console.log("Expense Item evaluated");
  const [myTitle, setTitle] = useState(title);
  const handleClick = () => {
    setTitle("updated");
    console.log(myTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{myTitle}</h2>
        <p className="expense-item__price">${amount}</p>
      </div>
      <button onClick={handleClick}>Change title</button>
    </Card>
  );
};
