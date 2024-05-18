import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
const Logout = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    try {
      setAuth({
        ...auth,
        user: null,
      });
      localStorage.removeItem("user");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      toast.success("Logout Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
