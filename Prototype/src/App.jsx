import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Payment from "./pages/Payment";

function App() {
  const isLoggedIn = localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/payment" /> : <Login />}
        />

        <Route
          path="/payment"
          element={isLoggedIn ? <Payment /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;