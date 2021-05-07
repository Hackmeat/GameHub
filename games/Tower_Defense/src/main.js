let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let menu = new Menu(width, height);

function update(delta) {
    menu.update(delta);
}

function draw(interpolationPercentage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    menu.draw(ctx, interpolationPercentage);
}

function end(fps, panic) {
    //fpsCounter.textContent = Math.round(fps) + ' FPS';
    if (panic) {
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }
}

MainLoop.setUpdate(update).setDraw(draw).setEnd(end).start();