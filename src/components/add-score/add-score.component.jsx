import React from 'react';

import './add-score.styles.css';
import { baseURL, gameID } from '../../config';

export class AddScore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      score: '',
      image: '',
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
      user: this.state.name.toUpperCase(),
      score: this.state.score,
      image: this.state.image
    };
    const index = this.props.scores.map(object => object.user).indexOf(dataToSend.user.toUpperCase());

    if(index >= 0 ){
      this.props.scores[index].score += dataToSend.score
    }
    else {
      this.props.scores.push(dataToSend)
    }

    localStorage.setItem('scores', JSON.stringify(this.props.scores))
    window.dispatchEvent(new Event('storage'))
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
