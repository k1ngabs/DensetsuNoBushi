import {canvas, c} from './main.js';
import { loadAudio, loadVideo, loadImage } from './assetLoader.js';
import Collider from "./Collider.js";

const gravity = 0.1;
export default class Sprite{
constructor(position, path, cPos, offset={x: 0, y: 0}){
    this.position = position;//define posição do sprite no canvas
    this.width = 50;//define largura do sprite
    this.height = 150;//define altura do sprite
    this.velocity = {x: 0, y: 0};//define velocidade do eixo x e y
    this.image = new Image()// Renderizar a imagem no context 2d do canvas, a partir do src
    this.image.src = path;//path da pasta raiz para os sprites, para serem usados pelo objeto Image
    this.collider = new Collider(cPos, 50, 50)
    this.isAttacking = false;
    this.scale = 1;
    this.offset = offset;
    this.frame = {
        max: 1,
        current: 0,
        elapsed: 0,
        hold: 5,
        }
    }


    drawBox(){
        c.fillStyle = 'red';
        // c.fillRect(this.position.x, this.position.y, this.width, this.height);

        //collider
        if(this.isAttacking){
            c.fillRect(this.collider.position.x, this.collider.position.y, this.collider.width, this.collider.height)
            }
        }

    async drawBg(){
        // var bgGif = GIF();
        // await bgGif.load(this.image.src);
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
        )
    }


    async drawSprite(){
        //console.log(this.image)
        //debugger
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width * this.scale,
            this.height * this.scale,
        )
    }
    
    //detecta colisão com o chão
    gravPull(){
        if(this.position.y + this.height > canvas.height - (canvas.height/1.6))this.velocity.y = 0;
        else this.velocity.y += gravity;
    }

    attack(){
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false;
        }, 100);
    }   

}