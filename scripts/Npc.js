import { loadAudio, loadVideo, loadImage } from './assetLoader.js';
import Sprite from "./Sprite.js";


export default class Npc extends Sprite {
    constructor(position, type, path) {
        super(position, type, path);
        this.health = 100;
        this.stamina = 100;
    }
    
    
    update(keys){
        let keyArray = keys;
        this.drawBox('pink');
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