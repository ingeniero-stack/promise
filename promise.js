const data = [  "Harry",  "Ross",  "Bruce",  "Cook",  "Carolyn",  "Morgan",  "Albert",  "Walker",  "Randy",  "Reed",  "Larry",  "Barnes",  "Lois",  "Wilson",  "Jesse",  "Campbell",  "Ernest",  "Rogers",  "Theresa",  "Patterson",  "Henry",  "Simmons",  "Michelle",  "Perry",  "Frank",  "Butler",  "Shirley"];

const getData = (callback) => {
  setTimeout(() => {
    callback(data);
  }, 2000);
};

const displayData = (data) => {
  console.log(data);
};

getData(displayData);

/*The getData function returns the data array after a delay of 2000 milliseconds (2 seconds) using a setTimeout function. The displayData function simply logs the data to the console.

The getData function takes the displayData function as a callback and passes the data to it as an argument when it is ready.*/