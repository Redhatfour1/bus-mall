// 'use strict';

var productPictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var productPictures  = [];
// var filepathArray = [];
//
// var currentlyDisplayed = [];
// var attachNewImage;
// var newImage;
var clickChart = [];
var ctx = document.getElementById('myChart').getContext('2d');
// var imageEl = document.getElementById('pic-box');

function Items (name, filepath, totalDisplayed, totalClicked) {
  this.name = name;
  this.filepath = './assets/' + name + '.jpg';
  this.totalDisplayed = 0; //this is number of votes
  this.totalClicked = 0;//this is number of clicks
  productPictures.push(this);
}

(function() {
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
  resultsListEl: document.getElementById('resultsList'),
  clicks: 1,

  randomImage: function() {
    return Math.floor(Math.random() * productPictures.length);
  },

  displayThree: function() {
    this.imgObjOne = productPictures[this.randomImage()];
    this.imgObjTwo = productPictures[this.randomImage()];
    this.imgObjThree = productPictures[this.randomImage()];

    if (this.imgObjOne === this.imgObjTwo || this.imgObjOne === this.imgObjThree || this.imgObjTwo === this.imgObjThree) {
      this.displayThree();
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
    tracker.viewResultsEl.hidden = false;
    this.viewResultsEl.addEventListener('click', function(event) {//this is my button
      event.preventDefault();

      tracker.renderResults();
      console.log('checkClicks');
  //   collectData();
  //   tracker.viewResults();
  //   storeData();

    });
  }
},
clickHandler: function(event) {
  tracker.checkClicks();
  if (event.target.id === tracker.imgObjOne.name || event.target.id === tracker.imgObjTwo.name || event.target.id === imgObjThree.name) {
  tracker.clicks++;
  tracker.addTotal(event.target.id);
  tracker.displayThree();

  }
  dataInfo();
  function storeData() {
  var stringProduct = JSON.stringify(productArray);
  localStorage.setItem('stringifyProductPictures', JSON.stringify(productPictures));
  var jsonProductPictures = JSON.stringify(ProductPictures);
  console.log(storeData);
};

},

addTotal: function(elId)  {
  for (var i in productPictures) {
    if (elId === productPictures[i].name) {
      productPictures[i].totalDisplayed += 1;
      console.log(productPictures[i]);
      break;
    }
  }
},

renderResults: function()  {
  var ulEl =document.createElement('ul');
  for (var i in productPictures) {
    var liEl = document.createElement('li');
    liEl.textContent = productPictures[i].name + ': ' + productPictures[i].totalDisplayed;
    ulEl.appendChild(liEl);
  }
  this.resultsListEl.appendChild(ulEl);
  drawChart();
  },

};


function dataInfo() {
  console.log('dataInfo');
  for (var i = 0; i < productPictures.length; i++) {
    clickChart[i]= productPictures[i].totalDisplayed;
  }
  console.log('clickChart: ', clickChart);
}

tracker.picturesAlbumEl.addEventListener('click', tracker.clickHandler);
tracker.displayThree();

localStorage.getItem('stringifyProductPictures');
var newProductPictures = JSON.parse(productPictures);



function drawChart() {
  console.log('drawChart');
  console.log('clickChart: ', clickChart);
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
      datasets: [{
        label: '# of Click',
        data: clickChart,

        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    }
  });
}
