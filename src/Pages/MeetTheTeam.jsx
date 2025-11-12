import Profile from "/src/Components/Profile";
import profileData from "/src/Assets/Profile/profileData";
import { useState } from "react";
import "/src/styles/MeetTheTeam.css";

function MeetTheTeam() {
  const [selectedRole, setSelectedRole] = useState("Primary Organizer"); // Initially show all profiles
  const [showPrevious, setShowPrevious] = useState(false);
  const [previousFilter, setPreviousFilter] = useState("AllPrevious");

  const selectTeam = (role) => {
    setSelectedRole(role);
  };

  return (
    <>
      <div className="meet-the-team">
        {/* <div className="faq-background"> */}
        <div className="team-container">
          <div className="mtt-title-container">
            <h1 className="mtt-title">Meet the Team</h1>
          </div>
          <div className="role-buttons">
            {/* <button onClick={() => selectTeam("All")}>All</button> */}
            <button onClick={() => { setShowPrevious(false); selectTeam("Primary Organizer"); }}>
              Primary Organizers
            </button>
            <button onClick={() => { setShowPrevious(false); selectTeam("BroncoHacks 2025-2026 Committee"); }}>
              Broncohacks 2025-2026 Committee
            </button>
            <button onClick={() => { setShowPrevious(false); selectTeam("Project Manager"); }}>
              Project Managers
            </button>
            <button onClick={() => { setShowPrevious(false); selectTeam("Website Developer"); }}>
              Website Developers
            </button>
            <button onClick={() => { setShowPrevious(false); selectTeam("UI/UX"); }}>UI/UX</button>
          </div>

          <div className="role-select role-select-buttons">
            <button
              onClick={() => {
                setShowPrevious(true);
                setPreviousFilter("AllPrevious");
                selectTeam("All");
              }}
            >
              View Previous Committees
            </button>

            {/* Dropdown appears only when viewing previous committees */}
            {showPrevious && (
              <select
                className="role-dropdown" id="previous-team-select"
                value={previousFilter}
                onChange={(e) => {
                  const val = e.target.value;
                  setPreviousFilter(val);
                  selectTeam(val === "AllPrevious" ? "All" : val);
                }}
              >
                <option value="AllPrevious">All Previous Committees</option>
                <option value="Former Organizer">Former Organizers</option>
                <option value="Former PM">Former Project Managers</option>
                <option value="BroncoHacks 2024-2025 Committee">BroncoHacks 2024-2025 Committee</option>
                <option value="BroncoHacks 2023-2024 Committee">BroncoHacks 2023-2024 Committee</option>
              </select>
            )}

          </div>

          {/* Main current-team grid */}
          <div className={"the-team" + (showPrevious ? " hidden" : "")}>
            {profileData
              .filter(
                (person) =>
                  selectedRole === "All" || person.role.includes(selectedRole)
              )
              .map((person) => (
                <div key={person.id} className="profile-wrapper">
                  <div className="profile-bubble">
                    <Profile
                      person={{
                        ...person,
                        role: selectedRole === "All" ? [] : [selectedRole], // Pass only the selected role
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Previous teams grid - shown when showPrevious is true */}
          <div className={"previous-team" + (showPrevious ? "" : " hidden")}>
            {profileData
              .filter((person) => {
                // If showing all previous, include anyone with any previous-related role
                if (previousFilter === "AllPrevious") {
                  return (
                    person.role.includes("Former Organizer") ||
                    person.role.includes("Former PM") ||
                    person.role.includes("BroncoHacks 2024-2025 Committee") ||
                    person.role.includes("BroncoHacks 2023-2024 Committee")
                  );
                }
                return person.role.includes(previousFilter);
              })
              .map((person) => (
                <div key={person.id} className="profile-wrapper">
                  <div className="profile-bubble">
                    <Profile person={{ ...person, role: person.role }} />
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
export default MeetTheTeam;
