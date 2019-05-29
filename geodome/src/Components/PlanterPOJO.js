import PlantPOJO from './PlantPOJO'

class PlanterPOJO {
    constructor(date, grade, size) {
        this.date = date;
        this.grade = grade;
        this.size = size;
        this.tempArr = [];
        this.counter = 0;
    }

    addPlant (type, datePlanted, height){
        let newPlant = new PlantPOJO(this.counter, type, datePlanted, height)
        this.tempArr.push(newPlant)
        this.counter = this.counter + 1
    }

    totalPlants() {
        this.plantTotal = 0;
        for (let i=0; i < this.tempArr.length; i++) {
            this.plantTotal = this.plantTotal + 1
        }
        return this.plantTotal
    }

    tallestPlant() {
        this.tallest = this.tempArr.reduce((a, b) => {
			if (a.height > b.height) {
				return a
			}
			return b
        },0);
		return this.tallest.type;
    }
        
    
}  
    
export default PlanterPOJO;