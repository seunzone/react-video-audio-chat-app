import React, { Component, Fragment } from "react";
import { CometChat } from "@cometchat-pro/chat";

import "./App.css";

class Caller extends Component {

  startCall = () => {
    const receiverID = "SUPERHERO1";
    const callType = CometChat.CALL_TYPE.VIDEO;
    const receiverType = CometChat.RECEIVER_TYPE.USER;
    const call = new CometChat.Call(receiverID, callType, receiverType);

    CometChat.initiateCall(call).then(outGoingCall => {
        console.log("Call initiated successfully:", outGoingCall);
        // perform action on success. Like show your calling screen.
      }).catch(error => {
        console.log("Call initialization failed with exception:", error);
      });
  }

  render() {
    return (
      <Fragment>
        <button className="btn btn-primary" onClick={this.startCall}>
          Start Video Call
        </button>
      </Fragment>
    );
  }
}

export default Caller;
