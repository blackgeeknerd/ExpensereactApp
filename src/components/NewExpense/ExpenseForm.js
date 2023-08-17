import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //useState() returns the name of the element u want to change its value and also return
  // a function that takes the new value.
  // using destructing in the below code, we create 2 const variable
  //first variable is the name of the element to be changed which is the first value from useState()
  //second variable is the function that is returned bby usestate()

  //using multiple useState() for value collection and input change
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //using one useState
  // const [userInput, setUserInput] = useState({
  //     enteredTitle : '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    // setting 'setEnteredTitle'' using  multiple useState()
    setEnteredTitle(event.target.value);

    // setting 'setEnteredTitle using one useState() method 1
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });

    // setting 'setEnteredTitle using one useState() method 2 (better method)
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredTitle: event.target.value
    //     };
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });

    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredDate: event.target.value
    //     };
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });

    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredAmount:event.target.value
    //     }
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    
    props.onSaveExpenseData(expenseData);
    alert("submitted");
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
