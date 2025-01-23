import Slideshow from "/src/Components/Slideshow.jsx";

import Overview1 from "../Assets/MiniHackPhotos/Overview1.jpg";
import Overview2 from "../Assets/MiniHackPhotos/Overview2.jpg";
import Overview3 from "../Assets/MiniHackPhotos/Overview3.jpg";
import Overview4 from "../Assets/MiniHackPhotos/Overview4.jpg";
import Overview5 from "../Assets/MiniHackPhotos/Overview5.jpg";
import Overview6 from "../Assets/MiniHackPhotos/Overview6.jpg";
import Overview7 from "../Assets/MiniHackPhotos/Overview7.jpg";

function MiniHack() {
  const slidesMH = [
    { url: Overview1 },
    { url: Overview2 },
    { url: Overview3 },
    { url: Overview4 },
    { url: Overview5 },
    { url: Overview6 },
    { url: Overview7 },
  ];
  return (
    <div className="winner-container">
      <h1 className="main-title">Mini Hack 2023 & 2024</h1>
      <p>
        Mini Hack is targeted towards incoming students who have never coded
        outside of the classroom before. The goal of "minihacks" are to have all
        of the hackers complete a task before leaving the hackathon:{" "}
        <b>
          In 2023, this was utilizing the new OpenAI API, to create a python
          chatbot that would be able to remember past conversations. In 2024,
          this was having the teams come up with an app idea utilizing the
          spoonacular Food API
        </b>{" "}
        Students who attended this MiniHack were provided resource material on
        the basics of python, basics of calling an API, and the basics of
        starting a web page. With the help of the BroncoHacks Staff, the
        majority of the participants were able to complete the task, even with
        most of the students having minimal coding experience.
      </p>
      <div className="slideshow">
        <Slideshow slides={slidesMH} />
      </div>
    </div>
  );
}

export default MiniHack;
