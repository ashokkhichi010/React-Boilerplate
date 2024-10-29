export class Emiter {
  constructor(mainSocket) {
    this.socket = mainSocket;
  }

  /**
   * Emits an example event with the provided data.
   * @param {Object} data - The data to emit.
   */
  emitExample = (data) => {
    this.socket?.emit('emit-path-example', data);
  }
}
