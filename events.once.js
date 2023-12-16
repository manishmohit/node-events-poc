const { once, EventEmitter } = require('node:events');

async function run() {
    const ee = new EventEmitter();
    process.nextTick(() => {
        ee.emit('myEvent',  42)
    });
    const [value] = await once(ee, 'myEvent');
    console.log("From here",value);

    const err = new Error('Kaboom');
    process.nextTick(() => {
        ee.emit('error',  err);
    });

    try {
        await once(ee, 'myEvent');
    } catch (err) {
        console.error('error happened', err);
    }
};

run();