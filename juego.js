
const emojis = ["🌻","🌹","🌷","🌼"];
const size = 6;

const board = document.getElementById("board");
const scoreText = document.getElementById("score");
const levelText = document.getElementById("level");
const goalText = document.getElementById("goal");
const nextBtn = document.getElementById("nextBtn");
const boom = document.getElementById("boom");

let level = 1;
let score = 0;
let goal = 40;

let selected = null;
let tiles = [];
let blocked = false;

// UI
function updateUI(){
scoreText.textContent = score;
levelText.textContent = level;
goalText.textContent = goal;
}

// crear tablero
function createBoard(){

board.innerHTML = "";
tiles = [];

for(let i=0;i<size*size;i++){

let cell = document.createElement("div");
cell.className = "cell";

cell.textContent =
emojis[Math.floor(Math.random()*emojis.length)];

cell.onclick = ()=> select(cell);

board.appendChild(cell);
tiles.push(cell);
}

updateUI();
}

// seleccionar
function select(cell){

if(blocked) return;

if(!selected){
selected = cell;
cell.style.border = "2px solid red";
return;
}

swap(selected, cell);
selected.style.border = "none";
selected = null;

setTimeout(checkBoard,200);
}

// swap
function swap(a,b){
let temp = a.textContent;
a.textContent = b.textContent;
b.textContent = temp;
}

// revisar tablero
function checkBoard(){

let match = false;

// horizontal
for(let i=0;i<tiles.length;i++){

let col = i % size;
let e = tiles[i].textContent;

if(e=="") continue;

// 4
if(col<=2 &&
tiles[i+1].textContent==e &&
tiles[i+2].textContent==e &&
tiles[i+3].textContent==e){

tiles[i].textContent="";
tiles[i+1].textContent="";
tiles[i+2].textContent="";
tiles[i+3].textContent="";

score += 40;
match = true;
}

// 3
else if(col<=3 &&
tiles[i+1].textContent==e &&
tiles[i+2].textContent==e){

tiles[i].textContent="";
tiles[i+1].textContent="";
tiles[i+2].textContent="";

score += 20;
match = true;
}
}

// vertical
for(let i=0;i<tiles.length;i++){

let e = tiles[i].textContent;

if(e=="") continue;

// 4
if(i<12 &&
tiles[i+6].textContent==e &&
tiles[i+12].textContent==e &&
tiles[i+18].textContent==e){

tiles[i].textContent="";
tiles[i+6].textContent="";
tiles[i+12].textContent="";
tiles[i+18].textContent="";

score += 40;
match = true;
}

// 3
else if(i<18 &&
tiles[i+6].textContent==e &&
tiles[i+12].textContent==e){

tiles[i].textContent="";
tiles[i+6].textContent="";
tiles[i+12].textContent="";

score += 20;
match = true;
}
}

if(match){
boom.currentTime = 0;
boom.play();
refill();
}

updateUI();

// ganar
if(score >= goal){
blocked = true;
nextBtn.style.display = "block";
}
}

// rellenar
function refill(){

tiles.forEach(t=>{

if(t.textContent==""){
t.textContent =
emojis[Math.floor(Math.random()*emojis.length)];
}

});
}

// siguiente nivel
nextBtn.onclick = ()=>{

level++;
score = 0;
goal += 40;

blocked = false;
nextBtn.style.display = "none";

createBoard();
};

// iniciar
createBoard();