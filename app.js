'use strict';

var productPictures = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imagePathArray = [];
var clickCount = 0;
var dispalys = 3;
var maxClicks = 20;
var productHistory = [];
function Items(nameOfproduct, imagePath, numOfVotes) {
  this.nameOfproduct = nameOfproduct;
  this.imagePath = imagePath;
  this.numOfVotes = 0;
  imagePathArray.push(this.imagePath);
  this.numberShown = 0;
  //this.render();
};

var bag = new Items('bag', 'bag.jpg');
var banana = new Items('banana', 'banana.jpg');
var bathroom = new Items('bathroom', 'bathroom.jpg');
var boots = new Items('boots', 'boots.jpg');
var breakfast = new Items('breakfast', 'breakfast.jpg');
var bubblegum = new Items('bubblegum', 'bubblegum.jpg');
var chair = new Items('chair', 'chair.jpg');
var cthulhu = new Items('cthulhu', 'cthulhu.jpg');
var dogDuck = new Items('dog-duck', 'dog-duck.jpg');
var dragon = new Items('dragon', 'dragon.jpg');
var pen = new Items('pen', 'pen.jpg');
var petSweep = new Items('pet-sweep', 'pet-sweep.jpg');
var scissors = new Items('scissors', 'scissors.jpg');
var shark = new Items('shark', 'shark.jpg');
var sweep = new Items('sweep', 'sweep.png');
var tauntaun = new Items('tauntaun', 'tauntaun.jpg');
var unicorn = new Items('unicorn', 'unicorn.jpg');
var usb = new Items('usb', 'bag.gif');
var waterCan = new Items('water-can', 'water-can.jpg');
var wineGlass = new Items('wine-glass', 'wine-glass.jpg');

function randomPic() {
  var randomPicIndex = randomPicIndex = Math.round(Math.random() * productPictures.lenght);
  return randomPicIndex;
  console.log(randomPicIndex);
}

function getProducts(products) {
  var group = [];
  var previous = productHistory[productHistory.length - 1];

  while (group.length < displays) { //no repeats within rows
    var image = products[randomPic()];
    while (group.includes(image)) {
      image = products[randomPic()];
    }
    group.push(image);
  }
}

// function threePictures() {
//   if (listenerCount > 20) {
//     pic1.removeEventListener('click', showPicture1);
//     pic2.removeEventListener('click', showPicture2);
//     pic3.removeEventListener('click', showPicture3);
//     var votingResults = countedVotes();
//     var productNames = countProducts();
//     setCountedVotes(countedVotes);
//     setProducts(products);
//     createChart(countedVotes, products);
//     return;
//   }
//   for(var index = 0; index < 3; index++) {
//     var randomPicImagePath = imagePathArray[randomPic()];
//     if (currentlyShowed.includes(randomPicImagePath)) {
//       randompicImagePath = imagePathArray[randomPic()];
//       console.log('Random Pic Image Path is:' + randomPicImagePath);
//     }
//   }
//
// }

var tracker = {

 //Items.prototype.randomOne = function(){
  //for (var index = 0; index < productPictures.length; index++);
};
