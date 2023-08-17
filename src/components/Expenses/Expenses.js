import React, { useState } from "react"; //added this import

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
// import Card from './Card';
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

        
  {/* lean jsx usage for conditional output  'method 3  step 1'*/}
  let expensesContent = <p>No expenses found!!!.</p>;

  {/* lean jsx usage for conditional output  'method 3  step 2'*/}
  if (filteredExpenses.length > 0 ) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* lean jsx usage for conditional output  'method 3  step 3'*/}
        {expensesContent};


        {/* && sign usage for conditional output  'method 2'*/}
        {/* {filteredExpenses.length === 0 && expensesContent};
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }; */}



        {/* tenary expression method for conditional output  method 2*/}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found!!</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
       
      </Card>
    </div>
  );
};

export default Expenses;
