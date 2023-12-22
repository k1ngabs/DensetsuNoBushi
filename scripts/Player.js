import Collider from "./Collider.js";
import Sprite from "./Sprite.js";
import { loadAudio, loadVideo, loadImage } from "./assetLoader.js";
import { canvas, c } from "./main.js";

export default class Player extends Sprite {
  constructor(position, type, path) {
    super(position, type, path);
    this.health = 100;
    this.stamina = 100;
  }

  async loadState() {
    this.state = {
      Idle: await loadImage(this.image.src + "/Idle.png"),
      Run: await loadImage(this.image.src + "/Run.png"),
      Jump: await loadImage(this.image.src + "/Jump.png"),
    };
  }

  drawPlayer(TotalFrames) {
    this.frame.max = TotalFrames;
    this.scale = 7.5;
    c.drawImage(
      this.image,
      this.frame.current * (this.image.width / this.frame.max),
      0,
      this.image.width / this.frame.max,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      this.width * this.scale,
      this.height * this.scale
    );
  }

  frameUpdate() {
    this.frame.elapsed++;
    if (this.frame.elapsed % this.frame.hold === 0) {
      if (this.frame.current < this.frame.max - 1) {
        this.frame.current++;
      } else {
        this.frame.current = 0;
      }
    }
  }

  stateMachine(state) {
    switch (state) {
      case "Idle":
        this.image.src = "./assets/Player/Idle.png";
        this.state = "Idle";
        this.drawPlayer(8);
        break;
      case "Run":
        this.image.src = "./assets/Player/Run.png";
        this.state = "Run";
        this.drawPlayer(8);
        break;
      case "Jump":
        this.image.src = "./assets/Player/Jump.png";
        this.state = "Jump";
        this.drawPlayer(2);
        break;
      case "Attack":
        this.image.src = "./assets/Player/Attack1.png";
        this.state = "Attack";
        this.drawPlayer(6);
        break;
    }
  }

  update(keys) {
    this.loadState()
    this.frameUpdate();
    let keyArray = keys;
    //this.drawSprite();
    //this.drawBox('red');

    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    //Update de posição do collider
    this.collider.position.x = this.position.x + 50;
    this.collider.position.y = this.position.y;

    //controle de input do player
    if (keyArray.length != 0) {
      if (keyArray.includes(" ")) {
        this.attack();
        this.stateMachine("Attack");
      } else if (keyArray.includes("w")) {
        this.stateMachine("Jump");
        this.position.y -= 10;
      } else if (keyArray.includes("a")) {
        this.stateMachine("Run");
        this.velocity.x = -5;
      } else if (keyArray.includes("d")) {
        this.stateMachine("Run");
        this.velocity.x = 5;
      } else {
        this.stateMachine("Idle");
      }
    } else {
      this.stateMachine("Idle");
      this.velocity.x = 0;
    }
    // if(keyArray.length == 0){
    //     this.image = this.state.Idle;
    // }
    this.gravPull();
    // console.log("Player:" + this.position.x);
    // console.log("Player:" + this.position.y);
  }
}
