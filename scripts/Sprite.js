const c = canvas.getContext('2d');
const gravity = 0.3;
export default class Sprite{
constructor(position, type, path){
    this.position = position;//define posição do sprite no canvas
    this.width = 50;//define largura do sprite
    this.height = 150;//define altura do sprite
    this.velocity = {x: 0, y: 0};//define velocidade do eixo x e y
    this.type = type;//define se é tipo player ou tipo enemy
    this.path = path;//path da pasta raiz para os sprites
}

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(keys){
        let keyArray = keys;
        this.draw();
        this.velocity.y += gravity;
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        
        //detecta colisão com o chão
        const gravPull = ()=>{if(this.position.y + this.height > canvas.height){
            this.velocity.y = 0;
            this.position.y = canvas.height - this.height;
        }}

        //controle de input do player
        if(this.type == 1){
            if(keyArray.includes('w')){
                this.velocity.y -= -10;
            }if(keyArray.includes('a')){
                this.velocity.x = -1;
            }else if(keyArray.includes('d')){
                this.velocity.x = 1;
            }else{
                this.velocity.x = 0;
            }
        }
        gravPull()
    }


    // constructor(image, width, height, x, y){
    //     this.image = image;
    //     this.width = width;
    //     this.height = height;
    //     this.x = x;
    //     this.y = y;
    // }
    // draw(ctx){
    //     ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    // }
    // update(){
    //     this.x += 1;
    //     this.y += 1;
    // }
}