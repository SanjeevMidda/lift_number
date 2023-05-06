import './index.css';
import arrow from "./icons/arrow.svg"
import { useState } from 'react';

function App() {

  const [status, setStatus] = useState(true);

  function changeStatus(){
    setStatus(!status);
  }

  return (
    <div className="App">
      <div className="container">
        <div className={status? "letters" : "lettersOpacity"}>
          <h3>A</h3>
          <h3>B</h3>
          <h3>C</h3>
          <h3>D</h3>
          <h3>E</h3>
          <h3>F</h3>
          <h3>G</h3>
          <h3>H</h3>
        </div>

        <img src={arrow} alt="" onClick={changeStatus} className={status && "rotateArrow"}/>
      </div>
    </div>
  );
}

export default App;
