import Slideshow from "/src/Components/Slideshow.jsx";

import HawkTuah1 from "../Assets/AvanadePhotos/HawkTuah1.jpg";
import Podium1 from "../Assets/AvanadePhotos/Podium1.jpg";
import Speech1 from "../Assets/AvanadePhotos/Speech1.jpg";

function Avanade() {
  const slidesMH = [{ url: HawkTuah1 }, { url: Podium1 }, { url: Speech1 }];
  return (
    <div className="winner-container">
      <h1 className="main-title">Avanade AI For a Better Future</h1>
      <p>
        The BroncoHacks committee assisted Avanade in Spring 2024 with bringing
        AI For a Better Future to life at Cal Poly Pomona. The committee was
        assigned the task of increasing the attendance for students, acting as a
        liason among the students at CPP and the workers for the company. We
        were able to give advice to Avanade for what to include in their
        hackathon. We also planned a social event for people to learn about what
        a hackathon is and form teams as well indepently.
      </p>
      <div className="slideshow">
        <Slideshow slides={slidesMH} />
      </div>
    </div>
  );
}

export default Avanade;
