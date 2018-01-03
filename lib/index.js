const { Readable } = require('stream')

class FromWhatWGReadableStream extends Readable {
  constructor(options, whatwgStream) {
    super(options);
    const streamReader = whatwgStream.getReader();
    const outStream = this;
    
    function pump() {
      return streamReader.read().then(({ value, done }) => {
        if (done) {
          outStream.push(null);
          return;
        }
      
        outStream.push(value.toString());
        return pump();
      });
    }
    
    pump();
  }
  
  _read(size) {
    
  }
}

module.export = {
  'FromWhatWGReadableStream': FromWhatWGReadableStream
};