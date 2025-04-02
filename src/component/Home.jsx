import { useEffect, useState } from "react";
import Admin from "../pages/Admin";
import User from "../pages/user";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [showContent, setShowContent] = useState(null);
  const [assessment, setAssessment] = useState("Assessment");
  const [location, setLocation] = useState("React");

  useEffect(() => {
    const fetchUser = async () => {
      setError("");

      try {
        const res = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setUser(res.data);
      } catch (error) {
        setError("Failed to fetch users");
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleUserClick = () => {
    setShowContent("user");
    setLocation("Home");
    setAssessment("User Sector");
  };

  const handleAdminClick = () => {
    setShowContent("admin");
    setLocation("Home");
    setAssessment("Admin Sector");
  };
  return (
    <div className="bg-[#e8e8e8] w-screen h-screen">
      <section className="flex flex-col justify-center items-center pt-32 gap-2 ">
        <p className="text-6xl font-bold">Generation Thailand</p>
        <p className="text-6xl font-bold">
          {location} - {assessment}
        </p>
        <div className="flex gap-20 pt-20">
          <a
            onClick={handleUserClick}
            className="hover:cursor-pointer flex justify-center items-center bg-white w-[178px] h-[56px] rounded-md shadow-md font-bold"
          >
            User Home Sector
          </a>
          <a
            onClick={handleAdminClick}
            className="hover:cursor-pointer flex justify-center items-center bg-white w-[178px] h-[56px] rounded-md shadow-md font-bold"
          >
            Admin Home Sector
          </a>
        </div>
        <div className="bg-[#e8e8e8] flex justify-center items-center w-full h-full">
          {showContent === "user" && <User user={user}/>}
          {showContent === "admin" && <Admin user={user} setUser={setUser}/>}
        </div>
      </section>
    </div>
  );
};

export default Home;
