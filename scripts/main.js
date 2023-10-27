import Sprite from './Sprite.js'

const canvas = document.querySelector('canvas');
export const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 480;

c.fillRect(0,0, canvas.width, canvas.height);


// Instanciando jogador e inimigo:
const player = new Sprite({x: 100, y: 100});
console.log(player.position.x);

const enemy = new Sprite({x: 200, y: 200});
console.log(enemy.position.x);

// Loop de Animação:
function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemy.update();
}
animate();