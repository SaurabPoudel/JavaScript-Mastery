// let p = new Promise((resolve,reject)=>{
//     let a = 1 + 1
//     if(a == 2){
//         resolve('Succes')
//     }else{
//         reject('Failed')
//     }
// })

// p.then((message)=>{
//     console.log('This is in the then ' + message)
// }).catch((message)=>{
//     console.log('This is in the catch ' + message)
// })
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise((myResolve, myReject)=> {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );