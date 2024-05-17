import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./pages/courses/Courses";
import Register from "./components/Register";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />           
      <Route path="/register" element={<Register />} />           
    </Routes>
    </div>
  );
}

export default App;
