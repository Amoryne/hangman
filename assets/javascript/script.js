//Hangam Game

// Faire une liste de mots V
// Choisir des mots randoms v
// Cacher le mot
// Remplacer la taille du mot par des _
// Afficher un alphabet 
// Alphabet cliquable et choisir les lettres
// Quand on clique, ça recherche si la lettre fait partie du mot Random caché
// Si oui, elle s'affiche et remplace le _
// Si Non, on perd une vie(image, chiffres,icone...)
// Un compteur se lance pour décompter le nombre de vie ( max 5)
// Quand on arrive a 0=> game over => un message apparait pour dire de cliquer sur Reset pour recommencer
// On relance le code et le jeu se remet a 0
// Si on gagne, le mot s'affiche en entier => Message => Inviter a reset pour recommencer
// Il y a un compteur de victoire et de défaites(optionel)
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
let randomWord=words[Math.floor(Math.random()*words.length)];
// let arrayWord=[randomWord];
let arrayWord=randomWord.split("");
let indiceDOM=document.getElementById("indice")

// let wordIndex=words.indexOf(randomWord);
// let indiceIndex=indice.indexOf(indice)
// console.log(indiceIndex)
// console.log(wordIndex);
console.log(arrayWord)

let error=0;
let maxError=5;
let good=0;

//---------------------------------------------------------------------------//

//GAME INIT POUR REFRESH-------------------
// function init(){
// let lives=5;
// }
// init();
//----------------------------------------//
//AFFICHER INDICE LIE AU MOT
//afficher valeur où indice dont la position est égale a l'index de randomword//
let indexWord= words.indexOf(randomWord);
let indexIndice=indexWord;
let indicePos=indice.at(indexWord)
indiceDOM.innerHTML=indicePos;
console.log(indicePos)

//AFFICHER LE MOT RANDOM-------------------
let FindWord=document.getElementById("find-word");


let hiddenWord = [];
for(let i = 0; i < randomWord.length; i++){
  hiddenWord[i]= '_';
//FindWord.innerHTML = hiddenWord;
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
let buttons = document.querySelectorAll(".alphaBtn");

function displayLetter() {
  var finded = false;

  buttons.forEach(button => {
    button.addEventListener('click', () => {

      var myletter = (button.textContent);

      for (var j = 0; j < randomWord.length; j++) {

        if (randomWord[j] === myletter) {
          hiddenWord.splice(j, 1, myletter)
          FindWord.innerHTML = (hiddenWord.join(" "));
          good++;
          updateWin()
          button.remove()
          finded = true;
          console.log(good);
        }
      }

      if (finded != true) {
        console.log("error")
        error++
        updateError()

      }


    });
  });
};


function updateError(){
  document.getElementById('loss').innerHTML=error;
  if(error > maxError){
    document.getElementById('loss').innerHTML="You loose";
  }
}
function updateWin(){
  document.getElementById('win').innerHTML=good;
  if(good === randomWord.length){
    document.getElementById('win').innerHTML="You win";
   document.reset()
  }
}
updateWin()
updateError();
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