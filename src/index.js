class Sender {

    constructor(window, timer, name) {
        this.window = window;
        this.timer = timer;
        this.name = name;
    }

    sendFrame(receiver) {
        let frame = this.window.get();
        console.log(`F${frame} is being sent from sender`);
        let isSent = receiver.receiveFrame(this ,this.window.getNext());
        if (isSent) {
            console.log(`${receiver.getName()} recived F${frame}`);
        }
    }

    receiveRR(i) {
        this.window.expand(i);
    }

    receiveSREJ(receiver, i) {
        let frame = i;
        console.log(`${this.getName()} received SREJ ${i}`);
        console.log(`${this.getName()} sent F${i} again`);
        receiver.receiveFrame(this ,frame, true);
    }

    getWindow() {
        return this.window;
    }

    getName() {
        return this.name;
    }

    getTimer() {
        return this.timer;
    }

    sendDamagedFrame() {
        this.window.pointer++;
        return;
    }
}

class Receiver {
    name;

    window;

    constructor(window, name) {
        this.name = name;
        this.window = window;
    }

    receiveFrame(sender ,frame, afterSREJ = false) {
        console.log(`Receiver receives F${frame} successfuly.` );
        if (frame != this.window.get()) {
            this.sendSREJ(sender, this.window.get());
            // this.window.pointer++;
            return false
        }
        if (afterSREJ) {
            console.log("AfterSREJ");
            this.window.pointer += 2;
        } else {
            this.window.pointer++;
        }

        return true;
    }

    sendRR(sender ,i) {
        this.window.expand(i);
        sender.receiveRR(i);
    }

    sendSREJ(sender, i) {
        sender.receiveSREJ(this, i);
    }

    getName() {
        return this.name;
    }

}

class Windows {
    array;

    firstShaded;
    
    lastShaded;
    
    pointer;

    buffer;

    windowSize;

    constructor(array ,firstShaded, lastShaded, pointer, buffer, windowSize) {
        this.array = array;
        this.firstShaded = firstShaded;
        this.lastShaded = lastShaded;
        this.pointer = pointer;
        this.buffer = buffer;
        this.windowSize = windowSize;
    }

    expand(number) {
        console.log('number ' + number);
        console.log('pointer ' + this.pointer);
        for (let i = this.pointer; true; i++) {
            if (this.array[i] == number) {
                this.firstShaded = i;
                break;
            }
        }

        this.lastShaded = this.firstShaded + this.windowSize - 1;
    }

    getNext() {
        let next = this.array[this.pointer];
        this.pointer++;
        return next;
    }

    getShadedFrames() {
        let shadedFrames = [];

        for (let i = this.firstShaded; i <= this.lastShaded; i++) {
            shadedFrames.push(this.array[i]);
        }

        return shadedFrames;
    }

    get() {
        return this.array[this.pointer];
    }

    show() {
        console.log(`main array: ${this.array}`);
        console.log(`first shaded at index ${this.firstShaded}` +
            `last shaded at index ${this.lastShaded}`);
    }

}

var firstShaded = 0;
var lastShaded = 1;
var pointer = 0;
var buffer = -1;
var windowSize = 2;
var timer = 10;

const senWind = new Windows([0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], firstShaded, 
    lastShaded, pointer, buffer, windowSize);

const recWind = new Windows([0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], firstShaded, 
    lastShaded, pointer, buffer, windowSize);

const sender = new Sender(senWind, timer, "A"); 
const receiver = new Receiver(recWind, "B");


export { senWind, recWind, sender, receiver };

