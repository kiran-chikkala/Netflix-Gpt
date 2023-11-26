import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addText } from "../utils/gptSlice";
import useSearchMoveis from "../hooks/useSearchMoveis";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const [text, settext] = useState("");
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  useSearchMoveis();

  const handleText = () => {
    dispatch(addText(text));
    settext("");
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={text}
          type="text"
          onChange={(e) => settext(e.target.value)}
          className=" p-3 md:p-4 m-4 col-span-9 outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg"
          onClick={handleText}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
