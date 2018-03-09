
var canvas = document.getElementById('canvas');
var Pizarra = canvas.getContext('2d');
var dx = -1;
var dy = -1;
    
class Rectangulo {
    
    constructor(posX, posY, velocidad) {
    this.height = 10
    this.width = 10;
    this.posX = posX;
    this.posY = posY;
    this.MaxX = 640;
    this.MaxY = 480;
    this.velocidad = velocidad;
    }
        
    drawRectangulo(Pizarra) {
        Pizarra.strokeStyle = "#FF0000";
        Pizarra.strokeRect(this.posX, this.posY, this.height, this.width);
    }
           
    moveRectangulo() {
        if(this.posX + dx >= this.MaxX || this.posX + dx < 0) {
            dx = -dx;
        }

        if(this.posY + dy >= this.MaxY || this.posY + dy < 0) {
            dy = -dy;
        }               
        this.posX += dx;
        this.posY += dy;
    }
  
};

var rectangulos = new Array(50); 

for (let index = 0; index < rectangulos.length; index++) {
    rectangulos[index] = new Rectangulo(getRandomInt(10,640), getRandomInt(10,640), 1);    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Borrar(Pizarra) {
    Pizarra.clearRect(0, 0, 640, 480);
}

function Engine(Pizarra, rectangulos, Items) {
    Borrar(Pizarra);

    for (var i = 0; i < rectangulos.length; i++){
        rectangulos[i].moveRectangulo();
        rectangulos[i].drawRectangulo(Pizarra);
    }
}

var Timmings = window.setInterval(Engine, 100, Pizarra, rectangulos, 50);
    
Pizarra.stroke

