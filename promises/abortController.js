let canceled = false;

const p = new Promise((resolve) => {
  setTimeout(() => {
    if (!canceled) {
      resolve('Done!');
    }
  }, 2000);
});

// Later
canceled = true;

///////////////////////////////
const controller = new AbortController();

fetch('/some-url', { signal: controller.signal })
  .then((response) => response.text())
  .then(console.log)
  .catch((err) => {
    if (err.name === 'AbortError') {
      console.log('Fetch aborted');
    }
  });

// Cancel it
controller.abort();
