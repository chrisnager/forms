const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default (async function showResults(values) {
  await sleep(1000)

  alert(JSON.stringify(values, null, 2))
})
