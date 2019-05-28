import React, { Component } from 'react';
import CommunityClassPOJO from "./CommunityClassPOJO";
import CommunityClassCardComp from './CommunityClassCardComp';

class Community extends Component {
    constructor(props) {
      super(props)
        this.state = {
          totalAllPop: 0,
          mostNorthern: '',
          mostSouthern: '',            
        };
        
      this.controller = new CommunityClassPOJO();

    }   //Create New Garden Bed
      addNewGardenBed(e) {
        const tempStartDate = (document.getElementById("startDate").value);
        const tempGrade = Number(document.getElementById("grade").value);
        const tempSize = Number(document.getElementById("size").value);

        this.controller.createCity(tempStartDate, tempGrade, tempSize);

        let updateTotalPop = this.controller.getPopulationForAll();
        this.setState( { totalAllPop: updateTotalPop } );

        let updateNorthern = this.controller.getMostNorthern();
        this.setState( { mostNorthern: updateNorthern } );

        let updateSouthern = this.controller.getMostSouthern();
        this.setState( { mostSouthern: updateSouthern } );
      }

      getSingleAccount = (id) => {
        console.log("In the single account", this.controller.commArray)
        return this.controller.commArray.find(item => item.id === Number(id));
      }

      updateVisual = () => {
        if (this.controller.commArray.length === 0) {
          console.log("In the array is 0")
          this.setState({ totalAllPop: 0, mostNorthern: '', mostSouthern: ''});
        } else { 
          console.log("In the else statement")
        let tempPop = this.controller.getPopulationForAll();
        let tempNorthern = this.controller.getMostNorthern();
        let tempSouthern = this.controller.getMostSouthern();
        this.setState({mostNorthern: tempNorthern, mostSouthern: tempSouthern, totalAllPop: tempPop});
        }
      }
     
      deleteCity = (event) => {
        if (this.controller.commArray.length === 0) {
          return 0;
        } else { 
          const targetId = event.target.parentElement.id;
          this.controller.deleteCity(targetId);
          this.updateVisual();
        }  
      }
       
      moveIn = (event) => { 
        const targetId = event.target.parentElement.id;
        const tempInputValue = Number(document.getElementById('population' + targetId).value);
        const findSingleAccount = this.getSingleAccount(targetId);
        findSingleAccount.movedIn(tempInputValue);
        this.updateVisual();
      }
       
      moveOut = (event) => {
        const targetId = event.target.parentElement.id;
        const tempInputValue = Number(document.getElementById('population' + targetId).value);
        const findSingleAccount = this.getSingleAccount(targetId);
        findSingleAccount.movedOut(tempInputValue);
        this.updateVisual();
      }

      render() {
        const CardList = this.controller.commArray.map((item) => {
        return(
          <CommunityClassCardComp key={item.id} city={item} delCity={this.deleteCity} moveIn={this.moveIn} moveOut={this.moveOut} type={item.howBig()} hemi={item.whichSphere()}/>
        )
      });

      return(
        <div>

          <div className="App">

          <div className = "minmax">
            <h6> The total number of plants in the Geodome is: { this.state.totalAllPop } </h6> 
            <h6> The tallest plant in the Geodome belongs to Grade: { this.state.mostNorthern } </h6>  
          </div>

            <h2> ~ Geodesic Dome Tracking ~ </h2>
            <h3> ~ Add your garden to the Dome ~ </h3>

            <input type = 'text' id = 'startDate' placeholder = 'Enter the Date'/>
            <input type = 'text' id = 'grade' placeholder = 'What Grade Are you In?'/>
            <input type = 'text' id = 'size' placeholder = 'Choose Your Size of Garden Bed'/>

            <button name = 'newGardenBed' onClick = {() => {this.addNewGardenBed()}} > Add New Garden Bed </button>
          
          </div>

          <div className = "Card">
            { CardList }
          </div>

        </div>
      )
    }
}

export default Community;