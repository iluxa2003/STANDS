async function fetchData() {
  console.log('Starting fetch...');

  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    const data = await response.json();
    console.log('Data loaded:', data);
  } catch (error) {
    console.error('Fetch failed:', error);
  } finally {
    console.log('Fetch attempt complete (success or failure).');
  }
}

fetchData();
