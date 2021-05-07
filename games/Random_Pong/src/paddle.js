class Paddle {

    constructor(gameWidth, gameHeight) {
        this.width = 150
        this.height = 20

        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

        this.speed = 0
        this.maxSpeed = 8 + Math.floor(Math.random() * 5)

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed
    }

    moveRight() {
        this.speed = this.maxSpeed
    }

    stop() {
        this.speed = 0
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = '#0ff'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.fillStyle = '#000'
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height)
        ctx.fill()
    }

    update(deltaTime) {
        this.position.x += this.speed
        if (this.position.x < 0) this.position.x = 0
        if (this.position.x > this.gameWidth - this.width) this.position.x = this.gameWidth - this.width
        //console.log(this.position.x)
    }


}