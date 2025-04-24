import "./app.css";
import { Router } from "preact-router";

import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      {/* <About path="/sobre" /> */}
    </Router>
  );
};

export default App;
