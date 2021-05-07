class GameOverlay {

    constructor(gameWidth, gameHeight, elementSelection, gameScreen) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.elementSelection = elementSelection;
        this.gameScreen = gameScreen;

        this.currentRound = 1;
        this.score = 0;
    }

    draw(ctx, interpolationPercantage) {
        this.drawScore(ctx);
        this.drawRound(ctx);
    }

    update(delta) {
        this.currentRound++;

        //Increasing element amount after a certain time
        this.gameScreen.elementAmount = Math.floor(this.currentRound / 3) + 2;
        //Some maths for the score
        this.score += this.gameScreen.elementAmount * 100;
    }

    //Drawing the score
    drawScore(ctx) {
        ctx.font = "40px Arial";
        ctx.fillStyle = "#ffffff"
        ctx.fillText("SCORE: " + this.score, this.gameWidth / 15, this.gameHeight / 10)
    }

    //Drawing the rounds
    drawRound(ctx) {
        ctx.font = "40px Arial";
        ctx.fillStyle = "#ffffff"
        ctx.fillText("ROUND: " + this.currentRound, this.gameWidth / 15 * 12, this.gameHeight / 10)
    }

}