# Hapax
Easily make sure long running repeated tasks do not overlap with 
each other.

`npm i hapax-fn`

```javascript
const myLongJob = () => {
  return new Promise((resolve) => {
    // resolve the promise after 60 seconds to simulate a long running job
    setTimeout(() => resolve(), 1000 * 60);
  });
};
const job = new Hapax(myLongJob);

// The hapax job will only run if it is not already running
setInterval(() => {
  job.run();
}, 1000);
```
