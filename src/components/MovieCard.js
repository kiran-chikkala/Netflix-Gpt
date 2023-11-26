import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, original_title }) => {
  if (!posterPath) return null;
  return (
    <div className="w-38 md:w-48 pr-4 relativeh-68 ">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      <h2 className=" text-white text-sm   ">{original_title}</h2>
    </div>
  );
};
export default MovieCard;
