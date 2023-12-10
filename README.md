# node-events-poc
This POC is for concepts of node events module.

 * All abojects that emits events are instances of EventEmitter class.
 * These objects are expose and eventEmitter.on() function that allows one or more to be attached with the named events aemitted by the objects.
 * when oridinary function is used as a listener function then we get this set as the reference of the EventEmitter instance.
 * when used arrow function we get no this.
 * EventEmitter calls all listerners synchronously but when appropriate it can call them asynchronously using setImmediate() or process.nextTick()
 * eventEmitter.once only lets the event emit only once and rest all is ignored.
 * Have a listener for errors so that when error is thrown node application do not crash.
 * So for promise rejections we can set captureRejection:true while creating the instance of the emitter or we can do it globally.
