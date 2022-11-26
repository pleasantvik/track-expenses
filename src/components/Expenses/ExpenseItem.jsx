import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";
import "./ExpenseItem.css";
export const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <p className="expense-item__price">${amount}</p>
        </div>
      </Card>
    </li>
  );
};
