// new promiseOne = new Promise(function (resolve , reject) {
//   setTimeout(function () {
//     console.log('Async task is complete');
//     resolve();
//   }, 1000)
// });

// promiseOne.then(function() {
//   console.log('Promise consumed');
// })

// new Promise (function(resolve, reject) {
//   setTimeout(function(){
//     console.log('Async task 2');
//     resolve
//   },1000)
// }).then (function() {
//   console.log("Async 2 resovlved");
// })



// const promiseThree = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     resolve({username: 'Chai' , email : 'chai@example'})
//   }, 1000);
// })

// promiseThree.then(function() {
//   console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({username : "hitesh", password : '123'})
//     } else {
//       reject("Error: Something Went Wrong")
//     }
//   }, 1000);
// })

// promiseFour
// .then((user) => {
//   console.log(user);
//   return user.username;
// }) .then((username) => {
//   console.log(username);
// }) .catch(function (error) {
//   console.log(error);
// }).finally( () => console.log("the promise is either resolved or rejected") )

const promiseFive = new Promise(function(resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({username: 'Javascripot' , password : '123'})
    }else {
      reject('JS went wrong.')
    }
  }, 1000);
});

async function consumePromiseFIve () {
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

