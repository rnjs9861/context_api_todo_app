import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement, //as HTMLElement html요소만 반환한다. -> Type 단언
);
root.render(<App />);
