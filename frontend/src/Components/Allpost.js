import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Liked } from "./PostLiked/Like-Dislike";
import { IoHeartSharp } from "react-icons/io5";

export const AllPost = () => {
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:8000/allpost", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((r) => {
        console.log(r);
        setData(r.data);
      });
  }, [liked]);
  return (
    <div className="divide-y divide-slate-300">
      <Navbar />
      {data.map((i) => (
        <div className="max-w-lg m-auto mb-4 border-4   border-gray-300  p-3 rounded-lg flex flex-col">
          <div className="flex gap-2">
            <div className="text-red-700 font-semibold">{i.name}</div>
            <div className="text-red-700 font-semibold">{i.surname}</div>
          </div>
          <div className="flex-1">{i.title}</div>
          <div className="flex justify-end gap-3 items-end ">
            <div className="flex-1 flex ">
              <div className="justify-self-start self-end flex items-center gap-1  ">
                <IoHeartSharp className="text-red-600" />
                {i.liked}
              </div>
            </div>
            <Liked setLiked={setLiked} i={i} />
          </div>
        </div>
      ))}
    </div>
  );
};
