import Sprite from './Sprite.js'
import Player from './Player.js'
import Npc from './Npc.js'

export const canvas = document.querySelector('canvas');
export const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillRect(0,0, canvas.width, canvas.height);


// Instanciando jogador e inimigo:
const player = new Player({x: 150, y: 400}, 1, 'assets/sprites');
console.log("Player:" + player.position.x);

const enemy = new Npc({x: 350, y: 400}, 2, 'assets/sprites');
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
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update(keys);
    enemy.update();
    requestAnimationFrame(animate)
}
setTimeout(animate(), 1000)



// export {keyPress, keys}