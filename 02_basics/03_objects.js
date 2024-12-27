//  singletone
// Object.create

// object literals

// const mySym = Symbol("key1")

const JsUser = {
    name: "hitesh",
    "full name": "hitesh choudhray",
    // [mySym]: "mykey1",
    age: 18,
    location: "jajipur",
    email: "hitesh@google.com",
    isloggedIn: false,
    lastLoginDays: ["Manday", "saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("hello Js user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`hello JS user, ${this.name}`);

// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());




