import React, { Component } from 'react';
import PlantComp from './PlantComp';
import PlanterPOJO from './PlanterPOJO';

class MainPageComp extends Component {
  constructor() {
    super()
      this.state = {
            totalAllPlants: '',
            tallestPlant: ''
      };
      this.newPlanter = new PlanterPOJO()
  }   
    
  addPlantToBed(e) {
    let tempType = (document.getElementById("startDate").value);
    let tempDate = (document.getElementById("grade").value);
    let tempHeight = Number(document.getElementById("size").value);

    this.newPlanter.addPlant(tempType, tempDate, tempHeight);

    let updatePlantTotal = this.newPlanter.totalPlants();
    this.setState( { totalAllPlants: updatePlantTotal } );

    let updateTallest = this.newPlanter.tallestPlant();
    this.setState( { tallestPlant: updateTallest } );
  }

  render() {
    const PlantList = this.newPlanter.tempArr.map((item) => {
      return(
          <PlantComp key={item.id} type={item.type} date={item.datePlanted} height={item.height}/>
        )
    });
  
      return(
          <div>
            <div className="App">

              <div className = "minmax">
                <h6> The total number of plants in the Planter: { this.state.totalAllPlants } </h6> 
                <h6> The tallest plant in the Planter: { this.state.tallestPlant } </h6>  
              </div>

              <h2> ~ Geodesic Dome Planter Tracking ~ </h2>
              <h3> ~ Add your plants to the Planter ~ </h3>

              <input type = 'text' id = 'startDate' placeholder = 'Enter the Plant Type'/>
              <input type = 'text' id = 'grade' placeholder = 'Enter Date Planted'/>
              <input type = 'text' id = 'size' placeholder = 'Enter Plant Height'/>

              <button name = 'newGardenBed' onClick = {() => {this.addPlantToBed()}} > Add Plant to Existing Bed </button>
          
            </div>

            <div className = "Card">
                { PlantList }
            </div>

          </div>
      )
    }
}

export default MainPageComp;