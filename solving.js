function smallestNumber (number){
    let smallest = number[0];
    for(let i=0;i<number.length; i++){
     if (smallest > number[i]){
            smallest = number[i];
        }
    }
    return smallest;
  // console.log(number[5]);
}


//console.log(smallestNumber ([10,20,30,40,50,60,70]));


const names = ["Rana", "Raju", "Rahat", "Rana", "Raju", "Rahat", "Rana", "Raju", "Rahat"];
//console.log(names);

function removesDuplicate(array) {
    const uniqeNames = [];
    for (let i = 0; i < array.length; i++) {
      // console.log(names[i]);
      if (uniqeNames.indexOf(names[i]) == -1){
        uniqeNames.push(names[i]);
      }
        
    }
    return uniqeNames;
}

 const output = removesDuplicate (names);
// console.log(output);

let numbers = [0,2,3,4,5,6];
for (const number of numbers){
   // console.log(number);
}

let bookName = "secret garden" ;
function reversedsentence(sentence){
    let reversed = "";
    for (var i=0; i<sentence.length; i++){
        let letter = sentence[i];
        reversed= letter + reversed ;
    }
    return reversed ;
}
//console.log(reversedsentence(bookName));

function add(num1, num2) {
  //  console.log(num1, num2);
    return num1+num2;
}
const result = add (10,20);
//console.log(result);

function woodcalculator (chairQty, tableQty, bedQty){
    let perchair = 5;
    let pertable = 15 ;
    let perbed = 20 ;

    const chairWood = chairQty*perchair ;
    const tableWood = tableQty * pertable ;
    const bedWood = bedQty* perbed ;
    return chairWood + tableWood +bedWood ;
}
//console.log(woodcalculator(10, 5, 3));

const tshirts = [
    {name: "boys", price: 500, color: "black", size: "X"},
    {name: "girls", price: 600, color: "white", size: "X"},
    {name: "women", price: 550, color: "red", size: "X"},
    {name: "men", price: 250, color: "green", size: "X"},
    {name: "children", price: 350, color: "blue", size: "X"}
];


let cheapest = tshirts[0];
let total = 0;
for (const tshirt of tshirts )
{
    //console.log(tshirt);
    //console.log(tshirt.price);
    if(cheapest.price> tshirt.price){
        cheapest= tshirt;
    }
total+= tshirt.price;
}
//console.log(cheapest);
//console.log(total);


const cartItem = [
    {name: "boys", price: 500, color: "black", qty: 2},
    {name: "girls", price: 600, color: "white", qty: 3},
    {name: "women", price: 550, color: "red", qty: 5},
    {name: "men", price: 250, color: "green",qty: 4},
    {name: "children", price: 350, color: "blue",qty: 2}
]

let totalprice = 0;
for (const item of cartItem){
   // console.log(item);
  // console.log(item.price);
   // console.log(item.qty);

   const singleiteamTotalprice = item.price * item.qty;
   totalprice +=singleiteamTotalprice;
}
console.log(totalprice);




































































