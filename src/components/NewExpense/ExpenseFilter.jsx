import "./ExpenseFilter.css";

export const ExpensesFilter = ({ onChangeFilter, selected }) => {
  // useState()
  const dropDownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
    console.log(selected);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropDownChangeHandler} value={selected}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
