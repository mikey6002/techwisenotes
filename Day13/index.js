const promiseExample = new Promise((resolve, reject) => {
    console.log("Promise started");
    setTimeout(() => {
        console.log("Promise resolved");
        resolve("Success");
    },1000)
})

console.log(promiseExample);
const promiseExample2 = new Promise((resolve, reject) => {
    console.log("promise is being created");
    setTimeout(() => {
        const Success = true; // This simulate that something happens successfully or not
        if (Success) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    }, 1000)
})
console.log(promiseExample2);
promiseExample2.then((result) => {
    console.log("result ->" ,result);   // result of the promise
    console.log(promiseExample2) // this is just to show that the promise is resolved
}).catch((error) => {
    console.log("error ->", error); // this is just to show that the promise is rejected
})

const promiseObject = promiseExample2.then((result) => {
    console.log("result ->" ,result);   // result of the promise
    console.log(promiseExample2) // this is just to show that the promise is resolved
})
console.log(promiseObject); // this is just to show that the promise is resolved

const finnhunAPIKey = " "
const baseURL = "https://api.finnhub.io/api/v1/quote?symbol=AAPL&token=" + finnhunAPIKey

function fetchStockPrice(symbol){
    fetch('${baseURL}${symbol}')
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Current Price: ", data.c);
        console.log("High Price: ", data.h);
        console.log("Low Price: ", data.l);
        console.log("Open Price: ", data.o);
        console.log("Previous Close Price: ", data.pc);
    })
    .catch((error) => {
        console.error("Error fetching stock price: ", error);
    });
}