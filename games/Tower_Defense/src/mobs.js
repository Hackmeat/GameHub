class Mobs {

    constructor(screenWidth, screenHeight, level, difficulty, waves, startX, startY){
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.level = level;
        this.difficulty = difficulty;
        this.waves = waves;
        this.startX = startX;
        this.startY = startY;

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

        let size = 30;

        this.speedOneX = 1;
        this.speedOneY = 1;
        this.healthOne = 100 * this.difficulty;
        this.sizeOneX = size * xMult;
        this.sizeOneY = size * yMult;
        

        this.initComplete = false;
    }

    draw(ctx, interpolationPercentage){
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.startX, this.startY - this.sizeOneY / 2, this.sizeOneX, this.sizeOneY)
    }

    update(delta){
        if(!this.initComplete){
            console.log("--Mob created")
            this.initComplete = true;
        }
    }
}