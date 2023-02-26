import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
export default function Signup(params) {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    axios
      .post("http://localhost:8000/signup", { data })
      .then((r) => {
        history.push("/signin");
      })
      .catch((err) => history.push("/signup"));
  };
  console.log(data);
  return (
    <div className="mt-52">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl m-auto  ">
        <div className="flex justify-end">
          {" "}
          <Link
            to="/signin"
            className="py-2 px-4 border  hover:bg-yellow-300 bg-blue-400 text-red-700 font-bold "
          >
            LOGIN
          </Link>
        </div>
        <h1 className="text-center text-5xl text-red-700">Signup</h1>
        <div className="flex flex-col">
          <label className="text-red-800 text-2xl" htmlFor="password">
            NAME
          </label>
          <input
            {...register("name")}
            className="py-1 border  outline-red-700 focus:border-orange-200 focus:border-cyan-700  border-cyan-500"
            id="password"
          />
        </div>{" "}
        <div className="flex flex-col">
          <label className="text-red-800 text-2xl" htmlFor="password">
            SURNAME
          </label>
          <input
            {...register("surname")}
            className="py-1 border  outline-red-700 focus:border-orange-200 focus:border-cyan-700  border-cyan-500"
            id="password"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-red-800 text-2xl" htmlFor="email ">
            EMAIL
          </label>
          <input
            {...register("email")}
            className="py-1 border  outline-red-700 focus:border-orange-200 focus:border-cyan-700  border-cyan-500"
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-red-800 text-2xl" htmlFor="password">
            PASSWORD
          </label>
          <input
            {...register("password")}
            className="py-1 border  outline-red-700 focus:border-orange-200 focus:border-cyan-700  border-cyan-500"
            id="password"
          />
        </div>
        <div>
          <button className="w-full bg-gray-300 mt-5 text-red-700 text-xl font-bold">
            Signup
          </button>
          {/* <div>{error}</div> */}
        </div>
      </form>
      <div></div>
    </div>
  );
}
