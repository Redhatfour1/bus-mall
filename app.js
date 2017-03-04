// 'use strict';

var productPictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var productPictures  = [];
// var filepathArray = [];
//
// var currentlyDisplayed = [];
// var attachNewImage;
// var newImage;
// var listenerCount = 0;
// var imageEl = document.getElementById('pic-box');

function Items (name, filepath, totalDisplayed, totalClicked) {
  this.name = name;
  this.filepath = 'assets/' + this.name + '.jpg';
  this.totalDisplayed = 0; //this is number of votes
  this.totalClicked = 0;//this is number of clicks
  productPictures.push(this);
}

(function createPictureAlbum() {
  for (var i = 0; i < productPictureNames.length; i++) {
    new Items (productPictureNames[i]);
  }
  console.log(productPictureNames);
})();

// var bag = new Items('bag', 'assets/bag.jpg');
// var banana = new Items('banana', 'assets/banana.jpg');
// var bathroom = new Items('bathroom', 'assets/bathroom.jpg');
// var boots = new Items('boots', 'assets/boots.jpg');
// var breakfast = new Items('breakfast', 'assets/breakfast.jpg');
// var bubblegum = new Items('bubblegum', 'assets/bubblegum.jpg');
// var chair = new Items('chair', 'assets/chair.jpg');
// var cthulhu = new Items('cthulhu', 'assets/cthulhu.jpg');
// var dogDuck = new Items('dog-duck', 'assets/dog-duck.jpg');
// var dragon = new Items('dragon', 'assets/dragon.jpg');
// var pen = new Items('pen', 'assets/pen.jpg');
// var petSweep = new Items('pet-sweep', 'assets/pet-sweep.jpg');
// var scissors = new Items('scissors', 'assets/scissors.jpg');
// var shark = new Items('shark', 'assets/shark.jpg');
// var sweep = new Items('sweep', 'assets/sweep.png');
// var tauntaun = new Items('tauntaun', 'assets/tauntaun.jpg');
// var unicorn = new Items('unicorn', 'assets/unicorn.jpg');
// var usb = new Items('usb', 'assets/usb.gif');
// var waterCan = new Items('water-can', 'assets/water-can.jpg');
// var wineGlass = new Items('wine-glass', 'assets/wine-glass.jpg');



var tracker = {
  imgOneEl: document.getElementById('img1'),
  imgTwoEl: document.getElementById('img2'),
  imgThreeEl: document.getElementById('img3'),
  imgObjOne: null,
  imgObjTwo: null,
  imgObjThree: null,
  picturesAlbumEl: document.getElementById('picturesAlbum'),
  viewResultsEl:document.getElementById('viewResults'),
  clicks: 1,

  randomImage: function() {
    return Math.floor(Math.random() * productPictures.length);
  },

  displayThree: function() {
    this.imgObjOne = productPictures[tracker.randomImage()];
    this.imgObjTwo = productPictures[tracker.randomImage()];
    this.imgObjThree = productPictures[tracker.randomImage()];

    if (this.imgObjOne === this.imgObjTwo || this.imgObjOne === this.imgObjThree || this.imgObjTwo === this.imgObjThree) {
    }

    this.imgOneEl.src = this.imgObjOne.filepath;
    this.imgOneEl.id = this.imgObjOne.name;
    this.imgTwoEl.src = this.imgObjTwo.filepath;
    this.imgTwoEl.id = this.imgObjTwo.name;
    this.imgThreeEl.src = this.imgObjThree.filepath;
    this.imgThreeEl.id = this.imgObjThree.name;
},

checkClicks: function() {
  if (this.clicks > 14) {
    this.picturesAlbumEl.removeEventListener('click', this.clickHandler);
    this.viewResultsEl.addEventListener('click', function(event) {
      event.preventDefault();
      tracker.renderResults();
    });
  }
},
clickHandler: function(event) {
  tracker.checkClicks();
  if (event.target.id === tracker.imgObjOne.name || event.target.id === tracker.imgObjTwo.name || event.target.id === imgObjThree.name) {
  tracker.clicks++;
  tracker.tallyTotal(event.target.id);
  tracker.displayThree();
  }
},

tallyTotal: function(elId)  {
  for (var i in productPictures) {
    if (elId === productPictures[i].name) {
      productPictures[i].totalClicked += 1;
      console.log(productPictures[i]);
      break;
    }
  }
},

renderResults: function()  {
  var ulEl =document.createElement('ul');
  for (var i in productPictures) {
    var liEl = document.createElement('li');
    liEl.textContent = productPictures[i].name + ': ' + productPictures[i].totalClicked + 'votes';
    ulEl.appendChild(liEl);
  }
  this.viewResultsEl.appendChild(ulEl);
  },
};

tracker.picturesAlbumEl.addEventListener('click', tracker.clickHandler);
tracker.displayThree();
