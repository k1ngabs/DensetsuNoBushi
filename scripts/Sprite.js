const c = canvas.getContext('2d');
const gravity = 0.5;
export default class Sprite{
constructor(position){
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.velocity = {x: 0, y: gravity};
}

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.draw();

        if(this.position.x + this.width >= canvas.width){
            this.velocity.x = 0;
        } else this.position.x += this.velocity;
        if(this.position.y >= canvas.height){
            this.velocity.y = 0;
        } else this.position.y += this.gravity;
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
}