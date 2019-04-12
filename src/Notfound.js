import React, { Component } from 'react'
import { Link} from 'react-router-dom';


export default class 
 extends Component {
    render() {
        return (
            <div>
                Page Not Found, <br/>
            <Link to='/'>
                Go Home
            </Link>
            </div>
        )
    }
}
