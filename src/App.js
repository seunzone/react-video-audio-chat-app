import React, { Component, Fragment } from 'react';
import { Link} from 'react-router-dom';

import './App.css';

class App extends Component {


  render() {
    return (
      <Fragment>
        <Link to='/caller'>
          Caller
        </Link>
        <br />
        <Link to='reciever'>
          Reciever
        </Link>
      </Fragment>
    );
  }
}

export default App;
