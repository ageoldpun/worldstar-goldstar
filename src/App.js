import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Worldstar</h1>
        <img className="logo" src="WorldStarGoldStarSmall.png" alt="Worldstar Gold Star" />
        <h1>Gold Star</h1>
      </header>
      <div className="container mt-4">
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <form>
              <div className="form-group pb-3">
                <label for="yourName">Your Name</label>
                <input type="text" className="form-control" id="yourName" placeholder="Enter your name" />
              </div>
              <div className="form-group pb-3">
                <label for="theirName">Their Name</label>
                <input type="text" className="form-control" id="theirName" placeholder="Enter their name" />
              </div>
              <div class="form-group pb-3">
                <label for="reason">Why do they deserve a gold star?</label>
                <textarea class="form-control" id="reason" rows="6"></textarea>
              </div>
              <button type="submit" className="btn btn-dark float-right">SEND</button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
