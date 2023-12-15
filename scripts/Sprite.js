import {canvas, c} from './main.js';

const gravity = 0.1;
export default class Sprite{
constructor(position, type, path){
    this.position = position;//define posição do sprite no canvas
    this.width = 50;//define largura do sprite
    this.height = 150;//define altura do sprite
    this.velocity = {x: 0, y: 0};//define velocidade do eixo x e y
    this.type = type;//define se é tipo player ou tipo enemy
    this.path = path;//path da pasta raiz para os sprites
}

    drawBox(color){
        c.fillStyle = color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    //detecta colisão com o chão
    gravPull(){
        if(this.position.y + this.height > canvas.height - (canvas.height/4))this.velocity.y = 0;
        else this.velocity.y += gravity;
    }


}