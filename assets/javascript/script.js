import {indice,words,explication} from './data.js'
console.log(words)


var randomWord = words[Math.floor(Math.random() * words.length)];

let getScore = document.getElementById("score");
var keep = document.getElementById("victory");
let arrayWord = randomWord.split("");
let indiceDOM = document.getElementById("indice");
let lives = document.getElementById("lives");
let details = document.getElementById("explication");
var rejouer = document.getElementById("rejouer");

//-----------------------------------------------------------------------------

//REGLES DU JEU

let imgTest = document.getElementById("image-test");
var imgPos = 0;
var imgDis = 0;


var maxError = Math.floor(Math.random() * (10 - 2)) + 2;


var good = 0;
var error = maxError;


console.log(maxError);
console.log(arrayWord);
//---------------------------------------------------------------------------//

//AFFICHER INDICE LIE AU MOT
//afficher valeur où indice dont la position est égale a l'index de randomword//

let indexWord = words.indexOf(randomWord);
let indexIndice = indexWord;
let indicePos = indice.at(indexWord);
indiceDOM.innerHTML = "Question/indice:</br> " + indicePos;
console.log(indicePos);

//AFFICHER LE MOT CACHER "_"--------------------------------------------------

let FindWord = document.getElementById("find-word");
let hiddenWord = [];
for (let i = 0; i < randomWord.length; i++) {
  hiddenWord[i] = "  _  ";
  //CREER SPAN POUR LES "_" DANS LE DOM
  let p = document.createElement("span");
  p.setAttribute("class", "hiddenword");
  p.innerHTML = hiddenWord[i];
  FindWord.appendChild(p);
}

//--------------------------------------------

//AFFICHER ALPHABET CLIQUABLE---------------------------------------------

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var list = document.getElementById("myList");

alphabet.forEach((letter) => {
  // let li = document.createElement("li");
  //creer bouton
  let btn = document.createElement("BUTTON");
  btn.setAttribute("class", "alphaBtn");
  let letters = document.createTextNode("alphabet");
  btn.appendChild(letters);
  btn.innerText = letter;
  list.appendChild(btn);
});

// -----------------------------------------------------------------//

//AFFICHER LETTRE CHOISIE----------------------------
let guessWord = document.getElementById("guess-word");
//VAR BOUTON
var buttons = document.querySelectorAll(".alphaBtn");

function displayLetter() {
  var finded = false;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      finded = false;
      var myletter = button.textContent;

      for (var j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === myletter) {
          hiddenWord.splice(j, 1, myletter);
          FindWord.innerHTML = hiddenWord.join(" ");
          good++;
          finded = true;
          button.remove();
          updateWin();
        }
      }
      if (finded !== true) {
        console.log("error");
        finded = false;
        error--;
        button.remove();

        //  imgDis++
        //  imgPos += imgDis
        //  console.log(imgDis)

        //   console.log(imgPos)
        //   image();
        updateError();
        button.remove();
      }
    });
  });
}

// function image() {
//   imgTest.style.transform = "translate(" + imgPos + "0px)";
// }
//FUNCTION UPDATE ERROR

function updateError() {
  document.getElementById("loss").innerHTML =error ;
  gameOver();
}
//FUNCTION UPDATE WIN
function updateWin() {
  
  win();
}

//FUNCTIO LOOSE -> Affiche message gameover, bouton rejouer et cache les boutons
function gameOver() {
  if (error === 0) {
    document.getElementById("loss").innerHTML = "You loose";
    
    var showAnswer = document.getElementById("answer");
    showAnswer.innerHTML = "The good answer was ";
    FindWord.innerHTML = randomWord;
    staySmart();
    resetError();
  }
}

function win() {
  if (good === randomWord.length) {
    document.getElementById("win").innerHTML = "You win";
    staySmart();
    list.remove();
    FindWord.remove();
  }
}



//RESET ERROR
function resetError() {
  error = maxError;
  list.remove();
  lives.remove();
}
//CREER EXPLICATION LIÉ AU MOT
function staySmart() {
  let indexDetails = indexWord;
  let indexDetailsPos = explication.at(indexWord);
  details.innerHTML = "L'explication est: " + indexDetailsPos;
  console.log(indexDetailsPos);
}

updateError();
updateWin();
gameOver();
win();
displayLetter();

let myscroll=document.getElementById('myscroll');
myscroll.addEventListener("click",()=>{
    window.scrollTo(0,740)
})

///////////////////////////////////////////////////////////

// function createResetButton(){
//   var buttonReset = document.createElement('button');
//     buttonReset.setAttribute('id', 'reset')
//     buttonReset.innerHTML="Rejouer ?"
//     rejouer.appendChild(buttonReset);

// }
// createResetButton()
//   var reset=document.getElementById("reset")

// reset.addEventListener("click", ()=>{

// init()

// console.log("bou")

// })

// if(youWin === true){

//       keepWin++
//       keep.innerHTML=keepWin;
//       var session = localStorage.setItem('loose', keepWin);
//       localStorage.clear()
//   }

// console.log(session)

// restart=false;
//

// function buttonRestart(){
//   restart=true;
// resetError();
// FindWord.remove()
// }
// buttonRestart()
// if(restart === true){

//   function newGame(){

//     FindWord.innerHTML=randomWord
//     console.log("bouyaka")

//   }
//   newGame()
// }
// })

//DECLARATION DE FONCTIONS----------------

//_-------------------------------------------------------TESTS----------------------
//-------------------------------------------------
// let find=displayLetter();
// console.log(find);
// CHERCHER SI LA LETTRE EST DANS LE RANDOMWORD-----
// console.log(myletter);
// function find(letter){
//   if(randomWord.includes(myletter){
//    console.log("true");
//   } else{
//    consoe
//   }
// }
// let index=randomWord[''];
// console.log(index);

// let wordIndex=words.indexOf(randomWord);
// let indiceIndex=indice.indexOf(indice)
// console.log(indiceIndex)
// console.log(wordIndex);

// const searchTerm = displayLetter(button){
// const indexOfFirst = randomWord.indexOf(searchTerm);
// console.log(randomWord, indexOfFirst);
// }

// if (randomWord.includes(myletter)){
//       index = randomWord.indexOf(myletter);
//       currentWord=FindWord.innerHTML;
//       currentWord[index]=myletter;
//       FindWord.innerHTML=currentWord;
//       console.log(currentWord, randomWord);
//     } else{
//         console.log("Wrong, you loss a live");
//     }

// arrayWord.forEach(el => {
//   if(el === myletter){
//     console.log(myletter);
//     prout=arrayWord.indexOf(myletter);
//     currentword=FindWord.innerHTML;
//     currentword[prout]=myletter;
//     currentword.innerHTML=myletter
//     console.log(currentword)
//   }
//})

// FindWord.innerHTML="_".repeat(randomWord.length);

// let FindWord=document.getElementById("find-word");
// FindWord.innerHTML=" _ ".repeat(RandomWord.length);

//let hiddenWord = ""
// for(let i = 0; i < RandomWord.length; i++){
//   hiddenWord += ' _ '
// }
// FindWord.innerHTML = hiddenWord;

//AFFICHER LALPHABET DANS LHTML
// console.log()
// alphabet.forEach(function(letters){
// 	document.getElementById('test2').innerHTML=[alphabet];
// });
// let i=RandomWord;
// // console.log(i)
// while (i < RandomWord.length) {
//   document.getElementById('guess-letter').innerHTML = ('_')
// i++
// }
//
// function init() {
//     let lives = 5;
//     let randomWord = words[Math.floor(Math.random() * words.length)];
//     document.getElementById("randomWord").innerHTML = randomWord
// }

// function find(userInput){
//   if(RandomWord.includes([userInput])){
//     //affiche la lettre
//   } else{
//   	//perd une vie
//   }
// }
//    let px= document.createElement('span');
// px.setAttribute('class','hiddenword');
// px.innerHTML = hiddenWord.join(" ");
// FindWord.appendChild(px);

// function displayLetter(){
// buttons.forEach( button => {
// button.addEventListener('click', () => {
//     guessWord.innerHTML=(button.textContent);
//     // const myLetter=(button.textContent);
//     // console.log(myLetter);
//   });
// });
// };

// displayLetter();
