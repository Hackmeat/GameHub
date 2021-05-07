class ElementSelection {

    constructor(gameWidth, gameHeight, eventHandler, gameScreen) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.eventHandler = eventHandler;
        this.gameScreen = gameScreen;

        this.clickOne = false;
        this.clickTwo = false;
        this.gameOver = false;
        this.allCorrect = false;
        this.nextRound = false;

        this.objectCompareID, this.colorCompareID;

        this.selectionArray = [];

        this.objectAmount = 4;
        this.colorAmount = 5;
    }

    draw(ctx, interpolationPercentage) {
        //Drawing the two tabs to select the itmes
        this.drawSelectionTab(ctx, this.gameWidth / 2, this.gameHeight / 2, this.objectAmount);
        this.drawObjectSelection(ctx, this.gameWidth / 2, this.gameHeight / 2, this.objectAmount);

        this.drawSelectionTab(ctx, this.gameWidth / 2, this.gameHeight / 2 + 200, this.colorAmount);
        if (this.clickOne) {
            this.drawColorSelection(ctx, this.gameWidth / 2, this.gameHeight / 2 + 200, this.colorAmount)
        }
    }

    update(delta) {
        //Hover and click detection for the selction tabs
        if (!this.clickOne) {
            this.hoverDetectionSelectionTab(this.gameWidth / 2, this.gameHeight / 2, this.objectAmount);
        } else if (!this.clickTwo) {
            this.hoverDetectionSelectionTab(this.gameWidth / 2, this.gameHeight / 2 + 200, this.colorAmount);
        } else if (this.objectCompareID > 0 && this.colorCompareID > 0) {
            this.compareID(this.objectCompareID, this.colorCompareID);
        }
    }

    //Resizable seletion tab
    drawSelectionTab(ctx, x, y, amount) {
        let size = 100;
        x -= amount / 2 * size;
        ctx.fillStyle = "#ffffff"

        for (let i = amount; i > 0; i--) {
            ctx.strokeRect(x, y, size, size)
            x += size;
        }
    }

    //Resizable object tab with content
    drawObjectSelection(ctx, x, y, amount) {
        let size = 100;
        let element = "";
        x -= amount / 2 * size;
        for (let i = amount; i > 0; i--) {
            switch (i) {
                case 1:
                    element = "Cube_none";
                    break;
                case 2:
                    element = "Cross_none";
                    break;
                case 3:
                    element = "Pyramid_none";
                    break;
                case 4:
                    element = "Ball_none";
                    break;
            }

            ctx.drawImage(document.getElementById(element), x, y, size, size);
            x += size;
        }
    }

    //Checks which item was selected and replys on it with the object in all colors in the tab below
    drawColorSelection(ctx, x, y, amount) {
        let object = "";
        let element = "";
        let size = 100;
        x -= amount / 2 * size;
        switch (this.objectCompareID) {
            case 1:
                object = "Cube_";
                break;
            case 2:
                object = "Cross_";
                break;
            case 3:
                object = "Pyramid_";
                break;
            case 4:
                object = "Ball_";
                break;
        }
        for (let i = amount; i > 0; i--) {
            switch (i) {
                case 1:
                    element = object + "Blue";
                    break;
                case 2:
                    element = object + "Yellow";
                    break;
                case 3:
                    element = object + "Green";
                    break;
                case 4:
                    element = object + "Purple";
                    break;
                case 5:
                    element = object + "Red";
                    break;
            }
            ctx.drawImage(document.getElementById(element), x, y, size, size);
            x += size;
        }


    }

    //Detects if the mouse is on one of the squares from the selction tab when the mouse has been clicked
    hoverDetectionSelectionTab(x, y, amount) {
        let mouseX = this.eventHandler.mouseX;
        let mouseY = this.eventHandler.mouseY;
        let size = 100;
        x -= amount / 2 * size;

        for (let i = amount; i > 0; i--) {
            if (mouseX > x && mouseX < x + size) {
                if (mouseY > y && mouseY < y + size) {
                    if (this.eventHandler.leftMousePressed) {
                        if (!this.clickOne) {
                            this.objectCompareID = i;
                            this.clickOne = true;
                        } else if (!this.clickTwo) {
                            this.colorCompareID = i;
                            this.clickTwo = true;
                        }
                    }
                }
            }
            x += size;
        }
    }

    //Compares if the selected color and object are the ones falling down in the last round
    compareID(objectID, colorID) {
        let found = false;
        for (let i = this.gameScreen.elementArray.length - 1; i > -1; i--) {
            let element = this.gameScreen.elementArray[i];
            if (element.objectID == objectID && element.colorID == colorID) {
                this.gameScreen.elementArray[i] = 0;
                this.clickOne = false;
                this.clickTwo = false;
                i = 0;
                found = true;
                console.log(this.gameScreen.elementArray)
            }
        }
        if (!found) {
            console.log(objectID, colorID)
            this.gameOver = true;
            console.log("Game Over")
        }
        this.checkAllCorrect();
    }

    //If compare was succssefull it starts the next round, if not - a new game
    checkAllCorrect() {
        this.allCorrect = true;
        for (let i = this.gameScreen.elementArray.length - 1; i > -1; i--) {
            let element = this.gameScreen.elementArray[i];
            if (element != 0) {
                this.allCorrect = false;
            }
        }
        if (this.allCorrect) {
            this.nextRound = true;
            console.log("next Round")
        }
    }
}