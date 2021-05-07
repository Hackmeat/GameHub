class EventHandler {

    constructor() {

        //Mouse movement
        this.mouseX, this.mouseY;
        canvas.addEventListener("mousemove", e => {
            this.mouseX = e.offsetX;
            this.mouseY = e.offsetY;
        })

        //Mouse mressed
        this.leftMousePressed = false;
        document.addEventListener("mousedown", e => {
            switch (e.button) {
                case 0:
                    this.leftMousePressed = true;
                    break;
            }
        })
        //Mouse released
        document.addEventListener("mouseup", e => {
            switch (e.button) {
                case 0:
                    this.leftMousePressed = false;
                    break;
            }
        })
    }

}