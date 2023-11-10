import Sprite from './Sprite.js'

const canvas = document.querySelector('canvas');
export const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 480;

c.fillRect(0,0, canvas.width, canvas.height);


// Instanciando jogador e inimigo:
const player = new Sprite({x: 100, y: 100}, 1, 'assets/sprites');
console.log(player.position.x);

const enemy = new Sprite({x: 200, y: 200}, 2, 'assets/sprites');
console.log(enemy.position.x);

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
    requestAnimationFrame(animate);
}
animate();



// export {keyPress, keys}