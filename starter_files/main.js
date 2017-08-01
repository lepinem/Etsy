// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let sumPrice = 0;
    for( let i=0; i< data.length; i++) {
      sumPrice += data[i].price;
    }

  let avgPrice = (sumPrice / data.length);

console.log("The average price is " + avgPrice + ".");

}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let arrItems = [];
    for( let i=0; i<data.length; i++) {
      if ((data[i].price > 13.999) && (data[i].price < 18.01)) {
        arrItems.push(data[i].title);
      }
    }
  console.log(arrItems);
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let itemGBP = {};
    for(let i=0; i<data.length; i++) {
      if (data[i].currency_code === "GBP") {
        itemGBP.price = data[i].price;
        itemGBP.name = data[i].title;

      }
    }
  console.log(itemGBP);

}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let itemWood = {};
    for(let i=0; i<data.length; i++) {
      for(let w=0; w<data[i].materials.length; w++) {
        if (data[i].materials[w] == "wood") {
          itemWood = data[i].title;
        }
      }
    }
  console.log(itemWood);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let manyMaterials = {};
    for(let i=0; i<data.length; i++) {
      for(let m=0; m<data[i].materials.length; m++) {
        if (data[i].materials.length > 7) {
          manyMaterials.title = data[i].title;
          manyMaterials.length = data[i].materials.length;
          manyMaterials.items = data[i].materials;
        }
      }
    }
console.log(manyMaterials);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let homeMade = 0;
    for(let i=0; i<data.length; i++) {
      if (data[i].who_made === "i_did") {
        homeMade = homeMade + 1
      }
    }
  console.log(homeMade + " items were made by their sellers.");
}
