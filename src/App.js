

import Expense from "./component/Expense.jsx";

function App(date,title,price) {
 
  return (
    <div className="App">
  
      <b><h1>Expenses Menu</h1></b>
      <Expense date={"july 2022"} title={"car insurance"} price={"$231"}/>
      <Expense date={"july 2023"} title={"phone insurance"} price={"$21"}/>
      <Expense date={"March 2023"} title={"Health insurance"} price={"$12"}/>

    </div>
  );
}

export default App;
