const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("pass1"), password2 = document.getElementById("pass2")
let special = document.getElementById("check1"), num = document.getElementById("check2")
let userValue = document.getElementById("userInput")
let userValue1 = document.getElementById("userInput").value
let generatedPass1 = document.getElementById("genPass1"), generatedPass2 = document.getElementById("genPass2")
let clicked1 = false, clicked2 = false
let replace1 = document.getElementById("clickTest1"), replace2 = document.getElementById("clickTest2")
let i = 0, result1 = '', result2 = ''
const defaultValue = 15

function passwordGenerate(){
    i = 0, result1 = '', result2 = ''
    if(isNaN(userValue.value)){
        alert("Please use numbers.")
    }
    else if(userValue.value > 25){
        alert("Please use a lower number.")
    }
    else if(userValue.value < 5){
        alert("Please use a number five or greater.")
    }
    else if( userValue.value != defaultValue ){
        if(special.checked === true && num.checked === false){
            // special characters indexed at [61 - 90]
            let noSpecial = characters.slice(0, 61)
            
            for(i; i < userValue.value; i++){
                let random1 = Math.floor(Math.random() * noSpecial.length)
                let random2 = Math.floor(Math.random() * noSpecial.length)
                result1 += noSpecial[random1]
                result2 += noSpecial[random2]
            }
            password1.textContent = result1
            password2.textContent = result2 
        }
        else if(special.checked === false && num.checked === true){
            // numbers indexed at [52 - 61]
            let noNumbers1 = characters.slice(0, 51)
            let noNumbers2 = characters.slice(62, 90)
            
            let noNumbers = noNumbers1.concat(noNumbers2)
            
            for(i; i < userValue.value; i++){
                let random1 = Math.floor(Math.random() * noNumbers.length)
                let random2 = Math.floor(Math.random() * noNumbers.length)
                result1 += noNumbers[random1]
                result2 += noNumbers[random2]
            }
            password1.textContent = result1
            password2.textContent = result2 
        }
        else if(special.checked === true && num.checked === true){
            let noNumbersOrSpecial = characters.slice(0, 51)
            
            for(i; i < userValue.value; i++){
                let random1 = Math.floor(Math.random() * noNumbersOrSpecial.length)
                let random2 = Math.floor(Math.random() * noNumbersOrSpecial.length)
                result1 += noNumbersOrSpecial[random1]
                result2 += noNumbersOrSpecial[random2]
            }
            password1.textContent = result1
            password2.textContent = result2 
        }
        else if(special.checked === false || num.checked === false){
            for(i; i < userValue.value; i++){
            let random1 = Math.floor(Math.random() * characters.length)
            let random2 = Math.floor(Math.random() * characters.length)
            
            result1 += characters[random1]
            result2 += characters[random2]
            
            }
            password1.textContent = result1
            password2.textContent = result2
            
            //let item = "/", index = characters.indexOf(item)
            
            //console.log(index) // special characters indexed at [61 - 90]
        }
        else{
            password1.textContent = "Error 1"
            password2.textContent = "Error 2"
        }
    }
    else{
            if(special.checked === true && num.checked === false){
            // special characters indexed at [61 - 90]
            let noSpecial = characters.slice(0, 61)
            
            for(i; i < 15; i++){
                let random1 = Math.floor(Math.random() * noSpecial.length)
                let random2 = Math.floor(Math.random() * noSpecial.length)
                result1 += noSpecial[random1]
                result2 += noSpecial[random2]
            }
            password1.textContent = result1
            password2.textContent = result2 
        }
        else if(special.checked === false && num.checked === true){
            // numbers indexed at [52 - 61]
            let noNumbers1 = characters.slice(0, 51)
            let noNumbers2 = characters.slice(62, 90)
            
            let noNumbers = noNumbers1.concat(noNumbers2)
            
            for(i; i < 15; i++){
                let random1 = Math.floor(Math.random() * noNumbers.length)
                let random2 = Math.floor(Math.random() * noNumbers.length)
                result1 += noNumbers[random1]
                result2 += noNumbers[random2]
            }
            password1.textContent = result1
            password2.textContent = result2 
        }
        else if(special.checked === true && num.checked === true){
            let noNumbersOrSpecial = characters.slice(0, 51)
            
            for(i; i < 15; i++){
                let random1 = Math.floor(Math.random() * noNumbersOrSpecial.length)
                let random2 = Math.floor(Math.random() * noNumbersOrSpecial.length)
                result1 += noNumbersOrSpecial[random1]
                result2 += noNumbersOrSpecial[random2]
            }
            password1.textContent = result1
            password2.textContent = result2 
        }
        else if(special.checked === false || num.checked === false){
            for(i; i < 15; i++){
            let random1 = Math.floor(Math.random() * characters.length)
            let random2 = Math.floor(Math.random() * characters.length)
            
            result1 += characters[random1]
            result2 += characters[random2]
            
            }
            password1.textContent = result1
            password2.textContent = result2
            
         // special characters indexed at [61 - 90]
        }
        else{
            password1.textContent = "Error 1"
            password2.textContent = "Error 2"
        }
    }
}

function copy(){
    let listen1 = eventListen1()
    if(password1.textContent === "Password 1" && password2.textContent === "Password 2"){
        alert("Please generate a password.")
    }
    else if(clicked1){
        alert(`${password1.textContent} has been copied!`)
    }
    else{
        replace1.textContent = "No password to copy."
    }
}

function copy2(){
    let listen2 = eventListen2()
    if(password1.textContent === "Password 1" && password2.textContent === "Password 2"){
        alert("Please generate a password.")
    }
    else if(clicked2){
        alert(`${password2.textContent} has been copied!`)
    }
    else{
        replace2.textContent = "No password to copy."
    }
}


function pass1Copy(){
    let copiedPass1 = password1.textContent;
    navigator.clipboard.writeText(copiedPass1)
    clicked1 = true
}

function pass2Copy(){
    let copiedPass2 = password2.textContent;
    navigator.clipboard.writeText(copiedPass2)
    clicked2 = true
}

function eventListen1(){
    generatedPass1.addEventListener("click", pass1Copy())
}

function eventListen2(){
    generatedPass2.addEventListener("click", pass2Copy())
}

//function copyToClipboard(){
//    document.getElementById("genPass2").onclick = function(){
//        let text = document.getElementById("pass2").value
//        navigator.clipboard.writeText("Test")
//        .then(() =>{
//            alert("Test")
//        })
//        .catch(err => {
//            console.log("Error: ", err)
//        })
//    }
//}