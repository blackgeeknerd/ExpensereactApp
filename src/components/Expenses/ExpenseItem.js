import React from 'react'   //added this import
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  //  console.log('evaluation');



  // const clickHandler = () => {
  //   setTitle('Updated');
  // };

   return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>₦{props.amount}</div>
      </div>
      {/* <button onClickCapture={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
