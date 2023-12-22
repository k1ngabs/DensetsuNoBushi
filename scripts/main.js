import Sprite from './Sprite.js'
import Player from './Player.js'
import Npc from './Npc.js'
import { loadAudio, loadVideo, loadImage } from './assetLoader.js';

export const canvas = document.querySelector('canvas');
export const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillRect(0,0, canvas.width, canvas.height);

// Instanciando background:
const bg = new Sprite({x: 0, y:0}, './assets/Background/bg1.gif');
const bg2 = await loadVideo('./assets/Background/bg1.webm');

//instanciando background music:
const bgMusic = await loadAudio('./assets/Music/YasuhaFlydayChinatown16bit.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.2;

// Instanciando jogador e inimigo:
const player = new Player({x: 100, y: 180}, './assets/Player',{x: 400, y: 600}, {x: 215, y: 180});
player.scale = 3;
console.log("Player:" + player.position.x);

const enemy = new Npc({x: 950, y: 600}, './assets/Enemy',{x: 900, y: 600});
console.log("Enemy:" + enemy.position.x);

//Captura de teclas
let keys = [];
window.addEventListener('keydown',event=>{
    if (!keys.includes(event.key)) {
        keys.push(event.key);
        }
        //console.log(keys);
    })
window.addEventListener('keyup',event=>{
    var index = keys.indexOf(event.key);
        if (index > -1) {
        keys.splice(index, 1);
        }
        //console.log(keys);
    })    

// Loop de Animação:
function animate(){
    bgMusic.play();
    //c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    bg.drawBg()
    player.update(keys);
    player.drawBox();
    enemy.update();
    detectCollision(player, enemy)
    requestAnimationFrame(animate)
    //console.log("Player:" + player.collider.position.x + " " + player.collider.position.y);
    //console.log("Enemy:" + enemy.collider.position.x + " " + enemy.collider.position.y);
}
//setTimeout(animate(), 33)
animate()

//Detecta colisão
function detectCollision(player, enemy){
    if( player.collider.position.x + player.collider.width >= enemy.position.x &&
        player.collider.position.x + player.collider.width <= enemy.position.x + enemy.width &&
        player.collider.position.y + player.collider.height >= enemy.position.y + enemy.height &&
        player.isAttacking){
        
        console.log("Player colidiu")
        player.isAttacking = false;
    }

    if(enemy.collider.position.x <= player.position.x + player.collider.width && enemy.collider.position.y <= player.position.y + player.collider.height && enemy.isAttacking){
        console.log("Enemy colidiu");
        enemy.isAttacking = false;
    }
}


// export {keyPress, keys}