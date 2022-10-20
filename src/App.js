import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Board } from './components/board/board.component';
import { AddScore } from './components/add-score/add-score.component';
import { rycScores } from './constants/global';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';
import { baseURL, gameID } from './config';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      scores: [],
      loading: true,
    };
  }

  loadLeaderboard = async () => {
    this.setState({ loading: true });
    //const response = await fetch(`${baseURL}${gameID}/scores/`);

    //const response = [{"result":[{"user":"asdasd","score":99},{"user":"kim kardas","score":23},{"user":"Ye","score":24},{"score":100,"user":"Sam"},{"user":"Terry","score":99},{"user":"drizzy","score":6},{"score":13,"user":"ayam"},{"score":27,"user":"Tom"}]}]
    //const { result: scores } = await response.json();

    this.setState({
      scores: rycScores
        .map((score) => ({
          user: score.user,
          score: score.score,
          id: uuidv4(),
        }))
        .sort((score1, score2) => score2.score - score1.score),
      loading: false,
    });
  };


  componentDidMount() {
    this.loadLeaderboard();
  }

  //   render() {
  //     return (
  //       <div className="App">
  //         <Header title="Leaderboard" />
  //         <main>
  //           <div className="container container--flex">
  //             <Board
  //   title="scores"
  //   scores={this.state.scores}
  //   loading={this.state.loading}
  //   loadLeaderboard={this.loadLeaderboard}
  // />
  //           </div>

  //         </main>
  //       </div>
  //     );

  //   }
  // }


  render() {
    return (
      <Router>
        <div className="App">
		<Header title="Leaderboard" />
          <Routes>
            <Route path='*' element={<Header title="Leaderboard" />}/>
            <Route exact path='/leaderboard-react' element={<Board title="scores"
                scores={this.state.scores}
                loading={this.state.loading}
                loadLeaderboard={this.loadLeaderboard}
              />} />
            <Route exact path='/add' element={<AddScore loadLeaderboard={this.loadLeaderboard} />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;

