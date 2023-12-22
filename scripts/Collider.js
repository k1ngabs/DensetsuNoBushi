import {canvas, c} from './main.js'

export default class Collider{

    constructor(position, width, height) {
		this.position= position;
		this.width = width
		this.height = height
		// this.color = '#00';
		// this.line = 3
        this.collision = false;
	}

	drawCollider(c) {
		this.circ(c,
			this.position.x,
			this.position.y,
			this.width,
			this.height,
			this.line,
			this.color,)
	}

	circ(c, pos_x, pos_y, radius, line, color, fill = false) {
		c.lineWidth = line;
		c.strokeStyle = color
		c.beginPath();
		c.arc(pos_x, pos_y, radius, 0, Math.PI*2);
		c.stroke();
		if (fill) {
			ctx.fillStyle = fill
			ctx.fill()
		}
	}
	
	updatePosition(x,y){
        this.positionX = x
        this.positionY = y
    }

	collide(circ) {
		//return Math.abs(this.x-circ.x) < (this.size+circ.size)*0.9
		//	   && Math.abs(this.y-circ.y) < (this.size+circ.size)*0.9
		//console.log(Math.sqrt(((this.x-circ.x)**2)+((this.y-circ.y)**2)))
	    return Math.sqrt(((this.x-circ.x)**2)+((this.y-circ.y)**2)) <= this.size +circ.size		
	}

}