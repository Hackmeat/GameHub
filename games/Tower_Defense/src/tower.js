class Tower {

    constructor(screenWidth, screenHeight, towerID, towerX, towerY, towerLevel, preview, eventHandler) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.eventHandler = eventHandler;
        this.towerID = towerID;
        this.towerX = towerX;
        this.towerY = towerY;
        this.towerLevel = towerLevel;
        this.preview = preview;

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

        this.xMouse;
        this.yMouse;
        this.leftMousePressed;

        //--------------------------------------------------------
        //Hover and Upgrade
        this.hover = false;

        //--------------------------------------------------------
        //Tower settings
        let towerSize = 80;
        this.towerSizeX = towerSize * xMult;
        this.towerSizeY = towerSize * yMult;

        //--------------------------------------------------------
        //Tower 1
        this.tOneColor = "#0FF8FF";
        this.tOneRadius = 130 * xMult;
            
        //--------------------------------------------------------
        //Tower 2
        this.tTwoColor = "#0F49FF";
        this.tTwoRadius = 120 * xMult;

        //--------------------------------------------------------
        //Tower 3
        this.tThreeColor = "#A40FFF";
        this.tThreeRadius = 150 * xMult;

        //--------------------------------------------------------
        //Tower 4
        this.tFourColor = "#FF0FF4";
        this.tFourRadius = 200 * xMult;
    }

    draw(ctx, interpolationPercentage) {
        this.drawTower(ctx);
    }

    update(delta) {
        this.xMouse = this.eventHandler.xMouse;
        this.yMouse = this.eventHandler.yMouse;
        this.leftMousePressed = this.eventHandler.leftMousePressed;

        if (!this.constructComplete) {
            console.log("--Tower x: " + this.towerX + ", y: " + this.towerY + " Construct Complete");
            this.constructComplete = true;
        }
        this.hoverClickDetection(delta, this.xMouse, this.yMouse, this.leftMousePressed);
    }

    drawTower(ctx) {        
        switch (this.towerID) {
            case 1:
                ctx.fillStyle = this.tOneColor;
                break;
            case 2:
                ctx.fillStyle = this.tTwoColor;
                break;
            case 3:
                ctx.fillStyle = this.tThreeColor;
                break;
            case 4:
                ctx.fillStyle = this.tFourColor;
                break;

        }
        ctx.fillRect(this.towerX - (this.towerSizeX / 4), this.towerY - (this.towerSizeY / 4), this.towerSizeX, this.towerSizeY);
        if (this.preview || this.hover) {
            switch (this.towerID) {
                case 1:
                    this.drawCircle(this.towerX + (this.towerSizeX / 4), this.towerY + (this.towerSizeY / 4), this.tOneRadius);
                    break;
                case 2:
                    this.drawCircle(this.towerX + (this.towerSizeX / 4), this.towerY + (this.towerSizeY / 4), this.tTwoRadius);
                    break;
                case 3:
                    this.drawCircle(this.towerX + (this.towerSizeX / 4), this.towerY + (this.towerSizeY / 4), this.tThreeRadius);
                    break;
                case 4:
                    this.drawCircle(this.towerX + (this.towerSizeX / 4), this.towerY + (this.towerSizeY / 4), this.tFourRadius);
                    break;

            }
        }
    }

    drawCircle(x, y, radius) {
        ctx.fillStyle = "#ffffff"
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    hoverClickDetection(delta, xMouse, yMouse, leftClick){
        this.hover = false;;
        if(xMouse > this.towerX - (this.towerSizeX / 4) && xMouse < this.towerX - (this.towerSizeX / 4) + this.towerSizeX 
            && yMouse > this.towerY - (this.towerSizeY / 4) && yMouse < this.towerY - (this.towerSizeY / 4) + this.towerSizeY){
            this.hover = true;
        }
    }

}