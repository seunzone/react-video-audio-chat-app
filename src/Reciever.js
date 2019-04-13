import React, { Component } from 'react'
import { CometChat } from '@cometchat-pro/chat';

export default class componentName extends Component {
    recieveCall(){
        const listnerID = "SUPERHERO1";
        CometChat.addCallListener(
            listnerID,
            new CometChat.CallListener({
             onIncomingCallReceived(call) {
              // Handle incoming call
              console.log("Incoming call:", JSON.stringify(call));
             },
            })
           );
    }
    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.recieveCall}>
                    Recieve Call
                </button> <br/>
                <button className="btn btn-danger" >
                    Cancel call
                </button>
            </div>
        )
    }
}
