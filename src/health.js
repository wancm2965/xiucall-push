import EventEmitter from 'events';

/**
 * Healthy check for kubernetes cluster
 */
class Health extends EventEmitter {
  constructor(opts) {
    super();
  }
}