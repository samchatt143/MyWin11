import React, { useState } from "react";
import "./PlayerList.css";

export default function PlayerList({ playersArray, updatePlayersArray }) {
  const [showPlayerA, setShowPlayerA] = useState(false);
  const [selectedPlayerA, setSelectedPlayerA] = useState([]);
  const [showPlayerB, setShowPlayerB] = useState(false);
  const [selectedPlayerB, setSelectedPlayerB] = useState([]);

  const playerA = [
    "A Badoni",
    "A Bawne",
    "A Carey",
    "A Choudhary",
    "A Dananjaya",
    "A Deep",
    "A Dinda",
    "A Finch",
    "A Gautam",
    "A Hales",
    "A Hebbar",
    "A Joseph",
    "A Juyal",
    "A Khan",
    "A Manohar",
    "A Markram",
    "A Mathews",
    "A Milne",
    "A Mishra",
    "A Nath",
    "A Nehra",
    "A Nortje",
    "A Patel",
    "A Rahane",
    "A Rajpoot",
    "A Rashid",
    "A Rawat",
    "A Rayudu",
    "A Roy",
    "A Russell",
    "A Samad",
    "A Sharma",
    "A Singh",
    "A Soni",
    "A Taide",
    "A Tare",
    "A Tendulkar",
    "A Tomar",
    "A Turner",
    "A Tye",
    "A Villiers",
    "A Zampa",
    "B Cutting",
    "B Howell",
    "B Indrajith",
    "B Kumar",
    "B Laughlin",
    "B McCullum",
    "B Rajapaksa",
    "B Sharma",
    "B Singh",
    "B Sran",
    "B Stanlake",
    "B Stokes",
    "B Sudharsan",
    "B Thampi",
    "B Varma",
    "C Anderson",
    "C Brathwaite",
    "C Dala",
    "C Gayle",
    "C Grandhomme",
    "C Green",
    "C Ingram",
    "C Jordan",
    "C Karunaratne",
    "C Lynn",
    "C Milind",
    "C Morris",
    "C Munro",
    "C Sakariya",
    "C Varun",
    "C Woakes",
    "D Bravo",
    "D Brevis",
    "D Chahar",
    "D Chameera",
    "D Christian",
    "D Conway",
    "D Drakes",
    "D Hooda",
    "D Jurel",
    "D Karthik",
    "D Kulkarni",
    "D Malan",
    "D Miller",
    "D Mitchell",
    "D Nalkande",
    "D Padikkal",
    "D Pretorius",
    "D Sams",
    "D Shorey",
    "D Short",
    "D Smith",
    "D Steyn",
    "D Warner",
    "D Willey",
    "E Lewis",
    "E Morgan",
    "F Allen",
    "F Farooqi",
    "F Plessis",
    "G Gambhir",
    "G Garton",
    "G Mann",
    "G Maxwell",
    "G Phillips",
    "G Singh",
    "G Vihari",
    "G Viljoen",
    "H Amla",
    "H Brar",
    "H Dussen",
    "H Gurney",
    "H Klaasen",
    "H Nishaanth",
    "H Pandya",
    "H Patel",
    "H Rana",
    "H Shokeen",
    "H Singh",
    "I Abdulla",
    "I Jaggi",
    "I Kishan",
    "I Pathan",
    "I Porel",
    "I Sharma",
    "I Sodhi",
    "I Tahir",
    "I Udana",
    "J Archer",
    "J Bairstow",
    "J Behrendorff",
    "J Bumrah",
    "J Buttler",
    "J Denly",
    "J Duminy",
    "J Faulkner",
    "J Hazlewood",
    "J Holder",
    "J Neesham",
    "J Pattinson",
    "J Philippe",
    "J Richardson",
    "J Roy",
    "J Saxena",
    "J Scantlebury-Searles",
    "J Sharma",
    "J Suchith",
    "J Unadkat",
    "J Yadav",
    "K Ahmed",
    "K Asif",
    "K Bharat",
    "K Cariappa",
    "K Gowtham",
    "K Jadhav",
    "K Jamieson",
    "K Karthik",
    "K Kartikeya",
    "K Khejroliya",
    "K Mayers",
    "K Nagarkoti",
    "K Nair",
    "K Pandya",
    "K Paul",
    "K Pollard",
    "K Rabada",
    "K Rahul",
    "K Richardson",
    "K Sen",
    "K Sharma",
  ];

  const playerB = [
    "K Sharma",
    "K Tyagi",
    "K Williamson",
    "K Yadav",
    "L Ferguson",
    "L Livingstone",
    "L Meriwala",
    "L Ngidi",
    "L Plunkett",
    "L Simmons",
    "L Sisodia",
    "L Yadav",
    "M Agarwal",
    "M Ali",
    "M Ashwin",
    "M Choudhary",
    "M Dhoni",
    "M Gony",
    "M Guptill",
    "M Henriques",
    "M Henry",
    "M Jansen",
    "M Johnson",
    "M Khan",
    "M Krishna",
    "M Kumar",
    "M Lomror",
    "M Markande",
    "M Marsh",
    "M McClenaghan",
    "M Nabi",
    "M Pandey",
    "M Patel",
    "M Pathirana",
    "M Rahman",
    "M Samuels",
    "M Santner",
    "M Shami",
    "M Sharma",
    "M Singh",
    "M Siraj",
    "M Stoinis",
    "M Theekshana",
    "M Tiwary",
    "M Vijay",
    "M Vohra",
    "M Wade",
    "M Wood",
    "M Yadav",
    "N Ahmad",
    "N Coulter-Nile",
    "N Ellis",
    "N Jagadeesan",
    "N Naik",
    "N Ojha",
    "N Pooran",
    "N Rana",
    "N Saini",
    "N Singh",
    "O McCoy",
    "O Smith",
    "O Thomas",
    "P Barman",
    "P Chameera",
    "P Chawla",
    "P Chopra",
    "P Cummins",
    "P Dubey",
    "P Garg",
    "P Krishna",
    "P Kumar",
    "P Mankad",
    "P Negi",
    "P Patel",
    "P Rajapaksa",
    "P Sangwan",
    "P Shaw",
    "P Silva",
    "P Singh",
    "P Solanki",
    "Q Kock",
    "R Ashwin",
    "R Bawa",
    "R Bhatia",
    "R Bhui",
    "R Bishnoi",
    "R Buddhi",
    "R Chahar",
    "R Dar",
    "R Dhawan",
    "R Dussen",
    "R Gaikwad",
    "R Hangargekar",
    "R Jadeja",
    "R Khan",
    "R Kishore",
    "R Kumar",
    "R Meredith",
    "R Pant",
    "R Parag",
    "R Patel",
    "R Patidar",
    "R Powell",
    "R Salam",
    "R Samarth",
    "R Sharma",
    "R Shepherd",
    "R Singh",
    "R Tewatia",
    "R Tripathi",
    "R Uthappa",
    "R Yadav",
    "S Abbott",
    "S Agarwal",
    "S Ahmed",
    "S Aravind",
    "S Baby",
    "S Badree",
    "S Bharat",
    "S Billings",
    "S Binny",
    "S Cottrell",
    "S Curran",
    "S Dhawan",
    "S Dube",
    "S Dubey",
    "S Garhwal",
    "S Gill",
    "S Gopal",
    "S Goswami",
    "S Hasan",
    "S Hetmyer",
    "S Iyer",
    "S Jackson",
    "S Jakati",
    "S Kaul",
    "S Kaushik",
    "S Khan",
    "S Kuggeleijn",
    "S Lad",
    "S Lamichhane",
    "S Malinga",
    "S Marsh",
    "S Mavi",
    "S Midhun",
    "S Nadeem",
    "S Narine",
    "S Prabhudessai",
    "S Raina",
    "S Rutherford",
    "S Samson",
    "S Senapati",
    "S Sharma",
    "S Singh",
    "S Smith",
    "S Sudharsan",
    "S Thakur",
    "S Tiwary",
    "S Warrier",
    "S Watson",
    "S Yadav",
    "T Banton",
    "T Baroka",
    "T Boult",
    "T Curran",
    "T David",
    "T Deshpande",
    "T Head",
    "T Mills",
    "T Natarajan",
    "T Seifert",
    "T Shamsi",
    "T Southee",
    "T Stubbs",
    "T Varma",
    "U Malik",
    "U Yadav",
    "V Aaron",
    "V Arora",
    "V Chakravarthy",
    "V Iyer",
    "V Kohli",
    "V Ostwal",
    "V Shankar",
    "V Singh",
    "V Vinod",
    "W Chatterjee",
    "W Hasaranga",
    "W Saha",
    "W Sundar",
    "Y Chahal",
    "Y Dayal",
    "Y Dhull",
    "Y Jaiswal",
    "Y Pathan",
    "Y Raj",
    "Y Singh",
    "Z Khan",
  ];

  const [responseMessage, setResponseMessage] = useState("");
  const [responseData, setResponseData] = useState(null);

  const postData = async () => {
    try {
      const response = await fetch("https://mywin11.onrender.com/api/MyWin11", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedPlayerA, selectedPlayerB }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        console.log("Data received:", data);
        setResponseData(data); // Save the received data in state
        updatePlayersArray(data);
        setResponseMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseData(null); // Reset data in case of an error
      setResponseMessage("An error occurred"); // Display error message
    }
  };

  const handleButtonClick = () => {
    postData();
  };

  const togglePlayerList = () => {
    setShowPlayerA(!showPlayerA);
  };
  const togglePlayersList = () => {
    setShowPlayerB(!showPlayerB);
  };

  const handlePlayerSelect = (playerA) => {
    // Check if the player is already in the selectedPlayers array
    if (selectedPlayerA.includes(playerA)) {
      // If it is, remove it
      setSelectedPlayerA(selectedPlayerA.filter((p) => p !== playerA));
    } else {
      // If it isn't, add it
      setSelectedPlayerA([...selectedPlayerA, playerA]);
    }
  };
  const handlePlayersSelect = (playerA) => {
    // Check if the player is already in the selectedPlayers array
    if (selectedPlayerB.includes(playerA)) {
      // If it is, remove it
      setSelectedPlayerB(selectedPlayerB.filter((p) => p !== playerA));
    } else {
      // If it isn't, add it
      setSelectedPlayerB([...selectedPlayerB, playerA]);
    }
  };

  function isSubmitEnabled(selectedPlayerA) {
    console.log(selectedPlayerA);
    return selectedPlayerA.length === 11;
  }
  function isSubmitEnabledd(selectedPlayerB) {
    console.log(selectedPlayerB);
    return selectedPlayerB.length === 11;
  }

  function handleSubmit(selectedPlayerA, selectedPlayerB) {
    return selectedPlayerA.length === 11 && selectedPlayerB.length === 11;
  }

  const submitEnabled = isSubmitEnabled(selectedPlayerA);
  const submitEnabledd = isSubmitEnabledd(selectedPlayerB);
  const handlesubmitEnabled = handleSubmit(selectedPlayerA, selectedPlayerB);

  return (
    <div>
      <div className="boxanu">
        <button className="showPlayers" onClick={togglePlayerList}>
          {showPlayerA ? "Hide Players" : "Show Players"}
        </button>
        {showPlayerA && (
          <ul>
            {playerA.map((playerA, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handlePlayerSelect(playerA)}
                    checked={selectedPlayerA.includes(playerA)}
                  />
                  {playerA}
                </label>
              </li>
            ))}
          </ul>
        )}
        {selectedPlayerA.length > 0 && !responseData && (
          <div>
            <h2>Selected Players:</h2>
            <ul>
              {selectedPlayerA.map((playerA, index) => (
                <li key={index}>{playerA}</li>
              ))}
            </ul>
          </div>
        )}
        {/* {selectedPlayerA.length > 0 && responseData && (
          <div>
            <h2>YOUR DREAM TEAM:</h2>
            <ul>
              {responseData.map((playerA, index) => (
                <li key={index}>{playerA}</li>
              ))}
            </ul>
          </div>
        )} */}
        <button className="showPlayers" disabled={!submitEnabled}>11?</button>
      </div>

      <div className="boxsam">
        <button className="showPlayers" onClick={togglePlayersList}>
          {showPlayerB ? "Hide Players" : "Show Players"}
        </button>
        {showPlayerB && (
          <ul>
            {playerB.map((playerA, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handlePlayersSelect(playerA)}
                    checked={selectedPlayerB.includes(playerA)}
                  />
                  {playerA}
                </label>
              </li>
            ))}
          </ul>
        )}
        {selectedPlayerB.length > 0 && !responseData && (
          <div>
            <h2>Selected Players:</h2>
            <ul>
              {selectedPlayerB.map((playerA, index) => (
                <li key={index}>{playerA}</li>
              ))}
            </ul>
          </div>
        )}
        {/* {selectedPlayerB.length > 0 && responseData && (
          <div>
            <h2>YOUR DREAM TEAM:</h2>
            <ul>
              {responseData.map((playerA, index) => (
                <li key={index}>{playerA}</li>
              ))}
            </ul>
          </div>
        )} */}
        <button className="showPlayers" disabled={!submitEnabledd}>11?</button>
        <button
          className="final"
          disabled={!handlesubmitEnabled}
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
