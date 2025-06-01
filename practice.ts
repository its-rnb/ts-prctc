// for tsc to work, install globally
// npm install -g typescript


// npm install -g ts-node with this run ts-node practice.ts for detailed compiling
// for basic compiling use tsc practice.ts

// tsc practice.ts compiles .ts and generates .js with same code
// if .js file already exists, changes made to .ts will reflect in .js

// ts-node practice.ts doesn't update .js even on (and with) code change
// directly compiles and runs(as .js) .ts file


let user= {name: "bro", age: 20}

// console.log(user.name+ " " +user.age+ " " +user.ht) //ts compiles only to show errors/warnings
console.log(user.name+ " " +user.age)
