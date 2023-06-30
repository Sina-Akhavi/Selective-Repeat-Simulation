class Sender {

    constructor(frames, buffer, shadedFrom, shadedTo) {
        this.shadedFrom = shadedFrom;
        this.shadedTo = shadedTo;
        this.frames = frames;
        this.buffer = buffer;
    }

    sendFrame(receiver) {
        this.buffer.push(this.shadedFrom);
        let frame = this.frames[this.shadedFrom];
        
        console.log(`Sent Frame${frame}`);
        
        let status = receiver.receiveFrame(this, frame);
        
        this.shadedFrom++;
        this.shadedTo++;
        
        console.log(`SENDER: shadedFrom: ${this.shadedFrom}     shadedTo: ${this.shadedTo}`);

        return [status, frame];
    }

    receiveRR(i, receiver) {
        console.log(`received RR${i}`);
        this.buffer = [];
        this.sendFrame(receiver);
    }

    sendRRPBit1(receiver) {
        console.log(`sent RR(P bit=1)`);
        receiver.receiveRRPBit1(this);
    }

    receiveSREJ(frame) {
        console.log(`received SREJ${frame}`);
        console.log(`sent Frame${frame}`);
        return `sent ${frame}`;

    }

    sendDamagedFrame() {
        let damagedFrame = this.frames[this.shadedFrom];
        console.log(`sent damaged Frame${damagedFrame}`)
        this.buffer.push(this.shadedFrom);
        this.shadedFrom++;
        this.shadedTo++;

        return damagedFrame;
    }

}

class Receiver {
    
    constructor(frames, buffer, shadedFrom, shadedTo) {
        this.shadedFrom = shadedFrom;
        this.shadedTo = shadedTo;
        this.frames = frames;
        this.buffer = buffer;
    }

    receiveFrame(sender, frame) {
        let expectedFrame = this.frames[this.shadedFrom];

        if (frame != expectedFrame) {
            console.log('Hi');
            this.sendSREJ(sender);
            return 0;
        } else {
            console.log(`received Frame${frame}`);
            this.buffer.push(this.shadedFrom);
            this.shadedFrom++;
            this.shadedTo++;

            console.log(`RECEIVER:  shadedFrom: ${this.shadedFrom}     shadedTo: ${this.shadedTo}`);
            return 1;
        }
    }

    sendRR(sender) {
        this.buffer = [];
        let expectedFrame = this.frames[this.shadedFrom];
        console.log(`Sent RR${expectedFrame}`);
        sender.receiveRR(expectedFrame, this);
        return expectedFrame;
    }

    receiveRRPBit1(sender) {
        console.log(`received RR(P bit = 1)`);
        this.sendRR(sender);
    }

    sendSREJ(sender) {
        let frame = this.frames[this.shadedFrom];
        this.buffer.push(this.shadedFrom);
        this.buffer.push(this.shadedFrom + 1);
        
        this.shadedFrom += 2;
        this.shadedTo += 2;
        
        console.log(`SREJ${frame} sent`);
        sender.receiveSREJ(frame);

        console.log(`RECEIVER:  shadedFrom: ${this.shadedFrom}     shadedTo: ${this.shadedTo}`);

    }
}

let frames = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
let buffer = [];
let shadedFrom = 0;
let shadedTo = 7;

const sender = new Sender(frames, buffer, shadedFrom, shadedTo);

let frames2 = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
let buffer2 = [];
let shadedFrom2 = 0;
let shadedTo2 = 7;

const receiver = new Receiver(frames2, buffer2, shadedFrom2, shadedTo2);


export { sender, receiver };


