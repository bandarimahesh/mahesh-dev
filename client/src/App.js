import HomePage from "./Components/pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollButton from "./Components/Utils/ScrollToTop";
import GoToTop from "./Components/Utils/GoToTop";
function App() {
  return (
    <div>
      <Router>
        <ScrollButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <GoToTop />
      </Router>
    </div>
  );
}

export default App;
