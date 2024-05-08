function getCheeze() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheeze = "Amul Cheeze";
      //console.log("Here is your ", cheeze);
      resolve(cheeze);
    }, 2000);
  });
}

function makeDough(cheeze) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = "Pizza Base";
      //console.log("Here is your ", dough);

      //resolve(dough);
      reject("Bad cheeze");
    }, 3000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = "Cooked Pizza";
      //console.log("Here is your", pizza);
      resolve(pizza);
    }, 5000);
  });
}

getCheeze()
  .then((cheeze) => {
    console.log("Here is your", cheeze);

    return makeDough(cheeze);
  })
  .then((dough) => {
    console.log("Here is your", dough);
    return bakePizza(dough);
  })
  .then((pizza) => {
    console.log("Here is your cooked pizza");
  })
  .catch((data) => {
    console.log("Error occured", data);
  })
  .finally(() => {
    console.log("Thanks for visiting our restaurant");
  });
