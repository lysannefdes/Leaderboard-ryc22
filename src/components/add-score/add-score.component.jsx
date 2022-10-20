import React from 'react';

import './add-score.styles.css';
import { rycScores } from '../../constants/global';
import { baseURL, gameID } from '../../config';

export class AddScore extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      score: '',
      displaySuccess: false,
      displayError: false,
    };
  }

  displayError = () => {
    this.setState({ name: '', score: '', displayError: true });
    setTimeout(() => this.setState({ displayError: false }), 3000);
  };

  displaySuccess = () => {
    this.setState({ name: '', score: '', displaySuccess: true });
    setTimeout(() => this.setState({ displaySuccess: false }), 3000);
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleScoreChange = (e) => {
    this.setState({ score: Number(e.target.value) });
  };

  sendPOSTRequest = (dataToSend) => {
    return fetch(`${baseURL}${gameID}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });
  };



  handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      user: this.state.name,
      score: this.state.score,
    };
    
    console.log(this.state.name)
    const index = rycScores.map(object => object.user).indexOf(dataToSend.user);
    console.log(index)
    if(index >= 0 ){
      rycScores[index].score += dataToSend.score
    }
    else {
      rycScores.push(dataToSend)
    }

    localStorage.setItem('scores', JSON.stringify(rycScores))
    this.displaySuccess();
    this.props.loadLeaderboard();
  };

  render() {
    return (
      <section className="add-score">
        <form
          action="/"
          className="add-score__form"
          onSubmit={this.handleSubmit}
        >
          <input
            value={this.state.name}
            type="text"
            name="name"
            className="add-score__name"
            placeholder="Your Name"
            autoComplete="off"
            maxLength="100"
            required
            onChange={this.handleNameChange}
          />
          <input
            value={this.state.score}
            type="number"
            name="score"
            className="add-score__score"
            placeholder="Your Score"
            autoComplete="off"
            min="0"
            max="100"
            required
            onChange={this.handleScoreChange}
          />
          <button type="submit" className="btn btn-main add-score__btn">
            Submit
          </button>
        </form>

        <p
          className={`add-score__message ${
            !this.state.displaySuccess ? 'opacity-0' : ''
          }`}
          id="add-score-message"
        >
          New score has been added successfully!
        </p>
        <p
          className={`add-score__message--error ${
            !this.state.displayError ? 'opacity-0' : ''
          } `}
          id="error-message"
        >
          Score has to be above 0❗️
        </p>
      </section>
    );
  }
}
