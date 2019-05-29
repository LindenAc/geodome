import PlantPOJO from "./PlantPOJO";

test("Test the constructor", () => {
    const newPlant = new PlantPOJO(1, 'Tomato', '05/14/2019', 5)
    expect(newPlant.id).toBe(1)
    expect(newPlant.type).toBe('Tomato')
    expect(newPlant.datePlanted).toBe('05/14/2019')
    expect(newPlant.height).toBe(5)
});