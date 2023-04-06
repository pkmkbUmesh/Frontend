import React, { useState, createContext, useEffect } from "react";
import { dummyData } from "../utils";
import useDebounce from "../utils/customHooks/useDebounce";

export const MembersDataContext = createContext();

const MembersDataProvider = ({ children }) => {
  const [membersList, setMembersList] = useState(dummyData);
  const [searchQuery, setSearchQuery] = useState("");

  //debouncing search query through a custom hook
  const debounceSearchQuery = useDebounce(searchQuery, 1000);

  const onSearchMember = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  // useEffect will run when there is any search query is entered by the user
  useEffect(() => {
    if (debounceSearchQuery) {
      const searchData = membersList.filter((item) => {
        const { memberName, designation } = item;
        const searchQueryToLowerCase = searchQuery.toLowerCase();

        if (
          memberName.toLowerCase().includes(searchQueryToLowerCase) ||
          designation.toLowerCase().includes(searchQueryToLowerCase)
        ) {
          return item;
        }
      });

      setMembersList(searchData);
    } else {
      setMembersList(dummyData);
    }
  }, [debounceSearchQuery]);

  const value = { membersList, searchQuery, onSearchMember };

  return (
    <MembersDataContext.Provider value={value}>
      {children}
    </MembersDataContext.Provider>
  );
};

export default MembersDataProvider;
