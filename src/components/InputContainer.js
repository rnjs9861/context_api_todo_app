import React, { useState } from "react";
import TodoInput from "./TodoInput";
import ShowInputButton from "./ShowInputButton";

const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false);

  const onClose = () => {
    setShowTodoInput(false);
  };
  return (
    <>
      {showTodoInput && <TodoInput onClose={onClose}></TodoInput>}
      <ShowInputButton
        show={showTodoInput}
        onClick={() => setShowTodoInput(!showTodoInput)}
      />
    </>
  );
};

export default InputContainer;
