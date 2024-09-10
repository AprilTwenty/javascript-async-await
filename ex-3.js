//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
function displayJohnProfile(data){
  console.log(data);
}
function displayJohnOrder(data){
  console.log(data);
}
getJohnProfile()
.then(displayJohnProfile)
.then(getJohnOrders)
.then(displayJohnOrder);

/*   แบบ fucntion arrow
let displayJohnProfile = (data) => {console.log(data)};
let displayJohnOrder = (data)=> {console.log(data)};
getJohnProfile().then(displayJohnProfile).then(getJohnOrders).then(displayJohnOrder);
*/

/* แบบ async / await
async function getData(){
  let firstData = await getJohnProfile();
  console.log(firstData);
  let secondData = await getJohnOrders();
  console.log(secondData);
}
getData();
*/