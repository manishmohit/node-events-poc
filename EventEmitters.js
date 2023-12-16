const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {};

const eventEmitter = new MyEmitter();
eventEmitter.once('newListener', (event, listener) => {
    console.log("this event triggers newListener", event, listener);
    if (event === 'event') {
        eventEmitter.on('event', () => {
            console.log('B')
        });
    }
});

eventEmitter.on('event', () => {
    console.log('A');
});

eventEmitter.emit('event');
