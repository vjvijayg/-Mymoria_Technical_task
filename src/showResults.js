const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// This is an Ajax request pops up with all the user values
// when all the registration process ends.

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
