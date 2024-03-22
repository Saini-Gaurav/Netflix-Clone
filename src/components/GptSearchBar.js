import React from "react";

const GptSearchBar = () => {
  return (
    <div>
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=""
          placeholder="what would you like to watch today?"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
