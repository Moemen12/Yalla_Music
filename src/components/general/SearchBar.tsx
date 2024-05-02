import { useEffect, useState } from "react";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
const SearchBar: React.FC = () => {
  const [isSearchBtnClicked, setSearchClicked] = useState(false);
  const handleSearchClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setSearchClicked(true);
  };

  useEffect(() => {
    const handleBodyClick = (event: MouseEvent) => {
      if (
        isSearchBtnClicked &&
        !(event.target as HTMLElement).closest(".search-container")
      ) {
        setSearchClicked(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [isSearchBtnClicked]);

  return (
    <>
      {isSearchBtnClicked ? (
        <div className="search-container">
          <IoCloseSharp
            className="cursor-pointer hover:bg-red-500 rounded-full text-white"
            size={"1.5rem"}
            onClick={() => setSearchClicked(false)}
          />
          <label className="input input-bordered flex items-center gap-2 absolute right-0 top-12">
            <input
              type="text"
              className="grow text-slate-500"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      ) : (
        <div onClick={handleSearchClick}>
          <IoSearchSharp
            className="cursor-pointer hover:bg-red-500 rounded-full text-white"
            size={"1.5rem"}
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
