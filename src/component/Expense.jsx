import React, { useState } from "react";

import "./Expense.css";

const Expense = (props) =>{

    const [title,setTitle]=useState(props.title);
  const clickHandler= ()=>{
    setTitle("updated");
    console.log(title);
  }


  const [price,setPrice]=useState(props.price);
  const clickHandler1= ()=>{
    setPrice(`$100`);
    console.log(price);
  } 

    return ( 
        <div >
      <div className="expense-item">
        <div>{props.date}</div>
        <button onClick={clickHandler1}>Change Expenses</button>

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{price}</div>
          <button onClick={clickHandler}>Change title</button>

        </div>
        
      </div>

</div>
    )
  }
export default Expense;
