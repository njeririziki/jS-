/** JavaScript behind the hood
 * JavaSCript is single threaded--The main thread is where the DOM lives so there's alot of blocking 
 * when a task takes a longer time like 200ms. 
 * Event-Loop - how we create other threads that run in parallelthen come back to the main thread
 * 1. we queue tasks so that they can get back on the main thread
 *     That's how addEventListener works
 *  All the tasks must be done before rendering is done again
 *   CallStack
 * 
  the async code
  many*/ 


/** Micro tasks- these are promises. Are run when there's nothng in the callstack
 * 
 */
//async makes promises
function createPromise(){
    Promise.resolve().then(console.log('inside the promise'))
    console.log('outside the promise')
}
//await waits on promises

//try and catch block
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}



//callbacks are arguments to another functions
function callingCallBack(a,b, theFun){
  theFun(a,b)
 }
function callBackFunc(a,b){
a+=b
console.log(`in the callBackFunc ${a}`)
}


function callSubtract(a,b){
  a-=b
console.log(`in the callBackFunc ${a}`)
}
callingCallBack(5,8,callBackFunc)
callingCallBack(5,8,callSubtract)

//callback hell
readFile('file.txt', function(err, data) {
  if (err) {
    throw err;
  }
  processData(data, function(err, processedData) {
    if (err) {
      throw err;
    }
    writeFile('processed.txt', processedData, function(err) {
      if (err) {
        throw err;
      }
      console.log('File has been processed successfully.');
    });
  });
});

// Section 4 - NodeJS coding - (15 - 20 mins)
// Is a trivial example of callback hell
// Refactor the code for the better, using any techniques you are aware of

const fs = require('fs');
const path = process.argv[2];

const readFile = path => new Promise((resolve, reject) => {
  return fs.readFile(path, (err, buffer) => {
    if (err) {
      return reject('Error trying to get stats');
    }
    return resolve(buffer);
  })
})

const getStats = path => new Promise((resolve, reject) => {
  return fs.stat(path, (err, stats) => {
    if (err) return reject('Error trying to get stats')
    return resolve(stats)
  })
})

const ensureFileExists = path => new Promise((resolve, reject) => {
  return fs.exists(path, (exists) => {
    if (exists) resolve(path)
    else reject('File does not exist')
  })
})

async function getFileContents(path, callback) {
  try {
    const filePath = await ensureFileExists(path)
    const stats = await getStats(filePath)
    if (stats.size > 0) {
      return callback(null, await readFile(path))
    } else {
      return callback(new Error('File exists but there is no content'));
    }
  } catch (error) {
    console.log(error)
    callback(error.message)
  }
}


getFileContents(path, (err, contents) => {
  if (err) {
    console.error(`There was an error getting contents for ${path}`, err);
    return;
  }
  console.info('File was found and the contents were loaded');
});


