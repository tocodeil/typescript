type Timeout = NodeJS.Timeout;

class Scheduler {
  timers: Set<Timeout> = new Set();

  schedule(task: ((...args: any[]) => void), timeout: number) {
      const id = setTimeout(task, timeout);
      this.timers.add(id);
      return id;
  }

  cancel(id: Timeout) {
      clearTimeout(id);
      this.timers.delete(id);
  }

  stopAll() {
      for (let id of this.timers) {
          this.cancel(id);
      }
  }
}

const s = new Scheduler();
console.log(s.timers);
