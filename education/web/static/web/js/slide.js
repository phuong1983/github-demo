var imgIndex = 0; 
const textAreaSpeak = document.getElementById('textAreaSpeak');

function speakword(word){
    var newtext = word;
    var newutterance = new SpeechSynthesisUtterance(newtext);
    window.speechSynthesis.speak(newutterance);
  }
function previousBtn(){
  var imgSlide = document.getElementById("sky");
  if (imgIndex>0) {
    imgIndex -= 1;
    imgSlide.src = vocas[imgIndex].image.url;
    textAreaSpeak.innerHTML = 'tên : '+vocas[imgIndex].name;
    speakword(vocas[imgIndex].name);
  } else {
    imgIndex = vocas.length-1;
    imgSlide.src = vocas[imgIndex].image.url;
    textAreaSpeak.innerHTML = 'tên : '+vocas[imgIndex].name;
    speakword(vocas[imgIndex].name);
  }
}
function nextBtn(){
  var imgSlide =document.getElementById("sky");
  imgIndex +=1;
  if (imgIndex==vocas.length) {
    imgIndex = 0;
    imgSlide.src = vocas[0].image.url;
    textAreaSpeak.innerHTML = 'tên : '+vocas[imgIndex].name;
    speakword(vocas[imgIndex].name);
  } else {
    imgSlide.src=vocas[imgIndex].image.url;
    textAreaSpeak.innerHTML = 'tên : '+vocas[imgIndex].name;
    speakword(vocas[imgIndex].name);
  }
}


var nextId; 

function slidePrevious() {
  nextId = setInterval(previousBtn, 2000); // Assign the interval ID to nextId
}

function slideNext() {
  nextId = setInterval(nextBtn, 2000); // Assign the interval ID to nextId
}

function stopSlide() {
  clearInterval(nextId); // Clear the interval using the stored interval ID (nextId)
}

document.getElementById("previousBtn").addEventListener("click",slidePrevious);
document.getElementById("nextBtn").addEventListener("click",slideNext);
document.getElementById("stopBtn").addEventListener("click",stopSlide);