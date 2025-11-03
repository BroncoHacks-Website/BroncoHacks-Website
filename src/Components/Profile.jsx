import PropTypes from "prop-types";
import "../styles/Profile.css"; /* temporary just so it visually looks fine */
import linkedin from "../Assets/Profile/icon/linkedin-small.png";

import "/src/styles/MeetTheTeam.css";
function Profile(props) {
const person = props.person;

  return (
    <div className="profile">
      <div className="profile-blob">
        <img
          className="profile-picture"
          src={person.picture}
          alt={"Picture of " + person.name}
        />
      </div>
      <div className="profile-body">
        <div className="name">
          {person.name}
        </div>
        <div className="roles">
          {person.role.map((role, index) => ( 
            <div key={index} className="role">{role}</div>
          ))}
        </div>
      </div>
      <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
        <img
          className="linkedin-picture"
          src={linkedin}
          alt="LinkedIn"
        />
      </a>
    </div>
  );
}

Profile.propTypes = {
  person: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

export default Profile;
