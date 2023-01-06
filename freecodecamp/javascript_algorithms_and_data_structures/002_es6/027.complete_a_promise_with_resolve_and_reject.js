const myPromise = new Promise((resolve, reject) => {
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});