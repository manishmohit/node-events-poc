const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {};

const eventEmitter = new MyEmitter();

eventEmitter.once('newListener', (event, listener) => {
    console.log("this event triggers newListener", event);
    if (event === 'event') {
        eventEmitter.on('event', () => {
            console.log('B')
        });
    }
    if (event === 'check') {
        eventEmitter.on('check', () => {
            console.log('C')
        });
    }
});

eventEmitter.on('event', () => {
    console.log('A');
});
eventEmitter.on('check', () => {
    console.log('D');
});

eventEmitter.emit('check');
eventEmitter.emit('event');