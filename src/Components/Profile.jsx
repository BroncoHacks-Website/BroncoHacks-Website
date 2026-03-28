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

            <div className="profile-links" style={{display: "flex", flexDirection: "row"}}>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <img
                    className="linkedin-picture"
                    src={linkedin}
                    alt="LinkedIn"
                    />
                </a>
                { person.github ? (
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                        <img
                        className="github-picture"
                        src={github}
                        alt="GitHub"
                        />
                    </a>
                ) : person.portfolio ? (
                        <a href={person.portfolio} target="_blank" rel="noopener noreferrer"
                        style={{
                            width: "34px",
                            height: "33px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#1F4993",
                            borderRadius: "50%",
                            boxShadow: "2px 2px 3px rgba(46, 72, 95, 0.5)",
                            marginLeft: "2px",
                            imageRendering: "pixelated",
                            transform: "translateY(2px)"
                        }}>
                            <i className="fa-solid fa-palette"
                            style={{
                                color: "white",
                                display: "inline-block",
                            }}></i>
                        </a>
                    ) : null }
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