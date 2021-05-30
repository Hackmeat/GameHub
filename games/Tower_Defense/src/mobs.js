class Mobs {

    constructor(screenWidth, screenHeight, level, difficulty, waves, startX, startY) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.level = level;
        this.difficulty = difficulty;
        this.waves = waves;
        this.xPos = startX;
        this.yPos = startY;
        //this.mapArray = mapArray;

        //--------------------------------------------------------- 
        //For calculating the right positions for every screen size
        //and taking the base from HD (1280x720)

        let xMult = this.screenWidth / 1280;
        let yMult = this.screenHeight / 720;

        //---------------------------------------------------------  
        //Make console.log without crashing browser windows
        this.logMade = false;
        /** if(!this.logMade){
                console.log()
                this.logMade = true;
            }
        */

        //--------------------------------------------------------
        //From class Level

        let size = 40;

        this.levelSizeX = size * xMult;
        this.levelSizeY = size * yMult;
        this.elementGrass = 0;
        this.elementWalkWay = 1;

        //--------------------------------------------------------
        //Mob values

        size = 30;
        let margin = 5;

        this.speedOneX = 0;
        this.speedOneY = 0;
        this.healthOne = 100 * this.difficulty;
        this.sizeOneX = size * xMult;
        this.sizeOneY = size * yMult;
        this.marginOneX = margin * xMult;
        this.marginOneY = margin * yMult;

        this.moveDirection = "right";


        this.initComplete = false;
    }

    draw(ctx, interpolationPercentage) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.xPos, this.yPos - this.sizeOneY / 2, this.sizeOneX, this.sizeOneY)
    }

    update(delta) {
        if (!this.initComplete) {
            console.log("--Mob created")
            this.initComplete = true;
        }
    }
/*
    movement(delta, mapArray) {
        let temp = 0;
            switch (this.moveDirection) {
                case "right":
                    if (Number.isInteger(this.xPos / this.levelSizeX)){
                        temp = this.getArrayX(this.xPos / this.levelSizeX, this.yPos / this.levelSizeY);
                    }

            }
    }

    getArrayX(x){

    }*/
}