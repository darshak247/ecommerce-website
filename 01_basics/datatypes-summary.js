// primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;


// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 340934809896009




// Reference (Non primitive)

// Array, Objects, Functions
// const heros = ["shaktiman", "naagrajj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("hello world");

// }
// myFunction()
// console.log(typeof myObj);
// myFunction()

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//    null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint
// 
// 2) Non-primitive Datatypes
//    Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


    //  Stack (primitive), Heap(non primitive)

     let myYoutubename = "hiteshchoudharydotcom"

     let anothername = myYoutubename
     anothername = "chaiaurcode"
     console.log(myYoutubename);
     console.log(anothername);

     let userOne = {
        email: "user@google.com",
        UPI: "user@Dk"
     }

     let userTwo = userOne

     userTwo.email = "hitesh@google.com"

     console.log(userOne.email);
     console.log(userTwo.email);
