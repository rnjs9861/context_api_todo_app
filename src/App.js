import styled from "@emotion/styled";
import Button from "components/Button";
import DataView from "components/DataView";
import InputContainer from "components/InputContainer";
import ShowInputButton from "components/ShowInputButton";
import TextInput from "components/TextInput";
import TodoInput from "components/TodoInput";
import { useState } from "react";

const WrapStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

function App() {
  const [todoList, setTodolist] = useState([
    "contextAPI 공부하기",
    "타입스크립트 공부하기",
    "JWT 공부하기",
  ]);

  const onDelete = todo => {
    setTodolist(todoList.filter(item => item != todo));
  };
  const onAdd = todo => {
    setTodolist([...todoList, todo]);
  };

  return (
    <WrapStyle>
      <DataView todoList={todoList} onDelete={onDelete} />
      <InputContainer onAdd={onAdd} />
    </WrapStyle>
  );
}

export default App;
