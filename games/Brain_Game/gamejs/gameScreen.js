class GameScreen {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;


        //Countdown
        this.setM = false;
        this.startCountdown = true;
        this.drawCountdown = true;
        this.hasStarted = false;
        this.countdown = 3;

        //
        this.objectAmount = 4;
        this.colorAmount = 5;
        this.elementCreated = false;
        this.elementArray = [];
        this.elementAmount = 2;

        //
        this.allArrived = false;
    }



    draw(ctx, interpolationPercentage) {
        this.gameBorder(ctx);
        if (this.drawCountdown) {
            this.countdownDraw(ctx);
        }
        this.droppingElementDraw(ctx, interpolationPercentage)
    }

    update(delta) {
        this.countdownUpdate();
        if (!this.elementCreated && this.hasStarted) {
            this.creatDroppingElement(this.elementAmount);
        }
        this.droppingElementUpdate(delta);
    }



    //Drawing the playborder

    gameBorder(ctx) {
        let x1 = this.gameWidth / 3;
        let x2 = this.gameWidth / 3 * 2;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(x1, 0, 2, 1080);
        ctx.fillRect(x2, 0, 2, 1080);
    }

    //Counting down to 0, start game

    countdownUpdate() {
        if (this.startCountdown) {
            let d = new Date();
            let n = d.getTime();
            n = n / 1000;
            if (!this.setM) {
                this.m = n;
                this.setM = true;
            }
            if (n - this.m > 1) {
                this.m = n;
                this.drawCountdown = true;
                this.countdown--;
            }
            if (this.countdown == 0) {
                this.hasStarted = true;
                this.startCountdown = false;
                this.drawCountdown = false;
            }
        }
    }

    //Drawing countdown

    countdownDraw(ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "40px Arial";
        if (this.countdown > 1) {
            ctx.fillText(this.countdown - 1 + "", this.gameWidth / 2 - 5, this.gameHeight / 2);
        }
        if (this.countdown == 1) {
            ctx.fillText("GO", this.gameWidth / 2 - 25, this.gameHeight / 2);
        }
    }

    //Creat, update, draw Dropping Elements

    creatDroppingElement(amount) {
        for (let i = amount; i > 0; i--) {
            let x = Math.floor(Math.random() * (this.gameWidth / 3 - 30)) + this.gameWidth / 3;
            let y = -(Math.floor(Math.random() * 200));
            let objectID = Math.floor(Math.random() * this.objectAmount) + 1;
            let colorID = Math.floor(Math.random() * this.colorAmount) + 1;
            this.elementArray.push(new DroppingElement(x, y, objectID, colorID, 2));
        }
        this.elementCreated = true;
        console.log(this.elementArray)
    }

    //Opens the selction tab after all objects dropped out of the window
    droppingElementUpdate(delta) {
        for (let element of this.elementArray) {
            this.allArrived = true;
            if (!element.arrived) {
                element.update(delta);
                this.allArrived = false
            }
        }
    }

    droppingElementDraw(ctx, interpolationPercentage) {
        for (let element of this.elementArray) {
            element.draw(ctx, interpolationPercentage);
        }
    }
}