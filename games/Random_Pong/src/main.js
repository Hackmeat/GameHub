let canvas = document.getElementById("gameScreen")
let ctx = canvas.getContext("2d")

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT, paddle)
let inputHandler = new InputHandler(paddle)
let bricks = new Bricks(GAME_WIDTH, GAME_HEIGHT, ball)

paddle.draw(ctx)

let lastTime = 0

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

    bricks.update(deltaTime)
    bricks.draw(ctx)

    paddle.update(deltaTime)
    paddle.draw(ctx)

    ball.update(deltaTime)
    ball.draw(ctx)

    

    if (ball.isOver && inputHandler.readyToStart) {
        console.log("Main")
        
        paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
        ball = new Ball(GAME_WIDTH, GAME_HEIGHT, paddle)
        inputHandler.paddle = paddle
        bricks = new Bricks(GAME_WIDTH, GAME_HEIGHT, ball)
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);