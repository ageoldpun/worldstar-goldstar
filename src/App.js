import React from 'react';
import axios from 'axios';
import './App.css';
import PuzzleBox from './components/PuzzleBox';
import crystalRef from './firebase';

// Prod URL
const webhookUrl = 'https://discordapp.com/api/webhooks/671572316907503626/Dm98FpyC1AEqRzvskmE4hzmYnNIjJ4OGOEMQXerP_nuKd1MH59vECTnXyD-S2rfsPF84';

// Test URL
// const webhookUrl = 'https://discordapp.com/api/webhooks/676662348144050186/Lvt-NZUTHiZL3dO7iRwY0hhX_tSOKKzbfT6Di9uPfM18wCMuk_XvI7XdWg9Ri7NtBueN';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crystalCount: '0',
      barCount: '0',
      elementiumCount: '0',
      sender: '',
      receiver: '',
      reason: '',
    }
  }

  componentDidMount() {
    crystalRef.ref('crystals').on('value', (snapshot) => {
      this.setState({ crystalCount: snapshot.val() });
    });
    crystalRef.ref('bars').on('value', (snapshot) => {
      this.setState({ barCount: snapshot.val() });
    });
    crystalRef.ref('elementium').on('value', (snapshot) => {
      this.setState({ elementiumCount: snapshot.val() });
    });
  }

  handleSenderChange(e) {
    this.setState({
      sender: e.target.value
    });
  }

  handleReceiverChange(e) {
    this.setState({
      receiver: e.target.value
    });
  }

  handleReasonChange(e) {
    this.setState({
      reason: e.target.value
    });
  }

  postToDiscord = (e) => {
    e.preventDefault();
    axios.post(webhookUrl, {
      username: 'Worldstar Gold Star',
      avatar_url: 'https://i.imgur.com/Q1PMjDb.png',
      content: `${this.state.sender} just awarded ${this.state.receiver} a gold star; ${this.state.reason}`,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      sender: '',
      receiver: '',
      reason: '',
    });
  };

  render() {
    const {crystalCount,
      barCount,
      elementiumCount} = this.state;
    return (
        <div className="wrapper">
          <header className="header">
            <h1>Worldstar</h1>
            <img className="logo" src="WorldStarGoldStarSmall.png" alt="Worldstar Gold Star" />
    
            <div className="crystal-count">
              <h2 className="bar-title">Crystal Count!</h2>
              <div className="bar">
                <span style={{ width: `${parseInt(crystalCount, 10)}%`}}></span>
              </div>
              <p className="count">{crystalCount}/100</p>
              
              <h2 className="bar-title">Bar Count!</h2>
              <div className="bar">
                <span style={{ width: `${parseInt(barCount, 10)}%`}}></span>
              </div>
              <p className="count">{barCount}/100</p>

              <h2 className="bar-title">Elementium Count!</h2>
              <div className="bar">
                <span style={{ width: `${parseInt(elementiumCount, 10) * 10}%`}}></span>
              </div>
              <p className="count">{elementiumCount}/10</p>
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
                    <input type="text" className="form-control" id="yourName" value={this.state.sender} onChange={ (e) => this.handleSenderChange(e) } placeholder="Enter your name" />
                  </div>
                  <div className="form-group pb-3">
                    <label htmlFor="theirName">Their Name</label>
                    <input type="text" className="form-control" id="theirName" value={this.state.receiver} onChange={ (e) => this.handleReceiverChange(e) } placeholder="Enter their name" />
                  </div>
                  <div className="form-group pb-3">
                    <label htmlFor="reason">Why do they deserve a gold star?</label>
                    <textarea className="form-control" id="reason" value={this.state.reason} onChange={ (e) => this.handleReasonChange(e) } rows="6"></textarea>
                  </div>
                  <button type="submit" onClick={(e) => this.postToDiscord(e)} className="btn btn-dark float-right">SEND</button>
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
