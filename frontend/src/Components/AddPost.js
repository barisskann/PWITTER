import axios from "axios";
import { Navbar } from "./Navbar/Navbar";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

export const AddPost = () => {
  const notify = () => toast("Wow so easy!");

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleAddPost = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8000/addpost", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        notify();
        reset();
      });
  };
  return (
    <div>
      <Navbar />
      <ToastContainer />

      <div className="max-w-3xl m-auto  mt-20">
        <form className="flex  flex-col" onSubmit={handleSubmit(handleAddPost)}>
          <div className="text-red-800 font-extrabold text-4xl mb-4 text-center">
            CREATE POST
          </div>
          <textarea
            {...register("title")}
            placeholder="what are you thinking..."
            className="w-full border p-5   border-red-700 rounded-lg outline-red-900 text-2xl"
          ></textarea>
          <button className="bg-gray-400 self-end p-2 rounded-lg mt-3 px-8 py-3 opacity-90 hover:opacity-100 justify-self-end self-end text-red-800 font-bold ">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
