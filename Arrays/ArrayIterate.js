//Looping arrays using for loop
// let marvel = ["Ironman", "Hulk", "superman", "batman", "vamshi"]

// for (i = 0; i < marvel.length; i++) {
//     console.log(marvel[i])
// }

//Looping arrays using for of

// let states = ["hyderabad","andrapradesh","delhi","karnataka","gujarat",]

// for(let state of states){
//     console.log(state)
// }

//Finding average marks of students

let marks = [85, 97, 44, 37, 76, 60]

value = 0;

for (let mark of marks) {
    value += mark
}

let avg = value / marks.length
console.log(`${avg}`)