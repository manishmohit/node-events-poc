const EventEmitter  = require('node:events');

// EventEmitter.captureRejections = true

class MyEmitter extends EventEmitter {}
/**
 * this deals with single argument events
 */
const eventEmitter = new MyEmitter();
eventEmitter.on('events', (message) => {
    console.group('Event received with single argument:');
    console.log(`Message: ${message}`);
    console.groupEnd();
});
eventEmitter.emit('events', 'Hi, my first event');

/**
 * this deals with multiple argument events
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8.9, 10];
const eventEmitter1 = new MyEmitter();
eventEmitter1.on('events', (...args) => {
    console.group('Event received with multiple arguments:');
    console.log(`Arguments: ${args}`);
    console.groupEnd();
});
eventEmitter1.emit('events', ...arr);

/**
 * this shows how an ordinary function listener function has its 'this' with it
 */
const eventEmitter2 = new MyEmitter();
eventEmitter2.on('events', function (a, b) {
    console.group('Event received with ordinary function:');
    console.log(`a: ${a}, b: ${b}`);
    console.log(`'this' value:`, this);
    console.groupEnd();
});
eventEmitter2.emit('events', 5, 6);

/**
 * this shows how an arrow function listener function has its 'this' with it
 */
const eventEmitter3 = new MyEmitter();
eventEmitter3.on('events', (a, b) => {
    console.group('Event received with arrow function:');
    console.log(`a: ${a}, b: ${b}`);
    console.log(`'this' value:`, this);
    console.groupEnd();
});
eventEmitter3.emit('events', 5, 6);

/**
 * Asynchronous Vs Synchronous
 */
const eventEmitter4 = new MyEmitter();
eventEmitter4.on('events', (a, b) => {
    console.group('Asynchronous Vs Synchronous');
    setImmediate(() => {
        console.log('This happpens asynchronously')
    })
    console.groupEnd();
});
eventEmitter4.emit('events', 5, 6);

/**
 * Handling event only once
 */
console.group('Handling event only once');
    let m = 0;
    const eventEmitter5 = new MyEmitter();
    eventEmitter5.once('events', () => {
        console.log('eventEmitter5', ++m) 
    });
    eventEmitter5.emit('events');
    eventEmitter5.emit('events');
    eventEmitter5.emit('events');
    eventEmitter5.emit('events');
console.groupEnd();

/**
 * Error events
 */
console.group('Error events ');
    const eventEmitter6 = new MyEmitter();
    eventEmitter6.on('error', (err) => {
        console.error('an ERROR occured !!');
    });
    eventEmitter6.emit('error', new Error('whoops!'));
console.groupEnd();

/**
 * Capture rejections of promise
 */
console.group('Capture rejections of promise');
    /**
     * captureRejections rejections can be set true for all instances as we did in start of the file.
     */
    const eventEmitter7 = new MyEmitter({captureRejections: true});
    eventEmitter7.on('something', async (value) => {
        throw new Error('Kaboom');
    });
    eventEmitter7.on('error', console.log);
    /**
     * eventEmitter7.emit('something', 3);
     * above line is used to emit that event.
     */
console.groupEnd();

/**
 * Event Names, max listeners set by default
 */
console.group('Returns names of all event');
    const eventEmitter8 = new MyEmitter();
    eventEmitter8.setMaxListeners(12);
    /**
     * setMaxListeners is set to max otherwise it won't allow more listener to be added for an event than default allowed.
     */
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('bar', () => {});
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('foo', () => {});
    eventEmitter8.on('foo', () => {});
    
    console.log(eventEmitter8.eventNames());
    console.log(eventEmitter8.getMaxListeners());
    console.log(eventEmitter8.listeners('foo'))
console.groupEnd();


