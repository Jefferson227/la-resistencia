import React from 'react';
import FirebaseService from './services/firebaseServices';
import firebaseDatabase from './utils/firebaseUtils';
import './App.css';

class App extends React.Component {
  static addNewPlayer() {
    const name = document.getElementById('player-name').value;
    const playerId = firebaseDatabase.ref('players').push().key;
    const player = {
      name,
    };

    const updates = {};
    updates[`/players/${playerId}`] = player;

    firebaseDatabase.ref().update(updates);
  }

  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers() {
    FirebaseService.getDataList('players', (players) => {
      this.setState({ players });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <input type="text" id="player-name" placeholder="New player name" />
            <button type="button" onClick={() => App.addNewPlayer()}>
              Add new player
            </button>
          </div>
          <div>
            Players:
            <ul id="player-list">
              {
                // eslint-disable-next-line react/destructuring-assignment
                this.state.players.map(({ key, name }) => {
                  return <li key={key}>{name}</li>;
                })
              }
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
