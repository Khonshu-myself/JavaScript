const userData = {
    name: "Alice",
    age: 30,
    city: "New York"
};

console.log(userData.city);
console.log(Object.keys(userData).length);


//find vs filter
//const arr =[2,4,2,6,8].find((num)=> num ==2);
//console.log(arr);

//every 
//const allEvenNum = [2,4,6,8].every((num)=> num %2 ==0);
//console.log(allEvenNum); //true

//some
//const someEvenNum = [1,3,4,5].some((num)=> num %2 ==0); // one consdition should be true or 
//console.log(someEvenNum); //true

const bbBalajuCustomers = [
    {
        id: 2,
        name: "Ram",
        code: BAL,
        product: ["Washing Machine ", "pant", "shirt"]
    } 
    {
        id: 3,
        name: "kaldev",
        code: BAL,
        product: ["Refrigerator", "jeans", "t-shirt"  ] 
    }

];
const bbPulchowkCustomers = [
    {
        id: 4,
        name: "kushal",  
        code: "PUL"
        product: ["Microwave", "jacket", "sneakers"]
    }
    {
        id: 5,
        name: "Anna",
        code: "PUL",
        product: ["Dishwasher", "hat", "boots"]
    }
];

const getPulchockjacket = ()=>{
    const allCustomers = [...bbBalajuCustomers, ...bbPulchowkCustomers];
 
    const result = allBBUsers
    .filter((user)=> user.code === "PUL")
    .map((user)=> user.product)
    .flat();
    .find((product)=> product === "jacket");
    return result;
};


console.log(getPulchockjacket());