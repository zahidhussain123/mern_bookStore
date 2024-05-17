import Course from "../../components/Course";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Courses() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar />
      {/* <div className=" min-h-screen"> */}
        <Course />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default Courses;
