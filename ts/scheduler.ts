class Scheduler {
    constructor(
        public name: string,
        public interval: number,
        public isRunning: boolean = false,
        public tasks: Array<() => void> = [],
        public timerId: ReturnType<typeof setTimeout> | null = null
    ) {}

    schedule(task: () => void) {
        this.tasks.push(task);

        if (this.isRunning) return;

        this.isRunning = true;
        this.timerId = setInterval(() => {
            for (const t of this.tasks) {
                t();
            }
        }, this.interval);
    }

    scheduleOnce(task: () => void) {
        setTimeout(task, this.interval);
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        this.isRunning = false;
    }
}

export default Scheduler;

const taskOne = new Scheduler("MyScheduler", 3000);
taskOne.schedule(() => {
    console.log("Task executed at", new Date());
});
