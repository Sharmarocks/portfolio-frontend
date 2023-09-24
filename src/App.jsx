import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
