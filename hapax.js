// Hapax only runs a function once in a given context
class Hapax {
  constructor(fn) {
    this.fn = fn;
    this.isRunning = false;
  }

  /**
   * Will run the function and pass along any args
   * @param  {...any} args
   * @returns
   */
  async run(...args) {
    if (this.isRunning) {
      return false;
    }
    this.isRunning = true;
    const result = await this.fn(...args);
  
    this.isRunning = false;
    return result;
  }
}

module.exports = Hapax;
