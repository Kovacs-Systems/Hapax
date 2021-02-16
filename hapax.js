// Hapax only runs a function once in a given context
class Hapax {
  constructor(fn) {
    this.fn = fn;
    this.isRunning = false;
  }

  async run() {
    if (this.isRunning) {
      return false;
    }
    this.isRunning = true;
    const result = await this.fn();
  
    this.isRunning = false;
    return result;
  }
}

module.exports = Hapax;
