import React from "react";
    
function Inventory({data}){
    // console.log(data)
    const [counter, setCounter] = React.useState(data.count)

    const handle = (value)=>{
        setCounter(counter+value)
    }
    return (
        <div className="items">
        <span>{data.name}</span>
        <button className={data.classadd} onClick={()=>{handle(+1)}}>+</button>
        <button className={data.classrem} onClick={()=>{handle(-1)}}>-</button>
        <span className={data.classtotal}>{counter}</span>
        </div>
    )
}




export {Inventory}