class Mobs {

    constructor(screenWidth, screenHeight, level, difficulty, waves, startX, startY, mapArray) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.level = level;
        this.difficulty = difficulty;
        this.waves = waves;
        this.xPos = startX;
        this.yPos = startY;
        this.mapArray = mapArray;

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

        this.speedOneX = 1 * xMult;
        this.speedOneY = 1 * yMult;
        this.healthOne = 100 * this.difficulty;
        this.sizeOneX = size * xMult;
        this.sizeOneY = size * yMult;
        this.marginOneX = margin * xMult;
        this.marginOneY = margin * yMult;

        this.moveDirection = "right";
        this.moveAmountX = Math.floor(this.xPos/ this.levelSizeX);
        this.moveAmountY = Math.floor(this.yPos / this.levelSizeY);


        this.initComplete = false;
    }

    draw(ctx, interpolationPercentage) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.xPos, this.yPos + this.marginOneY , this.sizeOneX, this.sizeOneY)
    }

    update(delta) {
        if (!this.initComplete) {
            console.log("--Mob created")
            this.initComplete = true;
        }
        this.movement(delta)
        
    }

    movement(delta) {
        let temp = 0;
            switch (this.moveDirection) {
                case "right":   
                this.xPos += this.speedOneX;                     
                    if (this.moveAmountX < Math.floor(((this.xPos + this.marginOneX + this.sizeOneX) / this.levelSizeX))){
                        temp = this.getArray(Math.floor(((this.xPos + this.marginOneX + this.sizeOneX) / this.levelSizeX)), Math.floor((this.yPos / this.levelSizeY)));                    
                        this.moveAmountX = Math.floor(((this.xPos + this.marginOneX + this.sizeOneX) / this.levelSizeX));                      
                        if(temp != this.elementWalkWay){
                            //Checking above
                            if(this.getArray(Math.floor(((this.xPos + this.marginOneX + this.sizeOneX) / this.levelSizeX)), Math.floor(((this.yPos - this.levelSizeY) / this.levelSizeY ))) == this.elementWalkWay){
                                this.moveDirection = "up";  
                                console.log("Up");                              
                            }
                            //Checking below
                            if(this.getArray(Math.floor(((this.xPos + this.marginOneX + this.sizeOneX) / this.levelSizeX)), Math.floor(((this.yPos + this.levelSizeY) / this.levelSizeY ))) == this.elementWalkWay){
                                this.moveDirection = "down";  
                                console.log("Down");                              
                            }
                            
                        }
                    }
                    
                    break;
                case "down":
                    this.yPos += this.speedOneY;
                    if (this.moveAmountY < Math.floor(((this.yPos + (this.marginOneY * 2) + this.sizeOneY) / this.levelSizeY))){
                        temp = this.getArray(Math.floor((this.xPos / this.levelSizeX)), Math.floor(((this.yPos + this.marginOneY + this.sizeOneY) / this.levelSizeY)));                    
                        this.moveAmountY = Math.floor(((this.yPos + this.marginOneY + this.sizeOneY) / this.levelSizeY));
                        if(temp != this.elementWalkWay){
                            //Checking right
                            console.log("x:" + Math.floor(((this.xPos + this.levelSizeX) / this.levelSizeX)) +  ", y: " + Math.floor(((this.yPos) / this.levelSizeY)))
                            console.log("ArrayValue: " + this.getArray(Math.floor(((this.xPos + this.levelSizeX) / this.levelSizeX)), Math.floor(((this.yPos) / this.levelSizeY))))
                            if(this.getArray(Math.floor(((this.xPos + this.levelSizeX) / this.levelSizeX)), Math.floor((this.yPos  / this.levelSizeY)))){
                                //this.yPos = this.yPos - this.marginOneY
                                this.moveDirection = "right";
                                console.log("Right");
                            }
                        }
                    }
                    
                    break;
            }
    }

    getArray(x, y){
        return this.mapArray[y][x];
    }
}