# Make a Node Readable stream from a WhatWGStream

Example usage:

```
expressResponseStream = ...

fetch('https://....').then(response => {
  const stream = new FromWhatWGReadableStream({}, response.body);
  stream.pipe(expressResponseStream, {end:true});
});
```