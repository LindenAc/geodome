import React from 'react';

const PlantComp = (props) => ( 
    <div className="Carddesign">
        <br></br> 
        <p> Type: {props.type} </p>
        <p> Date Planted: {props.date} </p>
        <p> Plant Size: {props.height} cm</p>
        <br></br>
    </div>
)

export default PlantComp;


