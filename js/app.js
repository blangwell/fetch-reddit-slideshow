const submitButton = document.querySelector('button')
const textField = document.querySelector('input')
const container = document.querySelector('.container')
const redditJSON = 'https://www.reddit.com/search.json?q='
const sfw = '+nsfw:no'

document.addEventListener('DOMContentLoaded', function() {
    submitButton.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {}
        console.log(textField.value);
        fetch(redditJSON + textField.value + sfw)
        .then(function(responseData) { // fetch data with url
            // let userSearch = redditJSON + textField.value;
            console.log(responseData);
            return responseData.json(); // return in json for that
        })
        .then(function(jsonData) {
            let results = jsonData;
            let children = results.data.children
            console.log(children);
            for (let i = 0; i <= 20; i++) {
                // does a catch() call go in here?
                let newImage = document.createElement('img');
                newImage.src = children[i].data.thumbnail;
                container.appendChild(newImage);

            }

        })
        
        
    })
})

const carouselControls = document.createElement('div');
carouselControls.classList.add('carousel', 'slide'); 
carouselControls.setAttribute('id', 'carouselControls');
carouselControls.setAttribute('data-ride', 'carousel');

// append this to carouselControls
const carouselInner = document.createElement('div');
carouselInner.classList.add('carousel-inner');

const carouselItemActive = document.createElement('div');
carouselItemActive.classList.add('carousel-item', 'active');


carouselControls.
container.appendChild
// boontscrap
/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */

