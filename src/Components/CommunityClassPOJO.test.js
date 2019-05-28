import CityClassPOJO from "./CityClassPOJO";
import CommunityClassPOJO from "./CommunityClassPOJO";

test("Test the community constructor & pushing into the array", () => {
    const tempArray = new CommunityClassPOJO();
    expect(tempArray.commArray.length).toBe(0);
    expect(tempArray.counter).toBe(0);
});

test("Test the getMostNorthern() method", () => {
    const tempCity1 = new CityClassPOJO("Calgary", 50, 100, 2500);
    const tempCity2 = new CityClassPOJO("RedDeer", 40, 90, 9700);
    const tempCity3 = new CityClassPOJO("Equator", 0, 0, 5000);
    const tempCity4 = new CityClassPOJO("SanPaulo", -90, 90, 9700);
    
    const tempArray = new CommunityClassPOJO(); 
    tempArray.commArray.push(tempCity1);
    tempArray.commArray.push(tempCity2);
    tempArray.commArray.push(tempCity3);
    tempArray.commArray.push(tempCity4);
 
    const northernCity = tempArray.getMostNorthern();
    expect(northernCity).toBe("Calgary");
});

test("Test the getMostSouthern() method", () => {
    const tempCity1 = new CityClassPOJO("Calgary", 50, 100, 2500);
    const tempCity2 = new CityClassPOJO("RedDeer", 40, 90, 9700);
    const tempCity3 = new CityClassPOJO("Equator", 0, 0, 5000);
    const tempCity4 = new CityClassPOJO("SanPaulo", -90, 90, 9700);
    
    const tempArray = new CommunityClassPOJO(); 
    tempArray.commArray.push(tempCity1);
    tempArray.commArray.push(tempCity2);
    tempArray.commArray.push(tempCity3);
    tempArray.commArray.push(tempCity4);
 
    const southernCity = tempArray.getMostSouthern();
    expect(southernCity).toBe("SanPaulo");
});

test("Test the getPopulationForAll() method", () => {
    const tempCity1 = new CityClassPOJO("Calgary", 50, 100, 10);
    const tempCity2 = new CityClassPOJO("RedDeer", 40, 90, 20);
    const tempCity3 = new CityClassPOJO("Equator", 0, 0, 30);
    const tempCity4 = new CityClassPOJO("SanPaulo", -90, 90, 40);
    
    const tempArray = new CommunityClassPOJO(); 
    tempArray.commArray.push(tempCity1);
    tempArray.commArray.push(tempCity2);
    tempArray.commArray.push(tempCity3);
    tempArray.commArray.push(tempCity4);
 
    const totalPop = tempArray.getPopulationForAll();
    expect(totalPop).toBe(100);
});

test("Test the createCity() method", () => {
    const tempCity = new CommunityClassPOJO();
    tempCity.createCity("Fernie", 35, 80, 5000); 
    expect(tempCity.commArray.length).toBe(1);
});

test("Test the deleteCity() method", () => {
    const tempCity = new CommunityClassPOJO();
    tempCity.createCity("Fernie", 35, 80, 5000, 0);
    tempCity.createCity("Cranbrook", 25, 56, 7200, 1);
    tempCity.deleteCity(0)
    expect(tempCity.commArray.length).toBe(1);
});

test ('Test for 140E --> Object Reference', () => {
    const myCity = new CommunityClassPOJO();
    myCity.createCity("SomewhereCity", 45, 80, 60000, 0);
    let myFav = myCity;
    // console.log("This is myCity:", myCity);
    // console.log("This is myFav:", myFav);
})