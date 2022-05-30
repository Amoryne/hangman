//Hangam Game
//**TODO */
////Faire une liste de mots V
// ///Choisir des mots randoms v
// //Cacher le mot
/////Remplacer la taille du mot par des _
//// Afficher un alphabet 
//// Alphabet cliquable et choisir les lettres
//// Quand on clique, ça recherche si la lettre fait partie du mot Random caché
//// Si oui, elle s'affiche et remplace le _
//// Si Non, on perd une vie(image, chiffres,icone...)
//// Un compteur se lance pour décompter le nombre de vie ( max 5)
//// Quand on arrive a 0=> game over => un message apparait pour dire de cliquer sur Reset pour recommencer
// On relance le code et le jeu se remet a 0
// Faire une fonction reset pour les error
// Afficher le mot une fois qu'on a perdu
//Cacher les boutons après le gameover
// Si on gagne, le mot s'affiche en entier => Message => Inviter a reset pour recommencer
// Il y a un compteur de victoire et de défaites(optionel)
//RANDOM SUR LE NOMBRE DE VIES
//---------------------------------------------------------------

const indice = [
  "Série télévisée",
  "Jeux vidéo médiéval",
  "Petit rongeur",
  "Pays des K-drama",
  "Mange du haggis",
  "Petit du rat",
  "Fête folcklorique Montoise",
  "Paysage norvégien",
  "Endroit où nager et bronzer",
  "Meilleure boisson énergisante",
];
const words = [
  "kaamelott",
  "witcher",
  "souris",
  "korea",
  "scotland",
  "raton",
  "doudou",
  "montain",
  "beach",
  "redbull",
];
const explication = [
  "Série créer par AA",
  "CD PROJECT",
  "Rongeur bruyant",
  "Crash landing d'amour",
  "Meilleure pays du monde",
  "Meilleure animal au monde",
  "Meilleure ville au monde",
  "Une européene super chère",
  "c'est la plage quoi",
  "Bien meilleure que le Monster",
];

//MOT ET INDICE RANDOM

let randomWord=words[Math.floor(Math.random()*words.length)];
let arrayWord=randomWord.split("");
let indiceDOM=document.getElementById("indice");
let lives=document.getElementById("lives");
let details=document.getElementById("explication")



//REGLES DU JEU


var maxError = Math.floor(Math.random()*(10 - 2)) + 2;
lives.innerHTML=" Vous avez pour cette manche: " +maxError + " vies";
var good=0;
var error=maxError;
console.log(maxError)
// function getRandomLives(){
//   let maxErrorRandom=

// }
console.log(arrayWord)
//---------------------------------------------------------------------------//



//AFFICHER INDICE LIE AU MOT
//afficher valeur où indice dont la position est égale a l'index de randomword//
let indexWord= words.indexOf(randomWord);
let indexIndice=indexWord;
let indicePos=indice.at(indexWord)
indiceDOM.innerHTML=indicePos;
console.log(indicePos)








//AFFICHER LE MOT CACHER "_"-------------------
let FindWord=document.getElementById("find-word");
let hiddenWord = [];
for(let i = 0; i < randomWord.length; i++){
  hiddenWord[i]= '_';

let p= document.createElement('span');
  p.setAttribute('class','hiddenword');
  p.innerHTML = hiddenWord[i];
  FindWord.appendChild(p);

}

//--------------------------------------------


//AFFICHER ALPHABET CLIQUABLE-------------------------
let alphabet = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];
let list = document.getElementById("myList");

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

// ------------------------------------//


//AFFICHER LETTRE CHOISIE----------------------------
let guessWord = document.getElementById("guess-word");
//VAR BOUTON
var buttons = document.querySelectorAll(".alphaBtn");

function displayLetter() {
  var finded = false;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
finded=false;
      var myletter = (button.textContent);

      for (var j = 0; j < randomWord.length; j++) {

        if (randomWord[j] === myletter) {
          hiddenWord.splice(j, 1, myletter)
          FindWord.innerHTML = (hiddenWord.join(" "));
          good++;
          finded = true;
          button.remove();
          updateWin();
        }
      }
      if (finded !== true) {
        console.log("error")
        finded=false;
        error--;
        //button.remove();
        updateError();
        
      }
    });
  });
};

// for(var error=0; error < maxError; error++){
//   if(finded !=)
// }


var rejouer = document.getElementById("rejouer")
//FUNCTION UPDATE ERROR

function updateError(){
  document.getElementById('loss').innerHTML="Il vous reste "+ error + " vies";
  gameOver();

}
//FUNCTION UPDATE WIN
function updateWin(){
  document.getElementById('win').innerHTML=good;
  win();
  
}

//FUNCTIO LOOSE -> Affiche message gameover, bouton rejouer et cache les boutons
function gameOver(){
   if(error === 0){
    document.getElementById('loss').innerHTML="You loose";
    // CREER BOUTON REFRESH
    // var buttonReset = document.createElement('button');
    // buttonReset.setAttribute('onClick',"window.location.reload();")
    // buttonReset.innerHTML="Game over, try again ?"
    // rejouer.appendChild(buttonReset);
    //AFFICHER MOT
    var showAnswer = document.getElementById('answer');
    showAnswer.innerHTML="The good answer was ";
    FindWord.innerHTML= randomWord;
    staySmart();
    resetError();
    
    
  }
}

function win(){
  if(good === randomWord.length){

    document.getElementById('win').innerHTML="You win";
  
    var buttonReset = document.createElement('button');
    buttonReset.setAttribute('onClick',"window.location.reload();")
    buttonReset.innerHTML="Rejouer ?"
    rejouer.appendChild(buttonReset);
    staySmart();

  }
}


//RESET ERROR
function resetError(){
  error=maxError;
  list.remove();
  lives.remove();
}
//CREER EXPLICATION LIÉ AU MOT
function staySmart(){
let indexDetails=indexWord;
let indexDetailsPos=explication.at(indexWord)
details.innerHTML=indexDetailsPos;
console.log(indexDetailsPos)
}

// function init(){
//   //init error
//   error=maxError;
// //init vies
//   good=0;
//   lives;
//   indicePos;





// }









//DECLARATION DE FONCTIONS----------------


updateError();
updateWin();
gameOver();
win();
displayLetter();












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