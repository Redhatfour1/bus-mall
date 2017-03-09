// 'use strict';

//array with all the items stored.
var productPictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//empty array assigned to store 'Items' that have been clicked.
var productPictures  = [];
var clickChart = [];
var ctx = document.getElementById('myChart').getContext('2d');
//object constructor with four instances.
function Items (name, filepath, totalDisplayed, totalClicked) {
  this.name = name;
  this.filepath = './assets/' + name + '.jpg';
  this.totalDisplayed = 0; //this is number of votes.
  this.totalClicked = 0;//this is number of clicks.
  productPictures.push(this);
}
//this function loops through the array that has 'Items' stored to instantiate each item.
(function() {
  for (var i = 0; i < productPictureNames.length; i++) {
    new Items (productPictureNames[i]);
  }
  console.log(productPictureNames);
})();

var tracker = {//I'm creating three element properties that will grab an id in html to write on the page.
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

  randomImage: function() {//generating a random number.
    return Math.floor(Math.random() * productPictures.length);
  },

  displayThree: function() {//this function assigns a random image from the array with the stored 'Items' to a element.
    this.imgObjOne = productPictures[this.randomImage()];
    this.imgObjTwo = productPictures[this.randomImage()];
    this.imgObjThree = productPictures[this.randomImage()];
//this if statement is used to check against each other to prevent copies.
    if (this.imgObjOne === this.imgObjTwo || this.imgObjOne === this.imgObjThree || this.imgObjTwo === this.imgObjThree) {
      this.displayThree();
    }
//taking the element source and assigning it to the instance of filepath as well as taking the element id and assign it to the element.
    this.imgOneEl.src = this.imgObjOne.filepath;
    this.imgOneEl.id = this.imgObjOne.name;
    this.imgTwoEl.src = this.imgObjTwo.filepath;
    this.imgTwoEl.id = this.imgObjTwo.name;
    this.imgThreeEl.src = this.imgObjThree.filepath;
    this.imgThreeEl.id = this.imgObjThree.name;
},

checkClicks: function() {//this function allows the user to click 15 times and then removes the click listener. At this point a button apears to view results which is added through the event listener.

  if (this.clicks > 14) {
    this.picturesAlbumEl.removeEventListener('click', this.clickHandler);
    tracker.viewResultsEl.hidden = false;
    this.viewResultsEl.addEventListener('click', function(event) {//this is my button
      event.preventDefault();//this keeps the browser from firing off the event listener especially in old browsers like explorer.

      tracker.renderResults();
      console.log('checkClicks');

    });
  }
},
clickHandler: function(event) {//this function  checks to see if the id attached to the event is equal to the name that's attached to the object and calls the displayThree function.
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

addTotal: function(elId)  {//this function looks through what's stored into the empty array and if the element id is equal to the name then add the total numver of times it was displayed.
  for (var i in productPictures) {
    if (elId === productPictures[i].name) {
      productPictures[i].totalDisplayed += 1;
      console.log(productPictures[i]);
      break;
    }
  }
},

renderResults: function()  {// created a ul variable and assigned it to create a an elements which will loop through an empty array and create li elements based on what was pushed into the empty array. Took the same variable I created and assigned it to the name of the items that was pushed into the empty array and the number of time it was displayed.
  var ulEl =document.createElement('ul');
  for (var i in productPictures) {
    var liEl = document.createElement('li');
    liEl.textContent = productPictures[i].name + ': ' + productPictures[i].totalDisplayed;
    ulEl.appendChild(liEl);
  }
  this.resultsListEl.appendChild(ulEl);//this is appending the text content to the child of the ul element.
  drawChart();
  },
};

function dataInfo() {//this function loops through the items pushed into the empty array and assigns the displayed data to the chart.
  console.log('dataInfo');
  for (var i = 0; i < productPictures.length; i++) {
    clickChart[i]= productPictures[i].totalDisplayed;
  }
  console.log('clickChart: ', clickChart);
}
//this allows the user to click on the three pictures through an event listener which is an element in html.
tracker.picturesAlbumEl.addEventListener('click', tracker.clickHandler);
tracker.displayThree();//this csalles my displayThree function.
localStorage.getItem('stringifyProductPictures');

var newProductPictures = JSON.parse(productPictures);
function drawChart() {//this is a library that creates a chart on your page.
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
