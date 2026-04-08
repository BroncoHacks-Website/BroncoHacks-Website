import PropTypes from "prop-types";

function Profile(props) {
const person = props.person;

  return (
    <div className="profile">
        <img
            className="profile-picture"
            src={person.picture}
            alt={"Picture of " + person.name}
            loading="lazy"
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
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                { person.github ? (
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                ) : person.portfolio ? (
                        <a href={person.portfolio} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-palette"></i>
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