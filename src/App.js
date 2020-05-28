import React from 'react';
import FirebaseService from './services/firebaseServices';
import firebaseDatabase from './utils/firebaseUtils';
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

  addPlayerToMatch() {
    const name = document.getElementById('player-name').value;
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
      document.getElementById('player-list').innerHTML = '';
      this.setState({ players: [] });

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
          {/* <p>
            <button type="button" className="new-match" onClick={() => this.addNewMatch()}>
              Create a new match
            </button>
          </p> */}
          <div>
            <input type="text" id="player-name" placeholder="New player name"></input>
            <button type="button" onClick={() => this.addPlayerToMatch()}>
              Add new player
            </button>
          </div>
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
            <ul id="player-list">
              {this.state.players.map((player) => {
                return <li key={player.key}>{player.name}</li>;
              })}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
