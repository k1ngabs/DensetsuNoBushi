import Sprite from "./Sprite.js";

export default class Player extends Sprite {
  constructor(position, type, path) {
    super(position, type, path);
    this.health = 100;
    this.stamina = 100;
  }

  update(keys){
    let keyArray = keys;
    this.drawBox('red');
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    

    //controle de input do player
        if(keyArray.includes('w')){
            this.position.y -= 10;
        }if(keyArray.includes('a')){
            this.velocity.x = -1;
        }else if(keyArray.includes('d')){
            this.velocity.x = 1;
        }else{
            this.velocity.x = 0;
        }
    this.gravPull()
    // console.log("Player:" + this.position.x);
    // console.log("Player:" + this.position.y);
    }

}