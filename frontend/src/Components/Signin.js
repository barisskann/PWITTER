import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login({ setLocal }) {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  console.log(errors);
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/signin", { data })
      .then((r) => {
        localStorage.setItem("token", r.data);
        setLocal(localStorage.getItem("token"));
        setTimeout(() => {
          history.push("/allpost");
        }, 500);
      })
      .catch((err) => console.log(err));
    reset();
  };

  return (
    <div className="mt-40">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl m-auto  ">
        <h1 className="text-center text-5xl text-red-700">LOGİN</h1>
        <div className="flex flex-col">
          <label className="text-red-800 text-2xl" htmlFor="email ">
            EMAIL
          </label>
          <input
            {...register("email", {
              required: "This required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            className="py-1 border pl-2  outline-red-700 focus:border-orange-200 focus:border-cyan-700  border-cyan-500"
            id="email"
          />
          <div>{errors.email && <span>{errors.email.message}</span>}</div>
        </div>
        <div className="flex flex-col">
          <label className="text-red-800 text-2xl" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            {...register("password", {
              required: "This required",
              minLength: {
                value: 8,
                message: "password too short",
              },
            })}
            className="py-1 border pl-2 outline-red-700 focus:border-orange-200 focus:border-cyan-700  border-cyan-500"
            id="password"
          />
          <div>{errors.password && <span>{errors.password.message}</span>}</div>
        </div>
        <div>
          <button
            disabled={!isValid}
            className={`w-full ${
              !isValid ? "opacity-60" : ""
            } bg-gray-300 mt-5 text-red-700 text-xl font-bold`}
          >
            CLİCK
          </button>
          <Link className="text-red-800" to="/signup">
            Dont you have an account
          </Link>
        </div>
      </form>
      <div></div>
    </div>
  );
}
