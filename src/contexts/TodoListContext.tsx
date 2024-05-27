import { createContext, useState } from "react";

// 타입정의 (타입은 첫글자 대문자)
interface Context {
  todoList: string[]; //문자의 배열이다.
  onAdd: (todo: string) => void; //return이 없는 void 함수
  onDelete: (todo: string) => void;
}

//props 타입 정의
interface Props {
  children: JSX.Element | JSX.Element[];
}

// Context
export const TodoListContext = createContext<Context>({
  todoList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAdd: (): void => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onDelete: (): void => {},
});

// 초기값
const initValue = [
  "contextAPI 공부하기",
  "타입스크립트 공부하기",
  "JWT 공부하기",
];

// Provider
export const TodoListContextProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState(initValue);

  const onDelete = (todo: string) => {
    setTodoList(todoList.filter(item => item !== todo));
  };
  const onAdd = (todo: string) => {
    setTodoList([...todoList, todo]);
  };

  return (
    <TodoListContext.Provider value={{ todoList, onAdd, onDelete }}>
      {children}
    </TodoListContext.Provider>
  );
};
