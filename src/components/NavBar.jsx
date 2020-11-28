import React from "react";
import { FaTwitter } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import SearchTwootter from "./SearchTwootter";

export default function NavBar() {
  return (
    <div className="NavBar">
      <FaTwitter color="#fff" size="1.45rem" />
      <SearchTwootter />
      <HiDotsHorizontal className="nav-dots" color="#1EA1F2" size="1.5rem" />
    </div>
  );
}
