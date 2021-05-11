class Level {

    constructor(width, height, eventHandler, level) {
        this.screenWidth = width;
        this.screenHeight = height;
        this.eventHandler = eventHandler;
        this.level = level;

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

        //---------------------------------------------------------------
        //Map based on 2D Array 32x18
        this.levelOne = [

            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //00
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //01
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //02
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //03
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //04
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //05
            [0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //06
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //07
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //08
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //09
            [0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //11
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //12
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //13
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //14
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //15
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //16
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //17
        ];
        this.elementGrass = 0;
        this.elementWalkWay = 1;
        this.elementBuildingSpot = 2;


        let size = 40;
        this.levelSizeX = size * xMult;
        this.levelSizeY = size * yMult;
        this.levelGrass = "#68FF33";
        this.levelWalkWay = "#A27600";
        this.levelBuildingSpot = "#FFCC2B";
        this.levelBuildingSpotHover = "#FFD655";

        //---------------------------------------------------------
        //Building a tower from scretch

        this.buildingHover = false;
        this.buildingHoverX = -1;
        this.buildingHoverY = -1;

        let marginTower = 30;
        this.buildingTowerMarginX = marginTower * xMult;
        this.buildingTowerMarginY = marginTower * yMult;

        this.buildingSelectionCancelColor = "#C60000"
        this.buildingSelectionColor = "#7A4FFF";
        this.buildingSelectionSizeX = size * xMult;
        this.buildingSelectionSizeY = size * yMult;

        this.buildingTypAmount = 4;
        this.openBuildingMenu = false;
        this.towerArray = [];

        //--------------------------------------------------------
        //For tower Preview
        this.previewTower = false;
        this.previewTowerID = 1;
        this.previewTowerX = 0;
        this.previewTowerY = 0;

        //--------------------------------------------------------
        //Start game
        let marginStart = 20
        this.start = false;
        this.startHover = false;
        this.startButtonX = this.screenWidth - (marginStart * xMult);
        this.startButtonY = this.screenHeight - (marginStart * yMult);
        this.startButtonSizeX = 100 * xMult;
        this.startButtonSizeY = 50 * yMult;
        this.startButtonColor = "#000000";
        this.startButtonHover = "#5E5E5E";
    }


    //--------------------------------------------------------
    //Drawing all functions

    draw(ctx, interpolationPercentage) {
        this.drawMap(ctx, interpolationPercentage, this.levelOne);
        if (this.towerArray.length != 0) {
            this.drawTower(ctx, interpolationPercentage, this.towerArray);
        }
        if (this.openBuildingMenu) {
            this.drawBuildingMenu(ctx, this.buildingHoverX, this.buildingHoverY, this.buildingTowerMarginX, this.buildingTowerMarginY,
                this.buildingTypAmount, this.buildingSelectionColor, this.buildingSelectionSizeX, this.buildingSelectionSizeY);
            if (this.previewTower) {
                this.drawTowerPreview(ctx, interpolationPercentage, this.previewTowerID, this.previewTowerX, this.previewTowerY, this.levelSizeX, this.levelSizeY);
            }
        }
        if (!this.start) {
            this.drawStartButton(ctx, this.startButtonX, this.startButtonY, this.startButtonSizeX, this.startButtonSizeY, this.startButtonColor, this.startButtonHover, this.startHover);
        }
    }


    //----------------------------------------------------------------
    //Updating all

    update(delta) {
        this.xMouse = this.eventHandler.xMouse;
        this.yMouse = this.eventHandler.yMouse;
        this.leftMousePressed = this.eventHandler.leftMousePressed;
        if (!this.constructComplete) {
            console.log("--Level " + this.level + " Construct Complete");
            this.constructComplete = true;
        }
        this.updateTowerBulding(delta, this.levelOne, this.levelSizeX, this.levelSizeY, this.xMouse, this.yMouse)
        if (this.openBuildingMenu) {
            this.updateBuildingMenu(delta, this.buildingHoverX, this.buildingHoverY, this.buildingTowerMarginX, this.buildingTowerMarginY,
                this.buildingTypAmount, this.buildingSelectionSizeX, this.buildingSelectionSizeY, this.xMouse, this.yMouse);
        }
        if (this.towerArray.length != 0) {
            this.updateTower(delta, this.towerArray);
        }
        if (!this.start) {
            this.updateStartButton(this.startButtonX, this.startButtonY, this.startButtonSizeX, this.startButtonSizeY, this.xMouse, this.yMouse, this.leftMousePressed);
        }
    }

    //---------------------------------------------------------------------
    //Drawing the current map

    drawMap(ctx, interpolationPercentage, array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[0].length; j++) {
                this.drawMapElement(ctx, j, i, this.levelSizeX, this.levelSizeY, array[i][j]);
            }
        }
    }

    drawMapElement(ctx, x, y, xSize, ySize, item) {
        switch (item) {
            case this.elementGrass:
                ctx.fillStyle = this.levelGrass;
                break;
            case this.elementWalkWay:
                ctx.fillStyle = this.levelWalkWay;
                break;
            case this.elementBuildingSpot:
                if (this.buildingHover && this.buildingHoverX == x && this.buildingHoverY == y) {
                    ctx.fillStyle = this.levelBuildingSpotHover;
                } else {
                    ctx.fillStyle = this.levelBuildingSpot
                }
                break;
        }

        ctx.fillRect(x * xSize, y * ySize, xSize, ySize)
    }

    //---------------------------------------------------------
    //Updating the state of building a tower

    updateTowerBulding(delta, array, xSize, ySize, xMouse, yMouse) {
        this.buildingHover = false;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[0].length; j++) {
                if (array[i][j] == this.elementBuildingSpot) {
                    if (xMouse > j * xSize && xMouse < j * xSize + xSize && yMouse > i * ySize && yMouse < i * ySize + ySize && !this.openBuildingMenu) {
                        this.buildingHover = true;
                        this.buildingHoverX = j;
                        this.buildingHoverY = i;
                        if (this.leftMousePressed) {
                            this.openBuildingMenu = true;
                            console.log(this.buildingHoverX + ", " + this.buildingHoverY)
                        }
                    }
                }
            }
        }
    }

    //---------------------------------------------------------
    //Drawing the building menu, selecting from *amount* tower

    drawBuildingMenu(ctx, x, y, marginX, marginY, amount, color, xSize, ySize) {

        ctx.fillStyle = color;
        if (amount - 3 >= 2) {
            //If more then 4 tower types
        } else if (amount - 2 <= 2) {
            //if 4 or less
            ctx.fillRect(x * xSize - (marginX / 2) - (xSize / 2), y * ySize - marginY - ySize, xSize, ySize); // top left selector
            ctx.fillRect(x * xSize + (marginX / 2) + (xSize / 2), y * ySize - marginY - ySize, xSize, ySize); // rop right
            ctx.fillRect(x * xSize - marginX - xSize, y * ySize, xSize, ySize); //middle left
            ctx.fillRect(x * xSize + marginX + xSize, y * ySize, xSize, ySize); //middle right 
        }
        ctx.fillStyle = this.buildingSelectionCancelColor;
        ctx.fillRect(x * xSize, y * ySize + ySize + marginY, xSize, ySize); // red cancel build button
    }

    updateBuildingMenu(delta, x, y, marginX, marginY, amount, xSize, ySize, xMouse, yMouse) {

        //If statemant copyed from above fillRext in drawBuildingMenu
        this.previewTower = false;
        this.previewTowerID = 0;
        this.previewTowerX = 0;
        this.previewTowerY = 0;
        let selectedID = 0

        if (xMouse > x * xSize - (marginX / 2) - (xSize / 2) && xMouse < x * xSize - (marginX / 2) + (xSize / 2) &&
            yMouse > y * ySize - marginY - ySize && yMouse < y * ySize - marginY) {
            this.previewTower = true;
            this.previewTowerID = 1;
            this.previewTowerX = x;
            this.previewTowerY = y;
        }

        if (xMouse > x * xSize + (marginX / 2) + (xSize / 2) && xMouse < x * xSize + (marginX / 2) + (xSize / 2) + xSize &&
            yMouse > y * ySize - marginY - ySize && yMouse < y * ySize - marginY) {
            this.previewTower = true;
            this.previewTowerID = 2;
            this.previewTowerX = x;
            this.previewTowerY = y;
        }

        if (xMouse > x * xSize - marginX - xSize && xMouse < x * xSize - marginX && yMouse > y * ySize && yMouse < y * ySize + ySize) {
            this.previewTower = true;
            this.previewTowerID = 3;
            this.previewTowerX = x;
            this.previewTowerY = y;
        }

        if (xMouse > x * xSize + marginX + xSize && xMouse < x * xSize + marginX + (xSize * 2) && yMouse > y * ySize && yMouse < y * ySize + ySize) {
            this.previewTower = true;
            this.previewTowerID = 4;
            this.previewTowerX = x;
            this.previewTowerY = y;
        }

        if (xMouse > x * xSize && xMouse < x * xSize + xSize && yMouse > y * ySize + ySize + marginY && yMouse < y * ySize + (ySize * 2) + marginY && this.leftMousePressed) {
            this.previewTower = false;
            this.previewTowerID = 0;
            this.previewTowerX = 0;
            this.previewTowerY = 0;
            this.openBuildingMenu = false;
            console.log("--Tower building cancled");
        }


        if (this.previewTower && this.leftMousePressed) {
            selectedID = this.previewTowerID;
            //Need check for enough currency
            this.towerArray.push(new Tower(this.screenWidth, this.screenHeight, selectedID, x * xSize, y * ySize, 1, false, this.eventHandler))
            this.openBuildingMenu = false;
        }

    }

    drawTowerPreview(ctx, interpolationPercentage, ID, x, y, xSize, ySize) {
        let tempTower = new Tower(this.screenWidth, this.screenHeight, ID, x * xSize, y * ySize, 1, this.previewTower, this.eventHandler);
        tempTower.draw(ctx, interpolationPercentage);
    }

    //---------------------------------------------------------
    //Drawing and updating all tower elements

    drawTower(ctx, interpolationPercentage, array) {
        for (let i = 0; i < array.length; i++) {
            this.towerArray[i].draw(ctx, interpolationPercentage);
        }
    }

    updateTower(delta, array) {
        for (let i = 0; i < array.length; i++) {
            this.towerArray[i].update(delta);
            if (this.openBuildingMenu && this.towerArray[i].hover) {
                this.towerArray[i].hover = false;
            }
        }
    }

    //---------------------------------------------------------
    //Start button, to start wave of monsters

    drawStartButton(ctx, x, y, xSize, ySize, color, hoverColor, hoverBoolean) {

        if (hoverBoolean) {
            ctx.strokeStyle = hoverColor;
        } else {
            ctx.strokeStyle = color;
        }
        ctx.strokeRect(x - xSize, y - ySize, xSize, ySize)
    }

    updateStartButton(x, y, xSize, ySize, xMouse, yMouse, leftClick) {
        this.startHover = false;
        if (xMouse > x - xSize && xMouse < x && yMouse > y - ySize && yMouse < y){
            this.startHover = true;
            if(leftClick){
                this.start = true;
                console.log("--Round 1 starting")
            }
        }
    }
}