import React, { useState } from "react";

function TodoItem(props) {
  const { item, index, handleComplete } = props;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleComplete(index)}
      />
      <span
        style={{
          marginLeft: "8px",
          textDecoration: item.completed ? "line-through" : "none"
        }}
      >
        {item.text}
      </span>
    </div>
  );
}

function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      completed: false
    };
    setItems(items.concat(newItem));
    setText("");
  }

  function handleComplete(index) {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          New To Do Item:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        {items.map((item, index) => (
          <li key={index}>
            <TodoItem
              item={item}
              index={index}
              handleComplete={handleComplete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
