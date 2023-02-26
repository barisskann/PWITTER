import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";

export default function Post({ local }) {
  const [rand, setRand] = useState("");
  const [post, setPost] = useState([]);
  const [error, setError] = useState(true);
  const handleRemove = (i) => {
    axios
      .delete(`http://localhost:8000/deletepost/${i.id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        setRand(Math.random());
        console.log(r);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/getpost", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        setPost(r.data);
        setError(false);
      })
      .catch((err) => setError(err.response.data.message));
  }, [rand]);
  return (
    <div className="divide-y divide-slate-300">
      <Navbar />
      {post.map((i) => (
        <div className="max-w-lg m-auto mb-4 border-4   border-gray-300  p-3 rounded-lg flex flex-col">
          <div className="flex gap-2">
            <div className="text-red-700 font-semibold">{i.name}</div>
            <div className="text-red-700 font-semibold">{i.surname}</div>
          </div>
          <div>{i.title}</div>
          <div className="flex justify-end gap-3 ">
            <button className="border text-orange font-semibold p-2 rounded-md bg-cyan-500">
              EDİT
            </button>
            <button
              onClick={() => {
                handleRemove(i);
              }}
              className="border text-orange font-semibold p-2 rounded-md bg-red-500"
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
