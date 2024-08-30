// exos.test.js
const {
    daysRemainUntilNextChristmas, CompareInputValueWithRandomNumber,
    MultiplicationAndDivision, getLongestString,getMaxEvenNumber,
    DeleteDuplicatedCaracter, 
    sumCube,
    compareObjet,
    filterArray,
    extractValuesOfArray,
    deleteProperty,
    Cylinder,
    checkIfStringIsLowerCaseOrUpperCase,
    add,
    roundedEuler,
    findMax,
    displayProductWitchTemplateLitteral,
    uniqueArray,
    calculateArea,
    average,
    getReverseStrings,
    booksWithMoreThan300Pages,
    fetchData,
    displayTime
} = require('./exos.js');

describe('print days until next Christmas', () =>{
    test('should return days until next Christmas', () => {
        jest.useFakeTimers().setSystemTime(new Date('2024-08-28'))
        // Test de la date pour Noël 2024
        //mocker la date pour qu'elle soit figer
        expect(daysRemainUntilNextChristmas('12/25/24')).toBe(-119);
    });
})


describe("compare imput value with random number", () => {
    test('should returns "Good Work" when the guess matches the random number', ()=>{
        jest.spyOn(Math, 'random').mockReturnValue(0.5);
        const result = CompareInputValueWithRandomNumber(6);
        expect(result).toBe("Good Work");

        Math.random.mockRestore();
    })

    test('returns "Good Work" when the guess matches the random number', ()=>{
        jest.spyOn(Math, 'random').mockReturnValue(0.5);
        const result = CompareInputValueWithRandomNumber(5);
        expect(result).toBe("Not match");

        Math.random.mockRestore();
    })
})
//add describe here also
describe("Multiplication And Division of 2 numbers input by user", () =>{
    test('should return two number', () => {
        expect(MultiplicationAndDivision(4, 2)).toEqual({"mult": 8, "div": 2})
    });
})


describe('print the Longest String from array of strings input by user', () =>{
    test('should return the Longest String', () => {
        expect(getLongestString(["jojojo", "heyy", "welcome"])).toBe("welcome")
    });
})


describe('print des Max of array of numbers input by user', () =>{
    test('should return a number', () => {
        expect(getMaxEvenNumber([1, 4, 67, 90, 0, 2])).toBe(90);
    })
})


describe('Delete Duplicated Caracter from string input by user', ()=>{
    test('should return the string without duplicate caracter', ()=>{
        expect(DeleteDuplicatedCaracter('jjo')).toBe('jo');
    })
})





describe('sum of cubes of all integer from 1 to a given integer', ()=>{
    test('should return number', () => {
        expect(sumCube(4)).toBe(100);
    })
    
})


describe('compare two object', () =>{
    test('should return true', () => {
        const obj1 ={
            name : 'jojo',
            sexe: 'f'
        }
        
        const obj2 ={
            name : 'jojo',
            sexe: 'f'
        }
        expect(compareObjet(obj2, obj1)).toBeTruthy()
    })

    test('should return false', () => {
        const obj1 ={
            name : 'jojo',
            sexe: 'm'
        }
        
        const obj2 ={
            name : 'jojo',
            sexe: 'f'
        }
        expect(compareObjet(obj2, obj1)).toBeFalsy()
    })
})

describe('filter out the specified values from a specified array', () =>{
    test('should Return the original array without the filtered values', () => {
        expect(filterArray([1, 2, 4, 5], [2])).toEqual([1, 4, 5])
    })
})


describe(' extract out the values at the specified indexes from a specified array', () =>{
    test('should return array of extract values', () => {
        expect(extractValuesOfArray([1, 3, 5, 8, 0, 4], [0, 5])).toEqual([1, 4])
    })
})


describe('delete the rollno property from the following object', () =>{
    test('should return the object before or after deleting the property', () =>{
        const obj = {name: 'jojo', rollno: 19, sexe: 'f'}
        expect(deleteProperty(obj)).toEqual({
            origin: {name: 'jojo', rollno: 19, sexe: 'f'}, 
            newOb:  {name: 'jojo', sexe: 'f'}})
    })
})

describe('calculate volume of a Cylinder with four decimal places', () =>{
    test('should return a float number', () =>{
        const circle = new Cylinder(2, 3);
        expect(circle.volume()).toEqual(37.69911)
    })
})


describe('check if a string is lower case or not', () =>{
    test('should return lowercase', () => {
        expect(checkIfStringIsLowerCaseOrUpperCase('Jo')).toBe('lowercase')
    })
})


describe('check if a string is lower case or not', () =>{
    test('should return shoul return lowercase', () => {
        expect(checkIfStringIsLowerCaseOrUpperCase('Jo')).toBe('lowercase')
    })
})


describe("Addition of two numbers input by user", () => {
    test('should resolve to the sum of two numbers', async () => {
        const result = await add(2, 4);
        expect(result).toBe(6);
    });

    test('should reject if not given two parameters', async () => {
        await expect(add(2)).rejects.toBe("Must provide two parameters");
    });
    
});


describe("print Euler's number rounded to four decimal places", () =>{
    test('should return 2.7182', () =>{
        expect(roundedEuler(2.71828)).toBe(2.7183)
    })
})


describe('find max from array of numbers', () =>{
    test('should return the largest', () =>{
        expect(findMax([2, 4, -9, 70, 0])).toBe(70)
    })
})


describe('display Product Witch Template Litteral', () =>{
    test('should return a string ', () =>{
        const produits = {
            produit : 'bac',
            quantity: 2,
            price: 5000
        }
    
        expect(displayProductWitchTemplateLitteral(produits.produit, produits.quantity, produits.price))
        .toBe("You purchased 2 units of bac for 10000.")
    }) 
})


describe('Create array that contain the unique elements from both arrays given by user', () =>{
    test('should return unique Array', () =>{
        expect(uniqueArray([2, 4, 7, 90, 20], [7, 20, 30, 1, 2])).toEqual([1, 2, 20, 30,4, 7, 90])
    })
})



describe('destructuring object', () =>{
    test('should correctly destructure the car object', () =>{
        const car ={
            make: "Toyota",
            model: "Corolla",
            year : "unknown"
        }
    
        const {make, model, year} = car
    
        expect(make).toBe("Toyota")
        expect(model).toBe("Corolla")
        expect(year).toBe("unknown")
    })
})


describe("calculate area of a circle with radius input by user", () =>{
    test('should return area', () =>{
        expect(calculateArea(2)).toBe(12.566370614359172)
    })

    test('should return radius is missing', () =>{
        expect(calculateArea()).toBe("Radius is missing!")
    })
})



describe("average calculation", () =>{
    test('average function', () =>{
        expect(average(2, 3, 7)).toBe(4)
    })
})


describe('reverse string', () =>{
    test('should return reverse string', () =>{
        expect(getReverseStrings(['jojo', 'heyy'])).toEqual([ 'ojoj', 'yyeh' ])
    })
})


describe('create a new array containing only the books with more than 300 pages', () =>{
    test('should return ', () =>{
        const books = [
            book1 = {pages: 200},
            book2 = {pages: 400},
            book3 = {pages: 100},
            book4 = {pages: 600},
        ]
        expect(booksWithMoreThan300Pages(books)).toEqual([ { pages: 400 }, { pages: 600 } ])
    })
})


describe('simulates fetching data from an API.', () =>{
    test('fetchData returns "Data fetched successfully!" after a delay', async () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.142857)

        jest.useFakeTimers();

        const fetchPromise = fetchData();
        jest.advanceTimersByTime(3000);

        const data = await fetchPromise;
        expect(data).toBe('Data fetched successfully!');

        jest.restoreAllMocks();
    })
})

describe('create a clock', () =>{
    test('should display a clock every after 1 seconds', () =>{
       const consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() =>{})
        jest.useFakeTimers()
        displayTime() 
        jest.advanceTimersByTime(10000);

        expect(consoleLogMock).toHaveBeenCalledTimes(10);  

        consoleLogMock.mockRestore();

    })
})
