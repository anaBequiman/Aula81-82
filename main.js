canvas = document.getElementById("pintura"); 
cxt = canvas.getContext("2d"); 
//color = "black"; 
//cxt.beginPath(); 
//cxt.strokeStyle = color; 
//cxt.lineWidth = 2; 
//cxt.arc(50,50,40,0,2*Math.PI); 
//cxt.stroke();
function minhaFuncao(e){
    positionX = e.clientX - canvas.offsetLeft;
    positionY = e.clientY - canvas.offsetTop;
    //circle (positionX, positionY)
}
//function circle(x, y){
    //cxt.beginPath(); 
    //cxt.strokeStyle = color; 
    //cxt.lineWidth = 2; 
    //cxt.arc(x,y,40,0,2*Math.PI); 
    //cxt.stroke();
//}
var posicaoAnteriorX = 0;
var posicaoAnteriorY = 0;
var acao = "mouse";
canvas.addEventListener("mousedown", meumousedown);
function meumousedown(e){
    acao = "Mouse clicado na tela";
}
canvas.addEventListener("mousemove", meumousemove);
function meumousemove(e){
    positionX = e.clientX - canvas.offsetLeft;
    positionY = e.clientY - canvas.offsetTop;
    if (acao == "Mouse clicado na tela"){
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.moveTo(posicaoAnteriorX, posicaoAnteriorY);
        ctx.lineTo(positionX, positionY);
        ctx.stroke();
    }
    posicaoAnteriorX = positionX;
    posicaoAnteriorY = positionY;
}
canvas.addEventListener("mouseup", meumouseup);
function meumouseup(e){
    acao = "Mouse não clicado na tela";
}