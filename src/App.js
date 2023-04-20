import "./App.css";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Hotels from "./pages/Hotels";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </div>
  );
}

export default App;
