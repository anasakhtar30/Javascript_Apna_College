// console.log("one")
// console.log("two")

// setTimeout(()=>{
//     console.log("hello")
// },3000)

// console.log("three")
// console.log("four")


//CALLBACK
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//     sum(a,b);
// }

// calculator(1,2,(a,b)=>{
// //    console.log(a+b);
// });


// const hello = ()=>{
//     console.log("hello")
// }

// setTimeout(hello,2000);

//CALLBACK HELL
// function getData(dataId,getNextData){//2s
//    setTimeout(()=>{
//     console.log("data fetched with id", dataId);
//     if(getNextData){
//         getNextData();
//     }
//    },3000)
// }

// console.log("getting data1....")
// getData(1,()=>{
//     console.log("getting data2....")
//     getData(2,()=>{
//         console.log("getting data3....")
//         getData(3,()=>{
//             console.log("getting data4....")
//             getData(4)
//         });
//     });
// });   
 
// getData(1);
// getData(2);
// getData(3);


/*
//Promise Chain

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
        },3000)
    })
}  

getData(1)
.then((res)=>{
    return getData(2)
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res);
})
*/

//PROMISES

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1")
//             resolve('success')
//         },4000)
//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve('success')
//         },4000)
//     })
// }

// console.log("fetching data1.....")
// asyncFunc1().then((res)=>{
//     console.log(res)
//     console.log("fetching data2.....")
//     asyncFunc2().then((res)=>{
//         console.log(res);
//     })
// })

// console.log("fetching data1.....")
// let p1 = asyncFunc1()
// p1.then((res)=>{
//     console.log(res)
//     console.log("fetching data2.....")
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     })
// })

// console.log("fetching data2.....")
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })

// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise")
//         resolve("123")
//         // reject('error')
//     })
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled", res)
// })

// promise.catch((err)=>{
//     console.log("rejected",err)
// })

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     // resolve('success');
//     reject("some error occured")
// })

//API promise return krega
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData();
//             }
//         },2000)
//     })
// }


//ASYNC-AWAIT
//async function always returns a promise

// async function hello(){
//     console.log("hello")
// }


function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data")
            resolve(200) // 200 represent success
        },2000)
    })
}

// async function getWeatherData(){
//     await api(); //1st call
//     await api(); //2nd call

// }

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
            if(getNextData){
                getNextData();
            }
        },2000)
    })
}

// async function getAllData(){
//     console.log("getting data1 ....")
//     await getData(1);
//     console.log("getting data2 ....")
//     await getData(2);
//     console.log("getting data3 ....")
//     await getData(3);
//     console.log("getting data4 ....")
//     await getData(4);
//     console.log("getting data5 ....")
//     await getData(5);
// }
(async function(){
    console.log("getting data1 ....")
    await getData(1);
    console.log("getting data2 ....")
    await getData(2);
    console.log("getting data3 ....")
    await getData(3);
    console.log("getting data4 ....")
    await getData(4);
    console.log("getting data5 ....")
    await getData(5);
}())