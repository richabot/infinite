const container = document.querySelector('.container');

let globalDataArray = [];
var arr=JSON.parse(localStorage.getItem("breeds"))||[]

globalData();

async function globalData() {
    globalDataArray = await fetch(`http://localhost:8080/breeds`);
    globalDataArray = await globalDataArray.json();
    globalDataArray = globalDataArray
    console.log(globalDataArray,"global data");
    localStorage.setItem("breeds",JSON.stringify(globalDataArray))
}
console.log(arr,"ai")

function loadImages(numImages) {
  let i = 0;
  while (i < numImages) {
    console.log(i,"i")
        console.log(arr[i].picture,"lops")
        const img = document.createElement('img');
        img.src = `${arr[i].picture}`;
        container.appendChild(img);
     
    i += 1;
  }
}

loadImages(30);

// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener('scroll', () => {
  // console.log('scrolled', window.scrollY); // scrolled from top
  // console.log(window.innerHeight); // visible part of screen
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    loadImages(30);
  }
});