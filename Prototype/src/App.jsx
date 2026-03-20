import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";
import Policy from "./pages/Policy";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user")
  );
console.log("Login status:", isLoggedIn); // Debugging line
  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            isLoggedIn
              ? <Navigate to="/payment" />
              : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route
          path="/payment"
          element={
            isLoggedIn
              ? <Payment />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/dashboard"
          element={
            isLoggedIn
              ? <Dashboard />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/policy"
          element={
            isLoggedIn
              ? <Policy />
              : <Navigate to="/" />
          }
        />

      </Routes>
    </Router>
  );
}

export default App;