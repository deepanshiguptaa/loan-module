import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoanModule from "./pages/LoanModule";   // main page
// in future you can add more pages like About, Contact etc.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanModule />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
