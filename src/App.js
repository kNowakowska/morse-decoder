import "./App.css";
import CustomButton from "./components/Buttons";
import { useState } from "react";
import Code from "./components/Code";
import Text from "./components/Text";
import SpaceButton from "./components/SpaceButton";

function App() {
  const [durations, setDurations] = useState([]);
  const onBtnClick = (duration) => {
    setDurations((prevDurations) => [...prevDurations, duration]);
  };
  const handleAddSpace = () => {
    setDurations((prevDurations) => [...prevDurations, " "]);
  };
  return (
    <div className="App">
      <CustomButton onClick={onBtnClick} />
      <SpaceButton addSpace={handleAddSpace} />
      <Code durations={durations} />
      <Text durations={durations} />
    </div>
  );
}

export default App;
