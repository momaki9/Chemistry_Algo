import Algo from "./pages/Algo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Random from "./pages/Random";

function App() {
  return (
    <>
      <Router>

        <Routes>
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
