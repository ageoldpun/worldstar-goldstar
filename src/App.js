import React from 'react';
import axios from 'axios';
import './App.css';

const webhookUrl = 'https://discordapp.com/api/webhooks/671553005916651521/W4Kptc-oY51qCbf-xqVJ9bk7hkfJlG33-5KXv4pGvk-5tt31M6usjwlvNNWNIAPzTTfY';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sender: '',
      receiver: '',
      reason: '',
    }
  };

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
      content: `${this.state.sender} just awarded ${this.state.receiver} a gold star for ${this.state.reason}`,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
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
                  <label htmlFor="yourName">Your Name</label>
                  <input type="text" className="form-control" id="yourName" value={this.state.sender} onChange={ (e) => this.handleSenderChange(e) } placeholder="Enter your name" />
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="theirName">Their Name</label>
                  <input type="text" className="form-control" id="theirName" value={this.state.receiver} onChange={ (e) => this.handleReceiverChange(e) } placeholder="Enter their name" />
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="reason">Why do they deserve a gold star?</label>
                  <textarea className="form-control" id="reason" rows="6" value={this.state.reason} onChange={ (e) => this.handleReasonChange(e) }></textarea>
                </div>
                <button type="submit" onClick={(e) => this.postToDiscord(e)} className="btn btn-dark float-right">SEND</button>
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
