import React, { Component } from 'react';
import geodome from './GeodomeLogo.png';
import CommunityClassComp from './Components/CommunityClassComp';
import './App.css';

class LogoComponent extends Component {   
    constructor() {
        super()
        this.state = { 
            showCityCommunity: false,
         };
        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        this.setState({ showCityCommunity: !this.state.showCityCommunity });
    } 

    render () {
        return (
            <div>
                <div className="App">
                    <img src = { geodome } className="App-otherlogos" alt="" onClick={this.clicked} /> 
                </div>

                { this.state.showCityCommunity ? <CommunityClassComp /> :null }

            </div>
        )    
    }
}

export default LogoComponent;