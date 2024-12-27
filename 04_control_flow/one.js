 // if

 const isUserloggedIn = true
 const temprature = 41

 if (temperature === 40){
 console.log("less than 50");
} else {
    console.log("temerature is greater than 50");
}

console.log("execute");
// <, >, <=, >=, ==, !=, ===, !===

const score = 200

if(score > 100){
    let power = "fly"
    console.log(`ser power: ${power}`);
}

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test 2");

if (balance < 500){
    console.log("less than 500");
    }else if (balance < 750){
        console.log("lesss than 750");
    }

    else if(balance < 900){
        console.log("less than 750");
    }

    else{
        console.log("lesss than 1200");
    }


    const userloggedIn = true
    const debitCard = true
    const loggedInFromGoogle = false
    const loggedInFromEmail = true

    if (userloggedIn && debitCard && 2==3){
        console.log("Allow to buy course");
    }

    if (loggedInFromGoogle || loggedInFromEmail){
        console.log("User logged in");
    }

