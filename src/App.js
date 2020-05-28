import React from 'react';
import FirebaseService from './services/firebaseServices';
import firebaseDatabase from './utils/firebaseUtils';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.getPlayers();
  }

  addNewMatch() {
    const matchId = firebaseDatabase.ref('matches').push().key;
    const match = {
      totalPlayers: 0,
      currentMission: 1,
      playersInMission: 2,
    };

    const updates = {};
    updates[`/matches/${matchId}`] = match;

    firebaseDatabase.ref().update(updates);
    console.log('match created successfully');
  }

  addPlayerToMatch(name) {
    const playerId = firebaseDatabase.ref('matches/-M8JR_cNCE_t5ntrDc10/players').push().key;
    const player = {
      name,
    };

    const updates = {};
    updates[`/matches/-M8JR_cNCE_t5ntrDc10/players/${playerId}`] = player;

    firebaseDatabase.ref().update(updates);
    console.log('player added successfully');
  }

  getPlayers() {
    let players = [];

    FirebaseService.getDataList('matches/-M8JR_cNCE_t5ntrDc10/players', (items) => {
      items.forEach((item) => {
        players.push(item);
      });

      this.setState({ players: players });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button type="button" className="new-match" onClick={() => this.addNewMatch()}>
              Create a new match
            </button>
          </p>
          <p>
            <button
              type="button"
              className="new-match"
              onClick={() => this.addPlayerToMatch('megaman x')}
            >
              Add player to match
            </button>
          </p>
          <div>
            Players:
            <ul>
              {this.state.players.map((player) => {
                return <li key={player.key}>{player.name}</li>;
              })}
            </ul>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
