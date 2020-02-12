import React from 'react';
import './App.css';
import PuzzleBox from './components/PuzzleBox';
import crystalRef from './firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    }
  }
  componentDidMount() {
    crystalRef.on('value', (snapshot) => {
      this.setState({ count: snapshot.val() });
    });
  }
  render() {
    return (
        <div>
          <header className="header">
            <h1>Worldstar</h1>
            <img className="logo" src="WorldStarGoldStarSmall.png" alt="Worldstar Gold Star" />
    
            <div className="crystal-count">
              <h2>Crystal Count!</h2>
              <span>{this.state.count}</span>
            </div>

            <h1>Gold Star</h1>
          </header>
          <div className="container mt-4">
            <div className="row">
              <div className="col"></div>
              <div className="col-6">
                <form>
                  <div className="form-group pb-3">
                    <label htmlFor="yourName">Your Name</label>
                    <input type="text" className="form-control" id="yourName" placeholder="Enter your name" />
                  </div>
                  <div className="form-group pb-3">
                    <label htmlFor="theirName">Their Name</label>
                    <input type="text" className="form-control" id="theirName" placeholder="Enter their name" />
                  </div>
                  <div className="form-group pb-3">
                    <label htmlFor="reason">Why do they deserve a gold star?</label>
                    <textarea className="form-control" id="reason" rows="6"></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark float-right">SEND</button>
                </form>
              </div>
              <div className="col"></div>
            </div>

          </div>
          <PuzzleBox />
        </div>
    );
  }
}

export default App;
