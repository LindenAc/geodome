class CityClassPOJO {
    constructor(name, latitude, longitude, population, id) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.id = id;
    }

    show() {
        const cityString = `${this.name} ${this.latitude} ${this.longitude} ${this.population} ${this.id}`;
        return cityString;
    }
        
    movedIn(persons) {
        this.population = this.population + persons;
    }

    movedOut(persons) {
        this.population = this.population - persons;
    }

    whichSphere () {
        if (this.latitude > 0) {
            return 'Northern Hemisphere'
        }
        return 'Southern Hemisphere'
    }

    howBig() {
        let popSize = this.population;
        if (popSize > 100000) {
            return "This is the City of: ";
        } else if ( popSize >= 20000 && popSize <= 100000 ) {
            return "This is a Large Town called: ";
        } else if ( popSize >= 1000 && popSize < 20000 ) {
            return "This is the Town of: ";
        } else if ( popSize >= 100 && popSize < 1000 ) {
            return "This is the Village of: "
        } else if ( popSize >= 1 && popSize < 100 ) {
            return "This is the Hamlet of: ";
        } else {
            return "You are in a cemetary, that used to be called: "
        }    
    }
}  
    
export default CityClassPOJO;