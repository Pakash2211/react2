import "./styles.css";
import { Counter } from "./component/counter";
export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter value={0} />
    </div>
  );
}
