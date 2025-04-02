import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin({ user , setUser}) {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const createUser = async () => {
      if (!submitted) return;

      setError("");
      setResponse(null);

      try {
        const res = await axios.post(
          "https://jsd5-mock-backend.onrender.com/members",
          { name, lastname, position }
        );
        setName("");
        setLastName("");
        setPosition("");
        setResponse(res.data);
      } catch (error) {
        console.error(error);
        setError("Failed to create user");
      } finally {
        setSubmitted(false);
      }
    };

    createUser();
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
      setUser(user.filter((item) => item.id !== id));
    } catch (error) {
        console.error(error);
        setError("Failed to delete user");
    }
    }
  

  return (
    <div className="pt-16 bg-[#e8e8e8] h-full flex flex-col justify-center items-center">
      <form
        className="pb-16 flex flex-col font-bold text-3xl gap-5"
        onSubmit={handleSubmit}
      >
        <label>Create User Here</label>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="boder-black border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="boder-black border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="boder-black border p-2 rounded-md"
          />
          <button
            type="submit"
            className="hover:cursor-pointer rounded-md bg-blue-600 p-2 text-white border-2 border-black"
          >
            Save
          </button>
        </div>
      </form>
      {error && (
        <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
          <p>
            <strong>Error</strong> {error}
          </p>
        </div>
      )}
      <table className="border border-gray-300 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 font-semibold">Name</th>
            <th className="border border-gray-300 p-2 font-semibold">
              Last Name
            </th>
            <th className="border border-gray-300 p-2 font-semibold">
              Position
            </th>
            <th className="border border-gray-300 p-2 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr
              key={item.id}
              className="border border-gray-300 hover:bg-gray-50"
            >
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">{item.lastname}</td>
              <td className="border border-gray-300 p-2">{item.position}</td>
              <td className="hover:cursor-pointer border border-gray-300 p-2">
                <button
                  onClick={() => deleteUser(item.id)}
                  className="hover:cursor-pointer bg-red-600 text-white p-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
