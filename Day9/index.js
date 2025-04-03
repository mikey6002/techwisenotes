for(let char of "fruits"){
    console.log(char);
}



//functions
function square(num){
    return num * num
}

console.log(square(5))

function divMod(x,y){
    return [x/y,x%y]
}

const cookies = 17;
const people =5;
const values = divMod(cookies,people);
console.log(values);

const [quotient,remainder] = divMod(cookies,people);
console.log(quotient,remainder);

const quotRem = function(x,y){
    return [Math.floow(x/y), x%y];
}
const squareArrow = (num) => num * num
console.log(squareArrow(5));

const squareArrow2 = (num) => n=> {
    return num * num

}

const celeberate = () => console.log("happy b day")
celeberate();

const fruits = ["apple",'banna','cherry']
console.log(fruits)

fruits.forEach(fruit => console.log(fruit));
fruits.map(fruit => console.log(fruit));//returns a new array 

const newFruits2 = fruits.map(fruit => fruit.toUpperCase());

console.log(newFruits2)
console.log(fruits)

//Objects
const dirtyChai = {
    expresso: 2,
    ischai:true,
    milk: 'whole',
    isIced: false,


}

dirtyChai.sprinkles = 'cinnamon'; //dot nottation

const pro = 'isIced';
dirtyChar[prop]= true
console.log(dirtyChai);

function FancryDrink(espresso,milk,isIced=false,sprinkles,isChai=False){
    this.espresso = espresso;
    this.milk = milk
    this.isIced = isIced
    this.sprinkles=sprinkles
    this.isChai = isChai
    this.drink =() => console.log ("that was a good drink")
    this.toString = () =>{
        return 'This is a '{$this.isChai? "chai" : 'coffee'} with ${this.espresso}
    }
}
const myDrink = new FancryDrink(2,"whole",'cinnamon');
const lateDrink = new FancryDrink(2,"whole");

console.log(myDrink)