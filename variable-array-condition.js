var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = flase;

// array

var items = ['bottle', 'mug', 'pen', 'paper'];
// items.indexOf('pen'); 

items.indexOf('logense'); // -1
items.push('envelop');
items.push('watch');
items.pop();

// conditionals
if (items.length >= 4){
    console.log("you have many stuff on your desk");
}

else if(items.length == 4){
    console.log("You have one hali items");
}
else{
    console.log("Wow ! you have a clean desk");
}
