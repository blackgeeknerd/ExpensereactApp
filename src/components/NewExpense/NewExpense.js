import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'





const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseDatas = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseDatas)
        props.onAddExpense(expenseDatas);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};


export default NewExpense;