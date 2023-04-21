import { useState } from "react";
export default function SearchBar({ setSearchText }) {
  const handleSearch = (eve) => {
    if (eve.key === "Enter") {
      setSearchText(eve.target.value);
    }
  };
  return (
    <>
      <div className="search">
        <input
          onKeyDown={handleSearch}
          type="text"
          // value={searchText}
          placeholder="Enter City Name"
        />
      </div>
    </>
  );
}
