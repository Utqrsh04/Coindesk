import { BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-black  bg-opacity-95">
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
