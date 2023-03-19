import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_dashboard from "./components/Dashboard/Admin_dashboard";
import Donar_dashboard from "./components/Dashboard/Donar_dashboard";
import Herosection from "./components/Herosection";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Herosection />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin_dashboard />}></Route>
        <Route path="/donar" element={<Donar_dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
