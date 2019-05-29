import React, { Component } from 'react';
import GeodomeLogo from './GeodomeLogo.svg';
import MainPageComp from './MainPageComp';

class LogoComponent extends Component {   
    constructor() {
        super()
        this.state = { 
            showgeoDome: false,
         };
    }

    clicked = () => {
        this.setState({ showgeoDome: !this.state.showgeoDome });
    } 

    render () {
        return (
            <div>
                <div className="App">
                    <img src={GeodomeLogo} className="App-otherlogos" alt="" onClick={this.clicked} /> 
                </div>

                { this.state.showgeoDome ? <MainPageComp /> :null }

            </div>
        )    
    }
}

export default LogoComponent;