import axios from "axios";

export const Liked = ({ setLiked, i }) => {
  const handleDisliked = (i) => {
    axios
      .put(
        `http://localhost:8000/allpost/dislike/${i.id}`,
        {
          liked: i.liked,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then((r) => setLiked(Math.random()));
  };
  const handleLiked = (i) => {
    axios
      .put(
        `http://localhost:8000/allpost/${i.id}`,
        { liked: i.liked },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then((r) => setLiked(Math.random()));
  };
  return (
    <>
      <button
        onClick={() => handleLiked(i)}
        className="border text-orange font-semibold p-2 rounded-md bg-cyan-500"
      >
        LİKED
      </button>
      <button
        onClick={() => handleDisliked(i)}
        className="border text-orange font-semibold p-2 rounded-md bg-red-500"
      >
        DİSLİKED
      </button>
    </>
  );
};
