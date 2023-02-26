import { Link, useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  const handleClick = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      history.push("/");
    }, 500);
  };
  return (
    <div className="flex justify-end">
      <Link
        to="/allpost"
        className="p-2 border hover:bg-yellow-300 bg-blue-400 text-red-700 font-bold "
      >
        ALL POSTS
      </Link>
      <Link
        to="/myposts"
        className="p-2 border hover:bg-yellow-300 bg-blue-400 text-red-700 font-bold "
      >
        MY POSTS
      </Link>
      <Link
        to="/addpost"
        className="p-2 border hover:bg-yellow-300 bg-blue-400 text-red-700 font-bold "
      >
        ADD POST
      </Link>

      <button
        onClick={handleClick}
        className="p-2 border hover:bg-yellow-300 bg-blue-400 text-red-700 font-bold "
      >
        LOGOUT
      </button>
    </div>
  );
};
