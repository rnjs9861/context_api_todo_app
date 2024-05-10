import { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import Title from "./Title";
import styled from "@emotion/styled";

const WrapStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BackgroundStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ContentsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputInnerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const TodoInput = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  const [mesaage, setMessage] = useState("");

  const onAddTodo = () => {
    if (todo === "") {
      return setMessage("할 일을 작성해주세요");
    }
    onAdd(todo);
    setTodo("");
  };

  return (
    <WrapStyle>
      <BackgroundStyle />
      <ContentsStyle>
        <Title label="할 일 추가" />
        <InputInnerStyle>
          <TextInput value={todo} onChange={setTodo} />
          <Button label="추가" color="#304ffe" onClick={onAddTodo} />
        </InputInnerStyle>
        <div style={{ color: "red" }}>{mesaage}</div>
      </ContentsStyle>
    </WrapStyle>
  );
};

export default TodoInput;
