const container = document.getElementById('container');
container.className += ' d-flex justify-content-end';
const scoreDisplay = document.getElementById('score-value'); 

let score = 0;//alert('scoreDisplay : '+score);

const pictureDivs = document.createElement('div');
pictureDivs.className += ' d-flex justify-content-end';
const wordDivs = document.createElement('div'); 
wordDivs.className += ' d-flex justify-content-end';

// Tạo các thành phần cho trò chơi
function createImgCard(imgUrl='-',imgName){
  const pictureDiv = document.createElement('div');
  pictureDiv.classList.add("${imgName}");
  pictureDiv.name = voca.name;
  pictureDiv.className +=' p-2 flex-fill align-self-center card';
  pictureDiv.style.width = '50px';
  if(imgUrl=='-'){
    pictureDiv.innerHTML = "${imgName}"
  } else{
    pictureDiv.innerHTML = `<img src="${imgUrl}" class="img-fluid shadow-2-strong" alt="${imgName}" />`;
  }  

  return pictureDiv;
}
function createItemCard(itemName){
  const wordDiv = document.createElement('div');
  wordDiv.classList.add('draggable');
  wordDiv.className +=' p-2 flex-fill align-self-center text-center card';
  wordDiv.textContent = itemName;
  wordDiv.id = itemName;
  wordDiv.setAttribute('draggable', true);

  // Xử lý sự kiện kéo và thả
  wordDiv.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', itemName);//alert(pictureDiv.name);
  });
  return wordDiv;
}

//
vocas.forEach((voca) => {
    let pictureDiv = createImgCard(voca.image.url,voca.name)
    let wordDiv = createItemCard(voca.name)

    pictureDivs.appendChild(pictureDiv);
    wordDivs.appendChild(wordDiv);
    
});

// --------------------------------------------Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function shuffleElement(wordDivs){
    const childrenArray = Array.from(wordDivs.children);
    // Shuffle the children
    shuffleArray(childrenArray);
    // Clear the current children from wordDiv
    while (wordDivs.firstChild) {
      wordDivs.removeChild(wordDivs.firstChild);
    }
    // Append the shuffled children back to wordDiv
    for (const child of childrenArray) {
      wordDivs.appendChild(child);
    }
}
shuffleElement(wordDivs)
//-------------------------------------------------------------------------------------------------------------

container.appendChild(pictureDivs);container.appendChild(wordDivs); //alert('typeof wordDivs');

container.addEventListener('dragover', (e) => {
    e.preventDefault();
});

container.addEventListener('drop', (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('text/plain');
    const picture = e.target.closest(".${imgName}");

    if (picture) {
        const pictureName = picture.name;
        if (word === pictureName) {
            score++;
            scoreDisplay.textContent = score;
            wordDivs.querySelector('#'+word).remove();
        }
    }
});