let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let initLevel = false;

let eventHandler = new EventHandler();
let menu = new Menu(width, height, eventHandler);
let mapSelection = new MapSelection(width, height, eventHandler, menu);
let level

function update(delta) {
    if (!menu.start && !menu.selection && !menu.exit) {
        menu.update(delta);
    } else if (menu.selection){
        mapSelection.update(delta);
    }

    if(mapSelection.levelRunning && !initLevel){
        level = new Level(width, height, eventHandler, mapSelection.startLevel);
        initLevel = true;
    }
    if(mapSelection.levelRunning && initLevel){
        level.update(delta);
    }
}

function draw(interpolationPercentage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!menu.start && !menu.selection && !menu.exit) {
        menu.draw(ctx, interpolationPercentage);
    } else if (menu.selection && !mapSelection.levelRunning){
        mapSelection.draw(ctx, interpolationPercentage);
    } 

    if(mapSelection.levelRunning && initLevel){
        level.draw(ctx, interpolationPercentage);
    }
}

function end(fps, panic) {
    //fpsCounter.textContent = Math.round(fps) + ' FPS';
    if (panic) {
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }
}

MainLoop.setUpdate(update).setDraw(draw).setEnd(end).start();