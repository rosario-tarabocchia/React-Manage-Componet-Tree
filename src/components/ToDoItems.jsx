import React from "react";

let isDone = false;

function ToDoItems(props) {
  // const [isDone, setIsDone] = useState(false);

  function handleClick() {
    // setIsDone((prevValue => {
    //   return !prevValue;
    // }));
  }

  return (
    <div
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      {/* <div onClick={handleClick}> */}
      <li>{props.item}</li>
      {/* <li style={{ textDecoration: isDone ? "line-through" : "none" }}>{props.item}</li> */}
    </div>
  );
}

export default ToDoItems;
