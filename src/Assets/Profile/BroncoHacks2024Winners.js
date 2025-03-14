import webdev1st from '../WinnersPhotos/WebDev1st.jpg';
import webdev2nd from '../WinnersPhotos/WebDev2nd.jpg';
import webdev3rd from '../WinnersPhotos/WebDev3rd.jpg';
import cyber1st from '../WinnersPhotos/Cyber1st.jpg';
import cyber2nd from '../WinnersPhotos/Cyber2nd.jpg';
import cyber3rd from '../WinnersPhotos/Cyber3rd.jpg';

export const data = {
    "Web Development": [
      {
        place: 1,
        title: "Professor Benchmark",
        description: "Rate My Professor alternative that scraped class data for better insights",
        team: "Alan and the Chipmunks",
        members: ["Alan Le", "Jesse Chu", "Ava Vazquez"],
        imagePath: webdev1st
      },
      {
        place: 2,
        title: "Bento Box",
        description: "A Canvas alternative with extra features such as AI integration",
        team: "GDSC",
        members: ["Bryan Bergo", "Garrett Lo", "Gheo Nakfoor", "Youssef Zerroug"],
        imagePath: webdev2nd
      },
      {
        place: 3,
        title: "Poly Planner",
        description: "CPP Studying Hub that provided study spots + flash cards",
        team: "EXP",
        members: ["Calvin Kamada", "Justin Santos", "Keerthi Sreeram", "Medha Swarnachandrabalaji"],
        imagePath: webdev3rd

      }
    ],
    "Cybersecurity": [
      {
        place: 1,
        title: "What's A Terminal?",
        description: "A python based program that implements Open AI to detect the authenticity of a potentially suspicious email",
        team: "What's A Terminal?",
        members: ["Vincent Garcia", "Jimmy Peng", "Ashley Mapes", "Ryan Miller"],
        imagePath: cyber1st

      },
      {
        place: 2,
        title: "Hibachi Hackers",
        description: "Email Phising Detector through openAI",
        team: "Hibachi Hackers",
        members: ["Jace Areff", "Eric Shinozaki", "Christian Martin"],
        imagePath: cyber2nd

      },
      {
        place: 3,
        title: "Fitbites Firewall",
        description: "Google chrome extension that could help detect the likelihood of an email being a scam email or one generated by an AI.",
        team: "Fitbites Firewall",
        members: ["Daniel Appel", "Hasti Abbasi", "Jason Moya"],
        imagePath: cyber3rd

      }
    ]
  };

  export default data;