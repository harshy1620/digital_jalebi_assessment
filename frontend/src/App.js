import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { selectToken } from "./redux/authSlice";
import ProductsPage from "./components/ProductsPage";

function App() {
  const token = useSelector(selectToken);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={ token?<Home /> :<Login/>}
        />
        <Route
          path="/search-products"
          element={ <ProductsPage/> }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
