import CityClassPOJO from "./CityClassPOJO";

class CommunityClassPOJO{
    constructor() {
        this.commArray = [];
        this.counter = 0;
    }

    getMostNorthern () {
        const temp = this.commArray.reduce((a, b) => {
            if (a.latitude > b.latitude) { 
                return a;
            } else {
                return b;
            }
        });
        return temp.name;  
    }

    getMostSouthern () {
        const temp = this.commArray.reduce((a, b) => {
            if (a.latitude < b.latitude) { 
                return a;
            } else {
                return b;
            }
        });
        return temp.name;  
    }

    getPopulationForAll () {
        let tempTotal = 0;
        for (let i=0; i< this.commArray.length; i++) {
            tempTotal += this.commArray[i].population;
        }
        return Number(tempTotal);
    }

    createCity (name, latitude, longitude, population) {
        let id = this.counter;
        const tempArray = new CityClassPOJO(name, latitude, longitude, population, id)
        this.commArray.push(tempArray);
        this.counter++;
    }

    deleteCity (id) {
        const tempArray = this.commArray.filter(item => item.id !== Number(id));
        this.commArray = tempArray;
    }

}

export default CommunityClassPOJO