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
              ? <Policy />
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

      </Routes>
    </Router>
  );
}

export default App;