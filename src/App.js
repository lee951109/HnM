import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./rout/PrivateRoute";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    console.log("auth", auth);
  }, [auth]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
