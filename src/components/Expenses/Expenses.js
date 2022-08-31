import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter year={selectedYear} onSelectYear={selectYearHandler} />
      <ExpenseItem item={props.items[0]} />
      <ExpenseItem item={props.items[1]} />
      <ExpenseItem item={props.items[2]} />
      <ExpenseItem item={props.items[3]} />
    </Card>
  );
};

export default Expenses;
