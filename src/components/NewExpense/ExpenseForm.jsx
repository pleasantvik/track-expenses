import { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = ({ onSaveExpenseData }) => {
  //STATE
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /**
 *   //GROUPING STATE TOGETHER
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
 */

  //HANDLER
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    /** 
     * //////////////////////////////
     * //SETTER FOR GROUP STATE
     * /////////////////////////////
    setUserInput({
      ...userInput,
      title: e.target.value,
    });
    ////////////////////////////////////////
     //UPDATING STATE BASE ON PREV VALUE
     * //////////////////////////////
     setUserInput((prevState) => {
       return { ...prevState, title: e.target.value };
     });
     * ///////////////////////////////////
     */
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  //FORM SUBMISSION HANDLER
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  //
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
