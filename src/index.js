import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Caller from './Caller';
import Reciever from './Reciever';
import NotFound from './Notfound';
import './index.css';
import App from './App';

import { CometChat } from '@cometchat-pro/chat';
import config from './config';

// CometChat.init(config.appID)

// CometChat.init(config.appID).then(
//   () => {
//     console.log("Initialization completed successfully");
//     // You can now call login function.
//   },
//   error => {
//     console.log("Initialization failed with error:");
//     // Check the reason for error and take apppropriate action.
//   }
// );
// CometChat.login(config.agentUID, config.apiKey, config.authToken)

// CometChat.login(config.agentUID, config.apiKey).then(
//     user => {
//       console.log("Login Successful:", { user });
//       // User loged in successfully.
//     },
//     error => {
//       console.log("Login failed with exception:", { error });
//       // User login failed, check error and take appropriate action.
//     }
// );
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/caller" component={Caller} />
                <Route path="/reciever" component={Reciever} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
  )

ReactDOM.render(
    routing, 
document.getElementById('root'));

