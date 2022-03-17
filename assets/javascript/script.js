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

const words=["dragon", "chaton","kaamelott","witcher","souris","korea","scotland", "raton","doudou","montain","beach","redbull"];
let randomWord=words[Math.floor(Math.random()*words.length)];


//---------------------------------------------------------------------------//

//GAME INIT POUR REFRESH-------------------
function init(){
let lives=5
}
init();
//----------------------------------------//



//AFFICHER LE MOT RANDOM-------------------
let FindWord=document.getElementById("find-word");

// FindWord.innerHTML="_".repeat(randomWord.length);
let hiddenWord = [];
for(let i = 0; i < randomWord.length; i++){
  hiddenWord[i]= '_';
FindWord.innerHTML = hiddenWord;
}

let remainingLetters=randomWord.length;
//--------------------------------------------


//AFFICHER ALPHABET CLIQUABLE-------------------------
let alphabet = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];
let list = document.getElementById("myList");

alphabet.forEach((letter)=>{
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
let guessWord=document.getElementById("guess-word");
//VAR BOUTON
let buttons = document.querySelectorAll(".alphaBtn");

function displayLetter(){
buttons.forEach( button => {
button.addEventListener('click', () => {
	 const myletter=(button.textContent);
    // if (randomWord.includes(myletter)){
    //       index = randomWord.indexOf(myletter);
    //       currentWord=FindWord.innerHTML;
    //       currentWord[index]=myletter;
    //       FindWord.innerHTML=currentWord;
    //       console.log(currentWord, randomWord);
    //     } else{
    //         console.log("Wrong, you loss a live");
    //     } 
    for(var j=0; j< randomWord.length; j++){
if (randomWord[j] === myletter);{
  hiddenWord[j] = randomWord[j];
  FindWord.innerHTML=(hiddenWord.join(myletter +''));
}
}
console.log(hiddenWord, randomWord);


  });
});
};

displayLetter();

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