class Start {

    constructor(gameWidth, gameHeight, eventHandler) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.eventHandler = eventHandler;

        this.gameRunning = false;

        this.startButtonWidth = this.gameWidth / 9;
        this.startButtonHeight = this.gameHeight / 9;

        this.x = 10;
        this.y = 10;
        this.lastX, this.lastY;
        this.size = 10;
        this.speed = 0.05;
    }

    draw(ctx, interpolationPercentage) {
        this.startButtonDraw(ctx);
    }

    update(delta) {
        this.startButtonUpdate();
    }

    //Creating the start button
    startButtonDraw(ctx) {
        let width = this.startButtonWidth;
        let height = this.startButtonHeight;

        ctx.fillStyle = "#ffffff";

        this.roundedButton(this.gameWidth / 2 - width / 2, this.gameHeight / 2 - height / 2, width, height, "white", ctx);
        ctx.font = "40px Arial";
        ctx.fillText("START", this.gameWidth / 2 - 63, this.gameHeight / 2 + 20);
    }

    //Hover / mouse detection
    startButtonUpdate() {
        let mouseX = this.eventHandler.mouseX;
        let mouseY = this.eventHandler.mouseY;
        let width = this.startButtonWidth;
        let height = this.startButtonHeight;

        if (mouseX > this.gameWidth / 2 - width / 2 && mouseX < this.gameWidth / 2 + width / 2) {
            if (mouseY > this.gameHeight / 2 - height / 2 && mouseY < this.gameHeight / 2 + height / 2) {
                if (this.eventHandler.leftMousePressed == true) {
                    this.gameRunning = true;
                }
            }
        }
    }

    //A rounded button
    roundedButton(x, y, w, h, color, ctx) {
        var mx = x + w / 2;
        var my = y + h;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = "2";
        ctx.moveTo(x, my);
        ctx.quadraticCurveTo(x, y, mx, y);
        ctx.quadraticCurveTo(x + w, y, x + w, my);
        ctx.quadraticCurveTo(x + w, y + h, mx, y + h);
        ctx.quadraticCurveTo(x, y + h, x, my);
        ctx.stroke();
    }

}