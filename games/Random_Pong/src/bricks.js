class Bricks {

    constructor(gameWidth, gameHeight, ball) {

        this.ball = ball

        this.cols = 20
        this.rows = 5
        this.blockSize = 40
        this.firstCounter = 1
        this.secondCounter = 0

        this.bricksArray = []

        this.arrayCreated = false
        
        this.won = true
    }

    draw(ctx) {
        if (this.arrayCreated) {
            for (var i = 0; i < this.cols; i++) {
                for (var j = 0; j < this.rows; j++) {
                    if (this.bricksArray[i][j] == 1) {
                        ctx.fillStyle = '#0f0'
                        ctx.fillRect(i * this.blockSize, j * this.blockSize, this.blockSize, this.blockSize)
                        ctx.fillStyle = '#000'
                        ctx.strokeRect(i * this.blockSize, j * this.blockSize, 40, 40)
                    }
                }
            }
        }
    }

    update(deltaTime) {

        if (!this.arrayCreated) {
            for (var i = 0; i < this.cols; i++) {
                this.bricksArray[i] = []
                for (var j = 0; j < this.rows; j++) {
                    this.bricksArray[i][j] = Math.floor(Math.random() *  Math.floor(Math.random() * 10))
                    //console.log(this.bricksArray[i][j])
                }
            }
            this.arrayCreated = true
        }
        if (this.firstCounter == 3) {
            this.l1BPX1 = this.ball.position.x
            this.l1BPY1 = this.ball.position.y
            this.firstCounter = 0
        }

        this.firstCounter++


        for (var k = 0; k < this.cols; k++) {
            for (var l = 0; l < this.rows; l++) {
                if (this.bricksArray[k][l] == 1) {
                    let ballPosX1 = this.ball.position.x //Ball Left Side x1
                    let ballPosY1 = this.ball.position.y //Ball Upper Side y1
                    let ballPosX2 = this.ball.position.x + this.ball.ballSize //Ball Right Side x2
                    let ballPosY2 = this.ball.position.y + this.ball.ballSize //Ball Bottom Side y2

                    let brickPosX1 = k * this.blockSize //Brick Left Side x1
                    let brickPosY1 = l * this.blockSize //Brick Upper Side y1
                    let brickPosX2 = k * this.blockSize + this.blockSize //Brick Right Side x2
                    let brickPosY2 = l * this.blockSize + this.blockSize //Brick Bottom Side y2

                    if (brickPosX1 <= ballPosX2 && brickPosX2 >= ballPosX1 && brickPosY1 <= ballPosY1 && ballPosY1 <= brickPosY2 || brickPosX1 <= ballPosX2 && brickPosX2 >= ballPosX2 && brickPosY1 <= ballPosY2 && ballPosY2 <= brickPosY2) {
                        if (brickPosY2 >= ballPosY1 && brickPosY1 <= brickPosY2 && brickPosX1 <= ballPosX1 && ballPosX1 <= brickPosX2 || brickPosY2 >= ballPosY1 && brickPosY1 <= brickPosY2 && brickPosX1 <= ballPosX2 && ballPosX2 <= brickPosX2) {
                            if (ballPosX2 - brickPosX1 <= 0 && this.ball.speed.x > 0) {
                                this.ball.speed.x = -this.ball.speed.x
                                this.ball.counter += Math.floor(Math.random() * 3)
                            } else if (ballPosX1 - brickPosX2 <= 0 && this.ball.speed.x < 0) {
                                this.ball.speed.x = -this.ball.speed.x
                                this.ball.counter += Math.floor(Math.random() * 3)
                            } else if (ballPosY1 - brickPosY2 <= 0 && this.ball.speed.y < 0) {
                                this.ball.speed.y = -this.ball.speed.y
                                this.ball.counter += Math.floor(Math.random() * 3)
                            } else if (ballPosY2 - brickPosY1 <= 0 && this.ball.speed.y > 0) {
                                this.ball.speed.y = -this.ball.speed.y
                                this.ball.counter += Math.floor(Math.random() * 3)
                            }
                            this.bricksArray[k][l] = 0
                        }
                    }
                }
            }
        }

        this.won = true

        for (var k = 0; k < this.cols; k++) {
            for (var l = 0; l < this.rows; l++) {
                if(this.bricksArray[k][l] == 1){
                    this.won = false
                }
            }
        }

        if(this.won == true){
            this.ball.isOver = true
            this.ball.isRunning = false
        }

        k = 0
        l = 0
    }
}