export default class Timer {
    constructor(duration) {
        this.duration = duration;
        this.remaining = duration;
        this.startTime = null;
        this.timeoutId = null;
        this.finished = false;
    }

    start() {
        if (this.timeoutId || this.finished) return;

        this.startTime = Date.now();

        this.timeoutId = setTimeout(() => {
            this.finished = true;
            this.timeoutId = null;
        }, this.remaining);
        Timer.checker()
    }

    pause() {
        if (!this.timeoutId) return;

        clearTimeout(this.timeoutId);
        this.timeoutId = null;

        const elapsed = Date.now() - this.startTime;
        this.remaining -= elapsed;
    }

    reset() {
        clearTimeout(this.timeoutId);

        this.remaining = this.duration;
        this.startTime = null;
        this.timeoutId = null;
        this.finished = false;
    }

    isFinished() {
        return this.finished;
    }
    
    static checker() {
        const watcher = setInterval(() => {
            if (timer.isFinished()) {
                console.log("Time's Up!");
                clearInterval(watcher);
            }
        }, 100);
    }
 
}
