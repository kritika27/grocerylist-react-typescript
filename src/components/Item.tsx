import React from "react";
import "./Item.css";

interface FuncProps{
    remove(id:number):void;
    handleComplete(id:number):void;
    id:number;
    item:string;
    complete:boolean;
}

const Item :React.FC<FuncProps> = ({ id, item, remove,handleComplete,complete }:FuncProps)  => {
  
  return (
    <div className="item">
      <input
        type="text"
        value={item}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          color: "white",
          fontSize: "20px",
        }}
        className={complete ? "complete" : ""}
      />
      <img
        onClick={() => handleComplete(id)}
        src="https://img.icons8.com/offices/40/000000/checked-2--v2.png"
        alt="complete task"
      />
      <img
        onClick={() => remove(id)}
        src="https://img.icons8.com/color/48/000000/trash.png"
        alt="Delete"
      />
    </div>
  );
};
export default Item;