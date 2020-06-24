import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
      <Container fixed>
        <h3>Select your match</h3>

        <div className="Matches-list">
          {this.state.matches.map(({ key }) => {
            return (
              <div>
                <Link to="/match" key={key}>
                  {key}
                </Link>

                {/* <Button variant="contained" key={key}>
                    {key}
                  </Button> */}
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default Matches;
