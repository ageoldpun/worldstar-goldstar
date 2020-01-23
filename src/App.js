import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>WORLDSTAR GOLDSTAR</h1>
        <img src="WorldStarGoldStarSmall.png" alt="WORLDSTAR GOLDSTAR" />
      </header>
      <form>
        <div>
          <input type="text" id="yourName" />
          <label for="yourName">Your Name</label>
        </div>
        <div>
          <input type="text" id="theirName" />
          <label for="theirName">Who you want to give a gold star</label>
        </div>
        <div>
          <textarea id="whatTheyDid" rows="3"></textarea>
          <label for="whatTheyDid">Why?</label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
