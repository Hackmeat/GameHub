class Tower{

    constructor(screenWidth, screenHeight, towerID, towerX, towerY, towerLevel){
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.towerID = towerID;
        this.towerX = towerX;
        this.towerY = towerY;
        this.towerLevel = towerLevel;

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
        this.constructComplete = false;

        //--------------------------------------------------------
        //Tower settings
        let towerSize = 80;
        this.towerSizeX = towerSize * xMult;
        this.towerSizeY = towerSize * yMult;
    }

    draw(ctx, interpolationPercentage){
        ctx.fillStyle ="#0FF8FF";
        ctx.fillRect(this.towerX - (this.towerSizeX / 4), this.towerY - (this.towerSizeY / 4), this.towerSizeX, this.towerSizeY);
    }

    update(){

        if (!this.constructComplete) {
            console.log("--Tower x: " + this.towerX + ", y: " + this.towerY + " Construct Complete");
            this.constructComplete = true;
        }
    }

}