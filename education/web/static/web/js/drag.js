const container = document.getElementById('container');
const scoreDisplay = document.getElementById('score-value'); 


let score = 0;//alert('scoreDisplay : '+score);
const pictureDivs = document.createElement('div');
pictureDivs.className += ' d-flex justify-content-end';
const wordDivs = document.createElement('div'); 
wordDivs.className += ' d-flex justify-content-end';
// Tạo các thành phần cho trò chơi
vocas.forEach((voca) => {
    const pictureDiv = document.createElement('div');
    pictureDiv.classList.add('pictures');
    pictureDiv.name = voca.name;
    pictureDiv.className +=' p-2 flex-fill align-self-center card';
    pictureDiv.style.width = '50px';
    pictureDiv.innerHTML = `<img src="${voca.image.url}" class="img-fluid shadow-2-strong" alt="${voca.name}" />`;

    const wordDiv = document.createElement('div');
    wordDiv.classList.add('words');
    wordDiv.className +=' p-2 flex-fill align-self-center text-center';
    wordDiv.textContent = voca.name;
    wordDiv.id = voca.name;
    wordDiv.setAttribute('draggable', true);

    // Xử lý sự kiện kéo và thả
    wordDiv.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', voca.name);//alert(pictureDiv.name);
    });

    pictureDivs.appendChild(pictureDiv);
    wordDivs.appendChild(wordDiv);
    
});
const childrenArray = Array.from(wordDivs.children);

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
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

container.appendChild(pictureDivs);container.appendChild(wordDivs);
alert('typeof wordDivs');

container.addEventListener('dragover', (e) => {
    e.preventDefault();
});

container.addEventListener('drop', (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('text/plain');
    const picture = e.target.closest('.pictures');

    if (picture) {
        const pictureName = picture.name;
        if (word === pictureName) {
            score++;
            scoreDisplay.textContent = score;
            wordDivs.querySelector('#'+word).remove();
        }
    }
});