import { loadAudio, loadVideo, loadImage } from './assetLoader.js';
import Sprite from "./Sprite.js";
import Player from './Player.js'
import {canvas, c} from './main.js';


export default class Npc extends Sprite {
    constructor(position, type, path) {
        super(position, type, path);
        this.health = 100;
        this.stamina = 100;
    }
    
    drawNpc(TotalFrames){
        this.frame.max = TotalFrames
        this.scale = 7.5
        c.drawImage(
            this.image,
            this.frame.current * (this.image.width/this.frame.max),
            0,
            this.image.width/this.frame.max,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y,
            this.width * this.scale,
            this.height * this.scale,
        )
    }

    frameUpdate(){
        this.frame.elapsed++
        if(this.frame.elapsed % this.frame.hold === 0){
            if(this.frame.current < this.frame.max - 1){
                this.frame.current++
            }else{
                this.frame.current = 0
            }
        }
    }

    stateMachine(state){
        switch(state){
            case "Idle":
                this.image.src = './assets/Enemy/Idle.png';
                this.drawNpc(4);
                break
            case "Run": 
                this.image.src = './assets/Enemy/Run.png';
                this.drawNpc(8);
                break
            case "Jump": 
                this.image.src = './assets/Enemy/Jump.png';
                this.drawNpc(2);
                break
            case "Attack": 
                this.image.src = './assets/Enemy/Attack1.png';
                this.drawNpc(4);
                break
        }
    }


    update(player){
        this.drawNpc();
        this.frameUpdate()

        //if(player.state == idle)
        this.stateMachine('Idle')

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        
        

        //Update de posição do collider
        this.collider.position.x = this.position.x - 50
        this.collider.position.y = this.position.y

        this.gravPull()
        // console.log("Enemy:" + this.position.x);
        // console.log("Enemy:" + this.position.y);
        }

}