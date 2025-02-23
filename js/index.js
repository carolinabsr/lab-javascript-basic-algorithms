// Iteration 1: Names and Input
const hacker1 = 'Carolina'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Raphael'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

function longestName(){
    if(hacker1.length > hacker2.length) 
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
    else if (hacker1.length < hacker2.length) console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    else if (hacker1.length === hacker2.length) console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

longestName()


//Iteration 3: Loops

//1
let driver = '';

for (let i=0; i < hacker1.length; i++) {
   driver += hacker1[i].toUpperCase() + " ";  
}

console.log(driver);

//2

let navigatorReverse = '';

for (let i=hacker2.length-1; i >=0; i--) {
    navigatorReverse += hacker2[i];  
 }
 
 console.log(navigatorReverse);

 //3
 //The driver's name goes first.
 //Yo, the navigator goes first definitely.
 //What?! You both have the same name?

 function lexicOrder(){
    if(hacker1.localeCompare(hacker2.length)<0)
    console.log("The driver's name goes first.") 
    else if (hacker1.localeCompare(hacker2.length)>0) console.log('Yo, the navigator goes first definitely.')
    else if (hacker1 === hacker2) console.log("What?! You both have the same name?")
}

lexicOrder()

 


