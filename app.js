// const characters =  ["A","B","C","D","E","F","G","H","I","J","K","L",
//                     "M","N","O","P","Q","R","S","T","U","V","W","X",
//                     "Y","Z","a","b","c","d","e","f","g","h","i","j",
//                     "k","l","m","n","o","p","q","r","s","t","u","v",
//                     "w","x","y","z","0","1","2","3","4","5","6","7",
//                     "8","9","~","`","!","@","#","$","%","^","&","*",
//                     "(",")","_","-","+","=","{","[","}","]",",","|",
//                     ":",";","<",">",".","?","/"];

let characters = [];

let numbers = ["0","1","2","3","4","5","6","7","8","9"];

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L",
                "M","N","O","P","Q","R","S","T","U","V","W","X",
                "Y","Z","a","b","c","d","e","f","g","h","i","j",
                "k","l","m","n","o","p","q","r","s","t","u","v",
                "w","x","y","z"];

let symbols = ["~","`","!","@","#","$","%","^","&","*",
                "(",")","_","-","+","=","{","[","}","]",",","|",
                 ":",";","<",">",".","?","/"];

let generateBtn = document.getElementById("generate-Button");
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");


generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

    let password = generateRandomPassword();
    let Password2 =generateRandomPassword();

    password1El.textContent = password;
    password2El.textContent = Password2;
}

function generateRandomPassword() {

    let length = document.getElementById("length-el").value;
    let includeNumbers = document.getElementById("includeNumbers-el").checked;
    let includeLetters = document.getElementById("includeLetters-el").checked;
    let includeSymbols = document.getElementById("includeSymbols-el").checked;

      characters = [];

        let password = " ";

        if (includeNumbers){

            characters = characters.concat(numbers);
            
        }
        
        if (includeLetters){

            characters = characters.concat(letters);
            
        }
        if (includeSymbols){

            characters = characters.concat(symbols);
            
        }
        

        for (let i = 0; i < length; i++){
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        return password;
}
