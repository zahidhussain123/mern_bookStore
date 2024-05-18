import Home from "./pages/home/Home";
import {  Navigate, Route, Routes } from "react-router-dom";
import Courses from "./pages/courses/Courses";
import Register from "./components/Register";
import { useAuth } from "./context/auth.jsx";
import  { Toaster } from 'react-hot-toast';

function App() {
  const [auth] = useAuth()
  return (
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={auth ? <Courses /> : <Navigate to="/register" />} />           
      <Route path="/register" element={<Register />} /> 
    </Routes>
    <Toaster />
    </div>
  );
}

export default App;
