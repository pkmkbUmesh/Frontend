import React, { useContext } from "react";
import { SearchIcon } from "../assets/icons";
import { MembersDataContext } from "../context/MembersDataContext";
import "../styles/header.scss";

const Header = () => {
  const { searchQuery, onSearchMember } = useContext(MembersDataContext);

  return (
    <header>
      <h1 className="headline">Team Members</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchMember(e)}
        />
        <SearchIcon />
      </div>
    </header>
  );
};

export default Header;
