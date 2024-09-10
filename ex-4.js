// Exercise #4
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
// Start coding here
async function getData(){
  try{
    let johnProfile = await getJohnProfile();
    console.log(johnProfile);
  } catch (error){
    console.log(error);
  }
}
getData();