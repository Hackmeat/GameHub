class Waves{

    constructor(screenWidth, screenHeight, waves, level, difficulty, startX, startY, mapArray){
        this.screenHeight = screenHeight;
        this.screenWidth = screenWidth;
        this.level = level;
        this.difficulty = difficulty;
        this.waves = waves;
        this.startX = startX;
        this.startY = startY;
        this.mapArray = mapArray;

        //--------------------------------------------------------- 
        //For calculating the right positions for every screen size
        //and taking the base from HD (1280x720)

        let xMult = this.screenWidth / 1280;
        let yMult = this.screenHeight / 720;

        //----------------------------------------------------------------
        //Mob arrays
        this.currentWave = []
    }

    update(delta){
        this.fillWave();
    }

    fillWave(){
        for(let i = 0; i < 1; i++){
            this.currentWave.push(new Mobs(this.screenWidth, this.screenHeight, this.level, this.difficulty, this.waves, this.startX, this.startY));
        }
    }

}