import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";

 interface NewItem {
  id: number;
  item: string;
  complete: boolean;
};

const App: React.FC =()=>{
  const [item, setItem] = useState<string>("");
  const [list, setList] = useState<NewItem[]>([]);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    const newItem = {
      id: Math.random(),
      item: item,
      complete: false,
    };
    e.preventDefault();
    if (item && item.length <= 25) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const remove = (id:number): void => {
    setList(list.filter((el) => el.id !== id));
  };
  const handleComplete = (id:number):void => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={item}
          placeholder="Enter the items"
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Add Items
        </button>
        <br></br>
        <br></br>
      </form>
      <div>
        {list.map((c, id) => (
          <Item
            key={id}
            id={c.id}
            item={c.item}
            complete={c.complete}
            remove={remove}
            handleComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;