import React from 'react';

    const CardComp = (props) => ( 
        <div className="Carddesign" id={props.city.id}>
            <br></br> 
            <h5 style={{ margin: 0, textAlign: "left", color: "white"}}> {props.type} {props.city.name} </h5> 
            <h5 style={{ margin: 0, textAlign: "left", color: "white"}}> Latitude {props.city.latitude} </h5>
            <h5 style={{ margin: 0, textAlign: "left", color: "white"}}> Longitude {props.city.longitude} </h5>
            <h5 style={{ margin: 0, textAlign: "left", color: "white"}}> The population is: {props.city.population} </h5>
            <h5 style={{ margin: 0, textAlign: "left", color: "white"}}> This population resides in the: {props.hemi} </h5> 
            <input type = 'text' id = {'population' + props.city.id}/>
            <br></br> 
            <button id="moveIn" onClick={ props.moveIn }> Move In </button>
            <button id="moveOut" onClick={ props.moveOut }> Move Out </button>
            <button id="deleteButton" onClick={ props.delCity }> Delete City </button>
            <br></br>
        </div>
    )

export default CardComp;


