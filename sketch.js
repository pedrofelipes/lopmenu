let img;
let menuAtual = "principal";

function preload() {
  img = loadImage('transferir.jpg');
}

function setup() {
  
  createCanvas(400, 400);
} 

function draw() {
background(img);
  if (menuAtual === "principal") 
{menuPrincipal()}
  else if (menuAtual === "instruções")
{menuInstruções()}
  else if (menuAtual === "créditos")
{menuCréditos()}
  else if (menuAtual === "jogo")
{jogo()}
  
} 

function mousePressed() {
  if (menuAtual === "principal" && mouseX > 100 && mouseX < 300 && mouseY > 175 && mouseY < 225) 
  {console.log("botão jogar");
  menuAtual = "jogo"} 
  
  if (menuAtual === "principal" && mouseX > 100 && mouseX < 300 && mouseY > 225 && mouseY < 275) 
  {console.log("botão instruções");
  menuAtual = "instruções"}
  
  if (menuAtual === "principal" && mouseX > 100 && mouseX < 300 && mouseY > 275 && mouseY < 325) 
  {console.log("botão créditos");
  menuAtual = "créditos"} 
  if (menuAtual === "créditos" && mouseX > 0 && mouseX < 200 && mouseY > 350 && mouseY < 400)
  {console.log("botão créditos voltar")
  menuAtual = "principal"}
  if (menuAtual === "instruções" && mouseX > 0 && mouseX < 200 && mouseY > 350 && mouseY < 400)
  {console.log("botão instruções voltar")
  menuAtual = "principal"}
  if (menuAtual === "jogo" && mouseX > 0 && mouseX < 200 && mouseY > 350 && mouseY < 400)
  {console.log("botão jogo voltar")
  menuAtual = "principal"}
} 

function menuPrincipal() {
  textSize(55);
  textAlign(CENTER, CENTER);
  text("menu!", 200, 50 );
 
  rectMode(CENTER);
  fill(150);
  rect(200, 200, 200, 50);
  textSize(35);
  fill(0);
  text("JOGAR", 200, 200)
  
  rectMode(CENTER);
  fill(150);
  rect(200, 250, 200, 50);
  textSize(25);
  fill(0);
  text("INSTRUÇÕES", 200, 250);
  
  rectMode(CENTER);
  fill(150);
  rect(200, 300, 200, 50);
  textSize(25);
  fill(0);
  text("CRÉDITOS", 200, 300);

}

function jogo() {
  background(80)  
  ellipse(350,350,50,50)

  rectMode(CENTER);
  fill(150);
  rect(100, 375, 200, 50);
  textAlign(LEFT, CENTER)  
  textSize(35);
  fill(0);
  text("VOLTAR", 25, 375);



}

function menuInstruções() {
  textSize(25);
  textAlign(CENTER, CENTER);
  text("Estoure os balões da cor indicada!", 200, 150 );
  
  rectMode(CENTER);
  fill(150);
  rect(100, 375, 200, 50);
  textAlign(LEFT, CENTER)  
  textSize(35);
  fill(0);
  text("VOLTAR", 25, 375);

}

function menuCréditos() {
  textSize(45);
  textAlign(CENTER, CENTER);
  text("pedro felipe!", 200, 150 );
  
  rectMode(CENTER);
  fill(150);
  rect(100, 375, 200, 50);
  textAlign(LEFT, CENTER)  
  textSize(35);
  fill(0);
  text("VOLTAR", 25, 375);


}
