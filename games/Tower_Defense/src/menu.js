class Menu{

    constructor(width, height){
        this.screenWidth = width;
        this.schreenHeight = height;
        
    //
    //for calculating the right positions for every screen size
    //and taking the base from HD (1280x720)
    //

        let xMult = this.screenWidth / 1280
        let yMult = this.schreenHeight / 720
        
        this.x = 640 * xMult;
        this.y = 380 * yMult;
        this.size = 100 * xMult;
        console.log("sos")
    }

    draw(ctx, interpolationPercentage){
        //ctx.fillStyle = "#00ffff"
        //this.drawButton(ctx, this.x, this.y, this.size);
        console.log("sos1")
    }

    update(delta){
        console.log("sos2")
    }

    drawButton(ctx, x, y, size){
        ctx.fillRect(x - (size / 2), y - (size / 2), size, size)     
 
    }
}