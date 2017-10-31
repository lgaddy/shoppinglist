        var groceryList = [
            {
                name: 'Cheese',
                price: 2.20
            },
            {
                name: 'Eggs',
                price: 3.30
            },
             {
                name: 'Pasta',
                price: 1.90
            },
            {
                name: 'Oranges',
                price: 3.40
            },
            {
                name: 'Apples',
                price: 2.20
            },
            {
              name:'Chicken Tenders',
              price:5.90
            },
            {
              name:'Broccoli',
              price: 2.30
            },
            {
              name:'Sweet Potato',
              price: 3.30
            },
            {
              name:'Kale',
              price:4.20
            },
            {
              name:'Bread',
              price:1.40
            },
            {
              name:'Tofu',
              price:5
            },
        ];
        var total = 0;
        groceryList.forEach(function(list){
          total += list.price;
          console.log( `${list.name} $${list.price}`);
        });
        console.log(`Grand Total: $ ${total.toFixed(2)}`);

groceryList.forEach(function(list) {
  var paragraph = document.createElement('p');
  paragraph.innerHTML = `Item: ${list.name} - Price: ${list.price.toFixed(2)}`;
  document.body.appendChild(paragraph);
});

var header = document.createElement('h1');
header.innerHTML = `The Grand Total is ${total.toFixed(2)}`;
document.body.appendChild(header);

function add(){
  var name = document.getElementById("grocery");
  var price = document.getElementById("cost");
  groceryList.push({
    name: name.value,
    price: price.value
  });
  var paragraph = document.createElement('p');
  paragraph.innerHTML = `Item: ${list.name} - Price: ${list.price.toFixed(2)}`;
  console.log(name.value + " " + price.value);
  console.log(groceryList);
}


            
            
