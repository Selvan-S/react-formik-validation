import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthorCard from "./AuthorCard";

function RenderAuthors({
  authorRecords,
  setAuthorRecords,
  booksData,
  setBooksData,
}) {
  const navigate = useNavigate();
  return (
    <div className="w-screen bg-gray-100 pt-8 px-4 pb-8">
      <div className="w-full flex justify-center">
        <button
          className="uppercase bg-sky-800 px-4 py-1 rounded-lg text-gray-50 font-bold text-lg mb-8"
          onClick={() => navigate("/add/records/author")}
        >
          <span className="text-2xl">&#x2b;</span> Add Author
        </button>
      </div>
      {authorRecords.length == 0 && (
        <div className="text-blue-600 w-full mx-auto text-2xl mt-4 text-center">
          Please create a new author or please check your internet!
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4">
        {authorRecords.map((val, inx) => {
          return (
            <AuthorCard
              key={inx}
              val={val}
              index={inx}
              authorRecords={authorRecords}
              setAuthorRecords={setAuthorRecords}
              setBooksData={setBooksData}
              booksData={booksData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RenderAuthors;
