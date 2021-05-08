class Level{

    constructor(width, height, eventHandler, level){
        this.width = width;
        this.height = height;
        this.eventHandler = eventHandler;
        this.level = level;
    }

    draw(ctx, interpolationPercentage){
        ctx.fillStyle = "#ff8800";
        ctx.fillRect(100, 100, 100, 100)
    }

    update(delta){
        this.xMouse = this.eventHandler.xMouse;
        this.yMouse = this.eventHandler.yMouse;
        if (!this.constructComplete) {
            console.log("--Level " + this.level+ " Construct Complete");
            this.constructComplete = true;
        }

    }

}