//utilize package we installed
const prompt = require('prompt-sync')();
//declare variable
let email = "";

console.log("Please input your email: \n");

//evaluates whether email is empty or not
//if this evaluates to true it means the email is empty and we need to prompt the user again for their email
while(email == ""){
    console.log("Please input an email, or I will make you eat fruit cake. \n")
    email = prompt("Input email here: ");
    //after prompting the user again, if email is not empty, thank them and show email
    if(email != ""){
        console.log("That's great! I really didn't want to force you to eat fruit cake.")
        console.log(`Thank you for your email: ${email}`)
    //if email length is zero which means the email is empty, tell them unfortunately they have to eat fruit cake
    } else if(email.length == 0){
        console.log("Welp, now you have to eat fruit cake. ")
    }
};

