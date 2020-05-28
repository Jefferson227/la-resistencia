import React from "react";
import logo from "./logo.svg";
import "./App.css";

import firebase from "firebase";

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
console.log(database);

function getPlayers() {
  let element = <ul></ul>;
  var player = firebase.database().ref("matches/-M8JR_cNCE_t5ntrDc10/players");
  player.on("value", function (snapshot) {
    let players = snapshot.val();

    element = (
      <ul>
        {Object.keys(players).map((id, index) => (
          <li key={index}>players[id]</li>
        ))}
      </ul>
    );
    // console.log(snapshot.val());
  });

  return element;
}

function addNewMatch() {
  const matchId = firebase.database().ref("matches").push().key;
  const match = {
    totalPlayers: 0,
    currentMission: 1,
    playersInMission: 2,
  };

  let updates = {};
  updates[`/matches/${matchId}`] = match;

  firebase.database().ref().update(updates);
  console.log("match created successfully");
}

function addPlayerToMatch(name) {
  const playerId = firebase
    .database()
    .ref("matches/-M8JR_cNCE_t5ntrDc10/players")
    .push().key;
  const player = {
    name,
  };

  let updates = {};
  updates[`/matches/-M8JR_cNCE_t5ntrDc10/players/${playerId}`] = player;

  firebase.database().ref().update(updates);
  console.log("player added successfully");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button className="new-match" onClick={() => addNewMatch()}>
            Create a new match
          </button>
        </p>
        <p>
          <button
            className="new-match"
            onClick={() => addPlayerToMatch("megaman x")}
          >
            Add player to match
          </button>
        </p>
        <div>Players: {getPlayers()}</div>
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

export default App;
