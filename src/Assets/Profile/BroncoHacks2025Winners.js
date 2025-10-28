// import webdev1st from '../WinnersPhotos/WebDev1st.jpg';
import placeholder from '../Profile/icon/placeholder.png';

import bestUIUX from '../WinnersPhotos/Best_UIUX.JPG';
import bestDSAI from '../WinnersPhotos/BEST_DSAI.JPG';
import bestGameDev from '../WinnersPhotos/Best_Game_Dev.JPG';
import bestWebDev from '../WinnersPhotos/Best_Web_Dev.JPG';
import bestCyberSec from '../WinnersPhotos/Best_Cyber_Sec.JPG';
import bestTeamName from '../WinnersPhotos/Best_Team_Name.JPG';
import winner1 from '../WinnersPhotos/Winner_1.JPG';
import winner2 from '../WinnersPhotos/Winner_2.JPG';
import winner3 from  '../WinnersPhotos/Winner_3.JPG';
import winner4 from '../WinnersPhotos/Winner_4.JPG';
import winner5 from '../WinnersPhotos/Winner_5.JPG';


export const data = {
    "Best in Category": [
      {
        category: "Best UI/UX",
        place: 0,
        title: "Thought Garden",
        description: "Mindfulness journaling app visualizing emotions as gardens",
        team: "Hack Attack",
        members: ["Idenia Ayala", "Paulene Mendoza Morrison", "Areesha Imtiaz", "Jeannette Ruiz"],
        imagePath: bestUIUX
      },
      {
        category: "Best Web Dev",
        place: 0,
        title: "MediFind",
        description: "Medication management, price comparison, and safety app",
        team: "Irvine Computer Engineers",
        members: ["Manson Pham", "Joshua Estrada", "Jason Mar","Michael Castillo"],
        imagePath: bestWebDev
      },
            {
        category: "Best DS/AI",
        place: 0,
        title: "TA AI",
        description: "AI-powered teaching assistant that helps professors analyze student questions and generate study guides",
        team: "pho eaters minus 1",
        members: ["Sam Ly", "Jacob Lembach", "Son Nguyen"],
        imagePath: bestDSAI
      },
      {
        category: "Best Game Dev",
        place: 0,
        title: "Fitness Game",
        description: "Fitness game to help gamers exercise more and have fun at the same time",
        team: "bobbers",
        members: ["Carter Quan", "Evan Chavez", "Makar Dzerushau", "Corey Ashabranner"],
        imagePath: bestGameDev
      },
      {
        category: "Best Cyber Sec",
        place: 0,
        title: "QuishThis",
        description: "Protect yourself from malicious QR codes",
        team: "Edge Runners",
        members: ["Daniel Appel", "Jeff Lucena", "Dimpal Shah", "Alvaro Mora"],
        imagePath: bestCyberSec
      },
    ],
    "Winners": [
      {
        category: "Best Web Dev",
        place: 1,
        title: "MediFind",
        description: "Medication management, price comparison, and safety app",
        team: "Irvine Computer Engineers",
        members: ["Manson Pham", "Joshua Estrada", "Jason Mar","Michael Castillo"],
        imagePath: winner1
      },
      {
        category: "Best Cyber Sec",
        place: 2,
        title: "QuishThis",
        description: "Protect yourself from malicious QR codes",
        team: "Edge Runners",
        members: ["Daniel Appel", "Jeff Lucena", "Dimpal Shah", "Alvaro Mora"],
        imagePath: winner2
      },
      {
        category: "Best Team Name",
        place: 3,
        title: "Carbon Closet",
        description: "Interactive thrifting with donations, token rewards, and gacha-style mystery packs",
        team: "Lebroncos",
        members: ["Ethan Ngo", "Samuel Araya", "Thanh Dang","Uriah Foley"],
        imagePath: winner3
      },
      {
        place: 4,
        title:"Honey Hack",
        description: "N/A",
        team: "Honey Hack",
        members: ["Stephanie Pocci", "Alan Cortez"],
        imagePath: winner4
      },
      {
        category: "Best DS/AI",
        place: 5,
        title: "TA AI",
        description: "AI-powered teaching assistant that helps professors analyze student questions and generate study guides",
        team: "pho eaters minus 1",
        members: ["Sam Ly", "Jacob Lembach", "Son Nguyen"],
        imagePath: winner5
      }
    ]
  };

  export default data;