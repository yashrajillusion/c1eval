import "./App.css";
import { Inventory } from "./Items/Items";
import React from "react";


let data = [{name:"Books:", classadd:"addBook", classrem:"remBook",classtotal:"totalBooks",count:13},{name:"Pens:", classadd:"addPen", classrem:"remPen",classtotal:"totalPens",count:10},{name:"Notebooks:",count:44, classadd:"addNotebook", classrem:"remNotebook",classtotal:"totalNotebooks"},{name:"InkPens:",count:78, classadd:"addInkPen", classrem:"remInkPen",classtotal:"totalInkPens"}]


function App() {
  
  return <div className="App">
    {data.map((el)=>(
    <Inventory data={el} />

    ))}
    <div className="total"></div>
    </div>;
}

export default App;
