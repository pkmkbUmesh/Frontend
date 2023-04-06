import React, { useContext } from "react";
import { getInitials } from "../../utils/helper";
import { MembersDataContext } from "../../context/MembersDataContext";
import "../../styles/teamMembers.scss";

const TeamMembers = () => {
  const { membersList } = useContext(MembersDataContext);

  return (
    <section className="team-members">
      {membersList.length > 0 ? (
        membersList.map((item) => {
          const { id, memberName, designation } = item;
          return (
            <div className="card" key={id}>
              <div className="headline member-initials">
                {getInitials(memberName)}
              </div>
              <span>
                <p className="label">{memberName}</p>
                <p className="description">{designation}</p>
              </span>
            </div>
          );
        })
      ) : (
        <h3>Sorry! No search result found</h3>
      )}
    </section>
  );
};

export default TeamMembers;
