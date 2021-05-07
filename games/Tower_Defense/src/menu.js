class Menu {

    constructor(width, height, eventHandler) {
        this.screenWidth = width;
        this.screenHeight = height;
        this.eventHandler = eventHandler;

        //---------------------------------------------------------  
        //Comment example

        //---------------------------------------------------------  
        //Make console.log without crashing browser windows
        this.logMade = false;
        /** if(!this.logMade){
                console.log()
                this.logMade = true;
            }
        */


        //--------------------------------------------------------- 
        //For calculating the right positions for every screen size
        //and taking the base from HD (1280x720)

        let xMult = this.screenWidth / 1280;
        let yMult = this.screenHeight / 720;

        //---------------------------------------------------------  
        //All Buttons, Start, exit, etc...

        this.continueString = "Continue";
        this.mapString = "Map Selection";
        this.exitString = "Exit";

        this.currentHover = 0;
        this.hover = false;
        this.amountButton = 3;
        this.spaceButton = 25 * yMult;
        this.xButton = 640 * xMult;
        this.yButton = 380 * yMult;
        this.xSizeButton = 220 * xMult;
        this.ySizeButton = 35 * yMult;
        this.colorDefault = "#ffffff";
        this.colorHover = "#ff8800";

        //---------------------------------------------------------  
        //Font Settings

        this.font = "Courier New";
        this.fontSize = 25 * xMult;
        this.fontSizeY = 25 * yMult;
        //Adaption of font to px
        this.multi = this.xSizeButton / (14 * this.fontSize) + 1;
        

        //---------------------------------------------------------  
        //Title and developer
        this.titleX = 640 * xMult;
        this.titleY = 120 * yMult;
        this.title = "Tower Defense"
        this.developer = "by Hackmeat"

        console.log("--Construct Complete");
    }

    draw(ctx, interpolationPercentage) {
        this.drawMenuButtons(ctx, this.amountButton, this.xButton, this.yButton, this.xSizeButton, this.ySizeButton, this.spaceButton);

        this.drawTitle(ctx, this.titleX, this.titleY, this.title, this.developer, this.fontSize);
    }

    update(delta) {
        this.xMouse = this.eventHandler.xMouse;
        this.yMouse = this.eventHandler.yMouse;

        this.updateMenuButtons(this.amountButton, this.xButton, this.yButton, this.xSizeButton, this.ySizeButton, this.spaceButton)
    }

    //---------------------------------------------------------  
    //Buttons created and checked for mouse events

    drawMenuButtons(ctx, amount, x, y, xSize, ySize, ySpace) {
        let startY = y - (ySize * amount / 2) - (ySpace * (amount - 1) / 2);
        let startX = x - (xSize / 2);
        for (let i = amount; i > 0; i--) {
            if (this.hover && this.currentHover == i) {
                ctx.strokeStyle = this.colorHover;
                ctx.fillStyle = this.colorHover;
            } else {
                ctx.strokeStyle = this.colorDefault;
                ctx.fillStyle = this.colorDefault;
            }
            ctx.strokeRect(startX, startY, xSize, ySize);
            ctx.font = this.fontSize + "px " + this.font;
            switch (i) {
                case 1:
                    ctx.fillText(this.exitString, startX + 3 + ((xSize - (this.exitString.length * this.fontSize / this.multi)) / 2), startY + this.fontSizeY)
                    break;
                case 2:
                    ctx.fillText(this.mapString, startX + 3 + ((xSize - (this.mapString.length * this.fontSize / this.multi)) / 2), startY + this.fontSizeY)
                    break;
                case 3:
                    ctx.fillText(this.continueString, startX + 3 + ((xSize - (this.continueString.length * this.fontSize / this.multi)) / 2), startY + this.fontSizeY)
                    break;
            }
            startY = startY + ySpace + ySize;
        }
    }

    updateMenuButtons(amount, x, y, xSize, ySize, ySpace) {
        let startY = y - (ySize * amount / 2) - (ySpace * (amount - 1) / 2);
        let startX = x - (xSize / 2);
        this.hover = false;
        for (let i = amount; i > 0; i--) {

            if (startX < this.xMouse && startX + xSize > this.xMouse && startY < this.yMouse && startY + ySize > this.yMouse) {
                this.hover = true;
                this.currentHover = i;
                console.log(this.currentHover)
            }
            startY = startY + ySize + ySpace;
        }
    }
    //---------------------------------------------------------
    //Drawing title

    drawTitle(ctx, x, y, title, dev, size) {
        //Calc explanation: xPos - string.length * fontsize * how much bigger it should be / adaption of font to px
        ctx.font = size * 1.5 + "px " + this.font;
        let titleX = x - ((title.length * size * 1.5 / this.multi) / 2);
        ctx.fillText(title, titleX, y);
        ctx.font = this.fontSize * 0.7 + "px " + this.font;
        y = y + (size * 1.5);
        x = x - ((dev.length * size * 0.7 / this.multi) / 2);
        ctx.fillText(dev, x, y); 
    }
}