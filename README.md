# Hapax
Easily make sure long running repeated tasks do not overlap with 
each other.

`npm i hapax-fn`

```javascript
const job = new Hapax(myLongJob);

// The hapax job will only run if it is not already running
setInterval(() => {
  job.run();
}, 1000);
```