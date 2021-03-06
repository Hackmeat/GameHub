class EventHandler {

    constructor() {

        //Mouse movement
        this.xMouse, this.yMouse;
        canvas.addEventListener("mousemove", e => {
            this.xMouse = e.offsetX;
            this.yMouse = e.offsetY;
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