import Algo from "./pages/Algo";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Random from "./pages/Random";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/"
            element={<Algo />}
          />
          <Route
            path="/dev"
            element={<Random />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
