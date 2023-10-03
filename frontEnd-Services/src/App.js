import "./App.css";
import RouterPath from "./routers/RouterPath";
import CounterSection from "./components/CounterSection";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <CounterSection></CounterSection>
      <RouterPath></RouterPath>
    </>
  );
}

export default App;
