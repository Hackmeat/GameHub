class MapSelection {

    constructor(width, height, eventHandler, menu) {
        this.screenWidth = width;
        this.screenHeight = height;
        this.eventHandler = eventHandler;
        this.menu = menu;

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
        //Creating map by Array
        this.mapArray = [
            //position:
            //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//0
            [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//1
            [0, 4, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0],//2
            [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],//3
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0],//4
            [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//5
            [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0],//6
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0],//7
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//8
            [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//9
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//10
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//11
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//12
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//13
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//14
            //Legend -> 0: nothing, w: connection between maps, 
            //1 < map element equaling level
        ];
        let size = 40;
        let margin = 4;
        this.levelSizeX = size * xMult;
        this.levelSizeY = size * yMult;
        this.levelColor = "#00ff88";
        this.levelHoverColor = "#ff8800";
        this.levelHover = false;
        this.levelHoverID = 0;
        this.levelMarginX = margin * xMult;
        this.levelMarginY = margin * yMult;
        this.mapCenterX = (this.screenWidth - (this.mapArray[0].length * this.levelMarginX + this.mapArray[0].length * this.levelSizeX)) / 2;
        this.mapCenterY = (this.screenHeight - (this.mapArray.length * this.levelMarginY + this.mapArray.length * this.levelSizeY)) / 2;

        //---------------------------------------------------------
        //Managing levels and difficultys
        this.levelRunning = false;
        this.currentMaxLevel = 1;
        this.levelSelected = -1;
        this.startLevel = 0;
        this.difficulty = -1;
        this.difficultySelected = false;
        this.openDifSelector = false;
        this.easyColor = "#08FF00";
        this.normalColor = "#F3FF00";
        this.hardColor = "#FF0000";
        this.difHoverColor = "#FF00F0"
        this.easyHover = false;
        this.normalHover = false;
        this.hardHover = false;
        this.easy = 0.7;
        this.normal = 1.0;
        this.hard = 1.3;
        size = 100;
        this.difSelectorXSize = size * xMult;
        this.difSelectorYSize = size * yMult;


        //---------------------------------------------------------
        //Checking construction
        this.constructComplete = false;
    }

    draw(ctx, interpolationPercentage) {
        ctx.fillStyle = "#ff00ff";
        ctx.font = "25px Courier New";
        ctx.fillText("MapSelection", 10, 30);

        this.drawMap(ctx, this.mapArray);
    }

    update(delta) {
        this.xMouse = this.eventHandler.xMouse;
        this.yMouse = this.eventHandler.yMouse;
        if (!this.constructComplete) {
            console.log("--Map Selection Construct Complete");
            this.constructComplete = true;
        }

        this.updateHoverMapElement(this.mapArray, this.xMouse, this.yMouse, this.levelSizeX, this.levelSizeY, this.levelMarginX, this.levelMarginY)
    }

    drawMap(ctx, array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[0].length; j++) {
                if (array[i][j] != 0) {
                    this.drawMapElement(ctx, j, i, this.levelSizeX, this.levelSizeY, this.levelMarginX, this.levelMarginY, array[i][j]);
                }
            }
        }
    }

    drawMapElement(ctx, x, y, xSize, ySize, xMargin, yMargin, level) {
        if (this.levelHover && level == this.levelHoverID) {
            ctx.fillStyle = this.levelHoverColor;
        } else {
            ctx.fillStyle = this.levelColor;
        }
        ctx.fillRect(x * xSize + x * xMargin + this.mapCenterX, y * ySize + y * yMargin + this.mapCenterY, xSize, ySize);
        if (this.openDifSelector && level == this.levelSelected) {
            this.drawDifficultySelector(ctx, this.screenWidth / 2 - this.difSelectorXSize / 2, this.screenHeight / 2 - this.difSelectorYSize / 2, this.difSelectorXSize, this.difSelectorYSize, xMargin, yMargin);
        }
    }

    updateHoverMapElement(array, xMouse, yMouse, xSize, ySize, xMargin, yMargin) {
        if (!this.openDifSelector) {
            this.levelHover = false;
            this.levelHoverID = 0;
        }
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[0].length; j++) {
                if (array[i][j] != 0) {
                    if (xMouse > j * xSize + j * xMargin + this.mapCenterX && xMouse < j * xSize + j * xMargin + this.mapCenterX + xSize &&
                        yMouse > i * ySize + i * yMargin + this.mapCenterY && yMouse < i * ySize + i * yMargin + this.mapCenterY + ySize && !this.openDifSelector) {
                        this.levelHover = true;
                        this.levelHoverID = array[i][j];
                        if (this.eventHandler.leftMousePressed && this.levelHoverID <= this.currentMaxLevel && !this.levelRunning) {
                            this.levelSelected = this.levelHoverID;
                            this.openDifSelector = true;
                            this.levelHoverID = array[i][j];

                        }
                    }
                }
            }
        }
        if (this.openDifSelector) {
            this.updateDifficulty(this.screenWidth / 2 - this.difSelectorXSize / 2 - this.difSelectorXSize, this.screenHeight / 2 - this.difSelectorYSize / 2, xMouse, yMouse, this.difSelectorXSize, this.difSelectorYSize, xMargin, yMargin);
        }
        if (this.difficultySelected && !this.levelRunning) {
            this.levelRunning = true;
            this.startLevel = this.levelHoverID;
            console.log("--Starting Level " + this.levelHoverID);
        }
    }

    drawDifficultySelector(ctx, x, y, xSize, ySize, xMargin, yMargin) {
        if (!this.easyHover) {
            ctx.fillStyle = this.easyColor;
        } else {
            ctx.fillStyle = this.difHoverColor;
        }
        ctx.fillRect(x - xSize - xMargin, y, xSize, ySize);
        if (!this.normalHover) {
            ctx.fillStyle = this.normalColor;
        } else {
            ctx.fillStyle = this.difHoverColor;
        }
        ctx.fillRect(x, y, xSize, ySize);
        if (!this.hardHover) {
            ctx.fillStyle = this.hardColor;
        } else {
            ctx.fillStyle = this.difHoverColor;
        }
        ctx.fillRect(x + xSize + xMargin, y, xSize, ySize);
    }

    updateDifficulty(x, y, xMouse, yMouse, xSize, ySize, xMargin, yMargin) {
        this.easyHover = false;
        this.normalHover = false;
        this.hardHover = false;
        let temp = -1;
        for (let i = 0; i < 3; i++) {
            if (x + xSize * i + xMargin * i < xMouse && x + xSize + xSize * i + xMargin * i > xMouse && y < yMouse && y + ySize > yMouse) {
                switch (i) {
                    case 0:
                        this.easyHover = true;
                        temp = this.easy;
                        break;
                    case 1:
                        this.normalHover = true;
                        temp = this.normal;
                        break;
                    case 2:
                        this.hardHover = true;
                        temp = this.hard;
                        break;
                }
                if (this.eventHandler.leftMousePressed) {
                    this.difficulty = temp;
                    this.difficultySelected = true;
                }
            }
        }
    }
}