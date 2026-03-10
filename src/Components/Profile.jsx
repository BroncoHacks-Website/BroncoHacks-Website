import PropTypes from "prop-types";
import linkedin from "../Assets/Profile/Icons/icon_Linkedin.svg";
import github from "../Assets/Profile/Icons/icon_Github.svg";

function Profile(props) {
const person = props.person;

  return (
    <div className="profile">
        <img
            className="profile-picture"
            src={person.picture}
            alt={"Picture of " + person.name}
        />
        <div className="profile-body">
            <div className="profile-text">
                <div className="name">
                    {person.name}
                </div>
                <div className="roles">
                    {person.role.map((role, index) => ( 
                        <div key={index} className="role">{role}</div>
                    ))}
                </div>
            </div>

            <div className="profile-links">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <img
                    className="linkedin-picture"
                    src={linkedin}
                    alt="LinkedIn"
                    />
                </a>
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                    <img
                    className="github-picture"
                    src={github}
                    alt="GitHub"
                    />
                </a>
            </div>
        </div>
    </div>
  );
}

Profile.propTypes = {
    person: PropTypes.shape({
        picture: PropTypes.string,
        name: PropTypes.string.isRequired,
        role: PropTypes.array,
        committee: PropTypes.string,
        linkedin: PropTypes.string,
        github: PropTypes.string
    }),
};

export default Profile;