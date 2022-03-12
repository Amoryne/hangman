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


const words=["dragon", "chaton","kaamelott","witcher","souris","korea","scotland", "raton","doudou","montain","beach","redbull"];
let RandomWord=words[Math.floor(Math.random()*words.length)];
function init(game){
	let lives=5
	
};


//AFFICHER ALPHABET CLIQUABLE

let alphabet = ['a', 'b', 'c','d','e','f','i','j','k','l','m','n',
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
// ------------------------------------

//AFFICHER LE MOT RANDOM


let FindWord=document.getElementById("find-word");
FindWord.innerHTML=RandomWord.replace(RandomWord, "_" );


//----------------------------------------

// CHERCHER SI LA LETTRE EST DANS LE RANDOMWORD

// function find(){
//   if(RandomWord.includes(button)){
//     console.log("true");
//   } else{
//   	console.log("false");
//   }
// }
// find();

//AFFICHER LETTRE CHOISIE----------------------------
let guessWord=document.getElementById("guess-word");
let buttons = document.querySelectorAll(".alphaBtn");

function displayLetter(){
buttons.forEach( button => {
  button.addEventListener('click', () => {
    guessWord.innerHTML=(button.textContent)
  });
});
};
displayLetter()
//-------------------------------------------------





























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


// Faire une liste de mots
// Choisir des mots randoms
// Cacher le mot
// Remplacer la taille du mot par des _
// Afficher un alphabet pour cliqué dessus et choisir les lettres
// Quand on clique, ça recherche si la lettre fait partie du mot Random caché
// Si oui, elle s'affiche et remplace le _
// Si Non, on perd une vie(image, chiffres,icone...)
// Un compteur se lance pour décompter le nombre de vie ( max 5)
// Quand on arrive a 0=> game over => un message apparait pour dire de cliquer sur Reset pour recommencer
// On relance le code et le jeu se remet a 0
// Si on gagne, le mot s'affiche en entier => Message => Inviter a reset pour recommencer
// Il y a un compteur de victoire et de défaites(optionel)

