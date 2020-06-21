import React from 'react';
import FirebaseService from '../../services/firebaseServices';
// import firebaseDatabase from '../../utils/firebaseUtils';
import './Matches.css';

class Matches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    this.listMatches();
  }

  listMatches() {
    FirebaseService.getDataList('matches', (matches) => {
      this.setState({ matches });
    });
  }

  render() {
    return (
      <section className="Matches">
        <h3>Select your match</h3>

        <div className="Matches-list">
          <div className="Match">
            {this.state.matches.map(({ key }) => {
              return (
                <a href="#" key={key}>
                  {key}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Matches;
