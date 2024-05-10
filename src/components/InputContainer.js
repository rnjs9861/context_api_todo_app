import React, { useState } from "react";
import TodoInput from "./TodoInput";
import ShowInputButton from "./ShowInputButton";

const InputContainer = ({ onAdd }) => {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const onAddTodo = todo => {
    onAdd(todo);
    setShowTodoInput(false);
  };
  return (
    <>
      {showTodoInput && <TodoInput onAdd={onAddTodo}></TodoInput>}
      <ShowInputButton
        show={showTodoInput}
        onClick={() => setShowTodoInput(!showTodoInput)}
      />
    </>
  );
};

export default InputContainer;
