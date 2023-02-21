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



// Asnchronous includes setTimeout(callback,ms) is not render blocking because it queues a task

// fetch use test apis like
   async function getData (){
    //use fetch api
    //    const request= await axios.get( 'https://randomuser.me/api/',{
    //        params:{
    //            results:10,
    //            inc:'name ,email,gender,phone, picture,cell,id,registered,login'
    //        }
    //    })
      
    //    const profiles = request.data.results;
        
    //    profiles.forEach(element => {
    //        profile.push({
    //           key: element.login.uuid,
    //           name: `${element.name.first} ${element.name.last}`,
    //           email: element.email,
    //           phone: element.phone,
    //           avatar: element.picture.medium,
    //           date: element.registered.date

    //        })
           
    //    });
    }

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
function callBackFunc(smt){
console.log(`in the callBackFunc ${smt}`)
}
function callingCallBack(a,b, theFun){
 a+=b
 console.log(a)
 theFun(a)
}


callingCallBack(5,8,callBackFunc)

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


