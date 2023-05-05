import Form from './Form';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
