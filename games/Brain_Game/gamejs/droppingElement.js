class DroppingElement {

    constructor(x, y, objectID, colorID, speed) {
        this.x = x;
        this.y = y;
        this.objectID = objectID;
        this.colorID = colorID;
        this.speed = speed / 5;

        this.lastY;
        this.arrived = false;

        this.element = "";
        this.elementSet = false;

        this.squareGreen = document.getElementById("SquareGreen");
    }

    draw(ctx, interpolationPercentage) {
        let y = this.lastY + (this.y - this.lastY) * interpolationPercentage;

        //Creating the object name from the radom generated combinations 
        if (!this.elementSet) {
            switch (this.objectID) {
                case 1:
                    this.element += "Cube_";
                    break;
                case 2:
                    this.element += "Cross_";
                    break;
                case 3:
                    this.element += "Pyramid_";
                    break;
                case 4:
                    this.element += "Ball_";
                    break;
            }
            switch (this.colorID) {
                case 1:
                    this.element += "Blue";
                    break;
                case 2:
                    this.element += "Yellow";
                    break;
                case 3:
                    this.element += "Green";
                    break;
                case 4:
                    this.element += "Purple";
                    break;
                case 5:
                    this.element += "Red";
                    break;
            }
        }
        this.elementSet = true;
        ctx.drawImage(document.getElementById(this.element), this.x, y, 75, 75);
    }

    update(delta) {
        //Updating the falling objects
        this.lastY = this.y;
        this.y += this.speed * delta;
        if (this.y > 1100) {
            this.y = 1100;
            this.arrived = true;
        }
    }
}