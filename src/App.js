import Header from "./components/Header";
import PlayerList from "./components/PlayerList";
import SearchList from "./components/SearchList";
import BlackBox from "./components/BlackBox";
import { useState } from "react";

function App() {
  const [playersArray, setPlayersArray] = useState([]);

  const updatePlayersArray = (newArray) => {
    setPlayersArray(newArray);
  };
  return (
    <div>
      <Header />
      <SearchList />
      <PlayerList
        playersArray={playersArray}
        updatePlayersArray={updatePlayersArray}
      />
      <BlackBox responseData={playersArray} />
    </div>
  );
}

export default App;
