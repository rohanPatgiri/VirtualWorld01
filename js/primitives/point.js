class Point{
    constructor (x,y){
        // We set this parameter values as class attributes
        this.x = x;
        this.y = y;
    }

    equals(point){
     return this.x == point.x && this.y == point.y;
    }

    
draw (ctx, {size = 18, color = "black", outline = false, fill = false} = {}){
    const rad = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
    ctx.fill();
    // in Video 2
    if (outline){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "yellow";
        ctx.arc(this.x, this.y, rad * 0.6, 0, Math.PI * 2);
        ctx.stroke();
    }
    if (fill){
        ctx.beginPath();
        ctx.arc(this.x, this.y, rad * 0.4,0, Math.PI *2 );
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }
}


}