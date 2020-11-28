import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchTwootter() {
  return (
    <div className="SearchTwootter">
      <FiSearch color="#8899a6" className="search-icon" size="1.1rem" />
      <input type="text" placeholder="Search Twooter" />
    </div>
  );
}
