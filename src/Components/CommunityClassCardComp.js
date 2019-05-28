import React from 'react';

    const CardComp = (props) => ( 
        <div className="Carddesign" id={props.city.id}>
            <br></br> 
            <h5> {props.type} {props.city.name} </h5> 
            <h5> Latitude {props.city.latitude} </h5>
            <h5> Longitude {props.city.longitude} </h5>
            <h5> The population is: {props.city.population} </h5>
            <h5> This population resides in the: {props.hemi} </h5> 
            <input type = 'text' id = {'population' + props.city.id}/>
            <br></br> 
            <button id="moveIn" onClick={ props.moveIn }> Move In </button>
            <button id="moveOut" onClick={ props.moveOut }> Move Out </button>
            <button id="deleteButton" onClick={ props.delCity }> Delete City </button>
            <br></br>
        </div>
    )

export default CardComp;


