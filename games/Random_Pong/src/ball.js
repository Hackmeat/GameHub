class Ball {

    constructor(gameWidth, gameHeight, paddle) {

        this.paddle = paddle

        this.ball = document.getElementById('ball')
        this.leftArrow = document.getElementById('left_arrow')
        this.rightArrow = document.getElementById('right_arrow')

        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

        this.ballSize = 32
        this.counter = 0
        this.speedCounter = 1

        this.startPosX = Math.floor(Math.random() * 701) + 50;
        this.startPosY = Math.floor(Math.random() * 101) + 300;
        this.position = { x: this.startPosX, y: this.startPosY }
        this.speed = { x: 3, y: 3 }

        this.isOver = false
        this.isRunning = false
        this.checkDone = false
        this.firstCollision = false

    }

    draw(ctx) {
        ctx.drawImage(this.ball, this.position.x, this.position.y, this.ballSize, this.ballSize)
    }

    update(deltaTime) {
        if (!this.isRunning) {
            ctx.font = "50px Arial"
            ctx.fillStyle = '#000'
            ctx.textAlign = 'center'
            ctx.drawImage(this.leftArrow, this.gameWidth / 2 - 210, this.gameHeight / 2 - 93, 40, 40)
            ctx.fillText("LEFT | RIGHT", this.gameWidth / 2, this.gameHeight / 2 - 55)
            ctx.drawImage(this.rightArrow, this.gameWidth / 2 + 170, this.gameHeight / 2 - 93, 40, 40)
            ctx.fillText("PRESS SPACE TO START", this.gameWidth / 2, this.gameHeight / 2)
            document.addEventListener("keydown", event => {
                switch (event.keyCode) {
                    case 32:
                        this.isRunning = true
                        break
                }
            })
        } else if (this.position.y > this.gameHeight - this.ballSize && this.isRunning) {
            let gameOver = "GAME OVER"
            ctx.font = "50px Arial"
            ctx.fillStyle = '#000'
            ctx.textAlign = 'center'
            ctx.fillText(gameOver, this.gameWidth / 2, this.gameHeight / 2 - 55)
            ctx.fillText("SCORE: " + this.counter, this.gameWidth / 2, this.gameHeight / 2)
            ctx.fillText("PRESS SPACE TO CONTINUE", this.gameWidth / 2, this.gameHeight / 2 + 55)
            this.isOver = true
        } else if (this.isRunning) {
            this.position.x += this.speed.x;
            this.position.y += this.speed.y;
            ctx.font = "50px Arial"
            ctx.fillStyle = '#000'
            ctx.fillText(this.counter, 50, 50)
            if (this.position.x > this.gameWidth - this.ballSize || this.position.x < 0) {
                this.speed.x = -this.speed.x
            }
            if (this.position.y < 0) {
                this.speed.y = -this.speed.y
            }

            let xpos1 = this.paddle.position.x
            let xpos2 = this.paddle.position.x + this.paddle.width
            let ypos1 = this.paddle.position.y
            let currentX = this.position.x
            let currentY = this.position.y

            //Collision
            if (xpos1 <= this.position.x + this.ballSize - 3 && xpos2 >= this.position.x && ypos1 <= this.position.y + this.ballSize) {
                if (this.speed.y > 0) {
                    this.speed.y = -this.speed.y
                    this.counter += Math.floor(Math.random() * 3)
                    this.position.x = currentX
                    this.position.y = currentY
                }
            } else if (ypos1 <= this.position.y + this.ballSize && xpos1 <= this.position.x + this.ballSize) {
                if (ypos1 <= this.position.y + this.ballSize && xpos2 >= this.position.x) {
                    if (this.speed.x > 0 && this.speed.y > 0) {
                        this.speed.x = -this.speed.x
                        this.counter += Math.floor(Math.random() * 3)
                        this.position.x = currentX
                        this.position.y = currentY
                    } else if (this.speed.x < 0 && this.speed.y > 0) {
                        this.speed.x = -this.speed.x
                        this.counter += Math.floor(Math.random() * 3)
                        this.position.x = currentX
                        this.position.y = currentY
                    }

                }
            } else if (this.position.x + this.ballSize - 3 > xpos1 && this.position.y + this.ballSize - 3 > ypos1 && this.position.x - 3 < xpos2) {
                if (this.speed.y > 0) {
                    this.speed.x = -this.speed.x
                    this.speed.y = -this.speed.y
                    this.counter += Math.floor(Math.random() * 3)
                    this.position.x = currentX
                    this.position.y = currentY
                }
            }

            //Speeding the Ball every 5 hits
            if (this.counter >= this.speedCounter || this.counter == 1 && this.speed.x == 2 || this.counter == 1 && this.speed.x == -2) {
                if (this.speed.x > 0) {
                    if(this.speed.x < 6 || this.speed.x > -6){
                        this.speed.x += 1+  Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10)
                    } else {
                        if(this.speed.x < 0){
                            this.speed.x = -6
                        } else {
                            this.speed.x = 6
                        }
                    }
                } else {
                    if(this.speed.x < 6 || this.speed.x > -6){
                        this.speed.x -= 1+  Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10)
                    } else {
                        if(this.speed.x < 0){
                            this.speed.x = -6
                        } else {
                            this.speed.x = 6
                        }
                    }
                }
                if (this.speed.y > 0) {
                    if(this.speed.y < 6 || this.speed.y > -6){
                        this.speed.y += 1+  Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10)
                    } else {
                        if(this.speed.y < 0){
                            this.speed.y = -6
                        } else {
                            this.speed.y = 6
                        }
                    }
                } else {
                    if(this.speed.y < 6 || this.speed.y > -6){
                        this.speed.y -= 1+  Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10)
                    } else {
                        if(this.speed.y < 0){
                            this.speed.y = -6
                        } else {
                            this.speed.y = 6
                        }
                    }
                }
                if(this.speed.y == 0){
                    this.speed.y = -1
                }
                this.speedCounter += Math.floor(Math.random() * 4);
            }
        }

    }
}