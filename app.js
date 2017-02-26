'use strict';

var productPictures = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imagePathArray = [];
// var clickCount = 0;
var displays = 3;
// var maxClicks = 20;
var productHistory = [];
function Items(nameOfproduct, imagePath, numOfVotes) {
  this.nameOfproduct = nameOfproduct;
  this.imagePath = imagePath;
  this.numOfVotes = 0;
  imagePathArray.push(this.imagePath);
  // this.numberShown = 0;
  //this.render();
};

var bag = new Items('bag', 'assets/bag.jpg');
var banana = new Items('banana', 'assets/banana.jpg');
var bathroom = new Items('bathroom', 'assets/bathroom.jpg');
var boots = new Items('boots', 'assets/boots.jpg');
var breakfast = new Items('breakfast', 'assets/breakfast.jpg');
var bubblegum = new Items('bubblegum', 'assets/bubblegum.jpg');
var chair = new Items('chair', 'assets/chair.jpg');
var cthulhu = new Items('cthulhu', 'assets/cthulhu.jpg');
var dogDuck = new Items('dog-duck', 'assets/dog-duck.jpg');
var dragon = new Items('dragon', 'assets/dragon.jpg');
var pen = new Items('pen', 'assets/pen.jpg');
var petSweep = new Items('pet-sweep', 'assets/pet-sweep.jpg');
var scissors = new Items('scissors', 'assets/scissors.jpg');
var shark = new Items('shark', 'assets/shark.jpg');
var sweep = new Items('sweep', 'assets/sweep.png');
var tauntaun = new Items('tauntaun', 'assets/tauntaun.jpg');
var unicorn = new Items('unicorn', 'assets/unicorn.jpg');
var usb = new Items('usb', 'assets/bag.gif');
var waterCan = new Items('water-can', 'assets/water-can.jpg');
var wineGlass = new Items('wine-glass', 'assets/wine-glass.jpg');

var tracker = {
  randomNum: function() {
    var randomPicture = Math.round(Math.random() * productPictures.length);
    return randomPicture;
    console.log(randomPicture);
  },

  storeProducts: function() {
    this.stored = [];
    // var previous = productHistory[productHistory.length - 1];

    while (this.stored.length < displays) { //no repeats within rows
      var image = imagePathArray[this.randomNum()];
      while (this.stored.includes(image)) {
        image = imagePathArray[this.randomNum()];
      }
      this.stored.push(image);
      //if statement here
    }
  }
  //  productHistory.push(stored);
  //return stored;
};

function renderProducts(stored) {
  console.log(stored);
  var imagesStored = document.getElementById('pics-group');
  stored.forEach(function (imagePathArray) {
    var picBox = document.createElement('div');
    picBox.setAttribute('class', 'pic-box');
    imagesStored.appendChild(picBox);
    var pic = document.createElement('pic');
    pic.setAttribute('src', imagePathArray.imagePath);
    pic.setAttribute('nameOfproduct', imagePathArray.nameOfproduct);
    pic.setAttribute('class', 'imagePathArray-pic');
    picBox.appendChild(pic);
    console.log(pic.nameOfproduct);

    stored.forEach(function (imagePathArray) {
      if (imagePathArray.nameOfproduct === pic.nameOfproduct) {
        imagePathArray.numberShown++;
        console.log('incremented');
      }
    })
},
    function clearPics() {
      var imagesStored = document.getElementById('pics-group');
      var picsDom = document.getElementsByClassName('pic-box');
      var pics = Array.prototype.
      pics.forEach(function (pic) {
        imagesStored.removeChild(pic);
      });
    },

    function clickUpdate(pic) {
      imagePathArray.forEach(function (imagePathArray) {
        if (imagePathArray.nameOfproduct === pic.nameOfproduct)
      });
    },
    functionrenderList(imagePathArray) {
      imagePathArray.forEach(function (imagePathArray) {
        var li = document.createElement('li');
        li.textContent = imagePathArray.numberClicked + ' votes for ' + products;
        var statsList = document.getElementById();
        statsList.appendChild(li);
      })
    }

    function handleClicks() {
      var imagesDom = document.getElementsByClassName('')
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

 //Items.prototype.randomOne = function(){
  //for (var index = 0; index < productPictures.length; index++);
