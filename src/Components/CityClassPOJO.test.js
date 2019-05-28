import CityClassPOJO from "./CityClassPOJO";

test("Test the constructor", () => {
    const tempCity = new CityClassPOJO("Calgary", 50, 100, 2500, 0)
    expect(tempCity.name).toBe("Calgary");
    expect(tempCity.latitude).toBe(50);
    expect(tempCity.longitude).toBe(100);
    expect(tempCity.population).toBe(2500);
    expect(tempCity.id).toBe(0);
});

test("Test the show() method", () => {
    const tempCity = new CityClassPOJO("Calgary", 50, 100, 2500, 0)
    const tempString = tempCity.show();
    expect(tempString).toBe("Calgary 50 100 2500 0");
});

test("Test the movedIn() method", () => {
    const tempCity = new CityClassPOJO("Calgary", 50, 100, 2500)
    tempCity.movedIn(1000);
    expect(tempCity.population).toBe(3500);
});

test("Test the movedOut() method", () => {
    const tempCity = new CityClassPOJO("Calgary", 50, 100, 2500)
    tempCity.movedOut(1000);
    expect(tempCity.population).toBe(1500);
});

test("Test the howBig() method", () => {
    const tempCity = new CityClassPOJO("Calgary", 50, 100, 15000)
    const pop = tempCity.population
    expect(tempCity.howBig(pop)).toBe("This is the Town of: ");

    const tempCity1 = new CityClassPOJO("Calgary", 50, 100, 1000000)
    const pop1 = tempCity1.population;
    expect(tempCity1.howBig(pop1)).toEqual("This is the City of: ");

    const tempCity2 = new CityClassPOJO("Calgary", 50, 100, 100000)
    const pop2 = tempCity2.population;
     expect(tempCity2.howBig(pop2)).toBe("This is a Large Town called: ");

    const tempCity3 = new CityClassPOJO("Calgary", 50, 100, 999)
    const pop3 = tempCity3.population;
    expect(tempCity3.howBig(pop3)).toBe("This is the Village of: ");

    const tempCity4 = new CityClassPOJO("Calgary", 50, 100, 99)
    const pop4 = tempCity4.population;
    expect(tempCity4.howBig(pop4)).toBe("This is the Hamlet of: ");
});




