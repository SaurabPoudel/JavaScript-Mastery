// const alphabet = ['A','B','C','D','E','F']
// const numbers = ['1','2','3','4','5','6']

// const a = alphabet[0]
// const b = alphabet[1]

// const [a,,c,...rest] = alphabet
// const newArray = [...alphabet, ...numbers]
// const newArray = alphabet.concat(numbers)
// console.log(newArray)

// function sumAndMultiply(a,b){
//     return [a+b,a*b]
// }

// const [sum,multiply,division = 'No Division'] = sumAndMultiply(2,3)

// console.log(sum)
// console.log(multiply)
// console.log(division)


// Object Destructuring 

const personOne = {
    name: 'Saurab',
    age: 18,
    address:{
        city: 'Bhaktapur',
        state : 'Bagmati'
    }
}
const personTwo = {
    name: 'Srishti',
    age: 22,
    favouriteFood: 'Watermelon',
    address:{
        city: 'Bhaktapur',
        state : 'Bagmati'
    }
}

const {name: firstName,age,favouriteFood = 'Rice',address :{city}} = personTwo

// console.log(firstName)
// console.log(age)
// console.log(favouriteFood)
// console.log(city)

printUser=({name,age})=>{
    console.log(`Name is ${name}. Age is ${age}`)
}

printUser(personOne)

// Checking git config is done correctly or not
