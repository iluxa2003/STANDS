function fetchWithTimeout(url, timeoutMs) {
  const fecthPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), timeoutMs),
  );

  return Promise.race([fecthPromise, timeoutPromise]);
}

// fetchWithTimeout('https://api.example.com/data', 3000)
//   .then((response) => console.log('Data loaded'))
//   .catch((err) => console.error(err));

const p1 = new Promise((resolve) =>
  setTimeout(() => {
    console.log('123');
    resolve('First!'), 1000;
  }),
);
const p2 = new Promise((resolve) =>
  setTimeout(() => {
    console.log('456');
    resolve('Second!'), 2000;
  }),
);

Promise.race([p1, p2]).then((value) => {
  console.log('Winner:', value);
});
