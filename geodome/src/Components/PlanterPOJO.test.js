import PlanterPOJO from "./PlanterPOJO";
import PlantPOJO from './PlantPOJO';

test("Test the constructor", () => {
    const newPlanter = new PlanterPOJO('05/12/2019', 2, 'Large')
    expect(newPlanter.date).toBe('05/12/2019');
    expect(newPlanter.grade).toBe(2);
    expect(newPlanter.size).toBe('Large');
    expect(newPlanter.tempArr.length).toBe(0);

    console.log('Test the addPlant method')
    newPlanter.addPlant('Tomato', '05/12/2019', 2)
    expect(newPlanter.tempArr.length).toBe(1);
    expect(newPlanter.tempArr[0].type).toBe('Tomato')
    expect(newPlanter.tempArr[0].id).toBe(0)

    console.log('Test the Total Number of Plants')
    newPlanter.addPlant('Sunflower', '05/19/2019', 1)
    newPlanter.addPlant('Kale', '05/22/2019', 4)
    newPlanter.totalPlants()
    expect(newPlanter.tempArr.length).toBe(3);
    console.log(newPlanter.tempArr)
    expect(newPlanter.plantTotal).toBe(3);

    console.log('Test the tallestPlant method')
    newPlanter.tallestPlant()
    expect(newPlanter.tallest.type).toBe('Kale')


});