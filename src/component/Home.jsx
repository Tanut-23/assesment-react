import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Owner from "../pages/Owner";
import Admin from "../pages/Admin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [content, setContent] = useState("home");
  return (
    <div>

      {content === "home" && (
        <section className="flex flex-col justify-center items-center pt-32 gap-2">
          <p className="text-6xl font-bold">Generation Thailand</p>
          <p className="text-6xl font-bold">React - Assessment</p>
          <div className="flex gap-20 pt-20">
            <button
              onClick={() => setContent("user")}
              className="bg-white w-[178px] h-[56px] rounded-md shadow-md font-bold"
            >
              User Home Sector
            </button>
            <button
              onClick={() => setContent("admin")}
              className="bg-white w-[178px] h-[56px] rounded-md shadow-md font-bold"
            >
              Admin Home Sector
            </button>
          </div>

          {content === "user" && <User />}
          {content === "admin" && <Admin />}
        </section>
      )}
    </div>
  );
};

export default Home;
