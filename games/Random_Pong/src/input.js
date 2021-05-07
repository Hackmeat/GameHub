class InputHandler {

    constructor(paddle) {
        this.paddle = paddle
        let that = this
        this.readyToStart = false

        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
                case 37:
                    that.paddle.moveLeft()
                    break

                case 39:
                    that.paddle.moveRight()
                    break

                case 32:
                    this.readyToStart = true
                    break
            }
        })

        document.addEventListener("keyup", event => {
            switch (event.keyCode) {
                case 37:
                    if (that.paddle.speed < 0) that.paddle.stop()
                    break

                case 39:
                    if (that.paddle.speed > 0) that.paddle.stop()
                    break

                case 32:
                    this.readyToStart = false
                    break
            }
        })

    }

}