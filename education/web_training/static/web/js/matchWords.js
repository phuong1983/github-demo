console.log('match words');

const container = document.getElementById('container');
container.className += ' d-flex flex-wrap justify-content-end';
const wordDivs = document.getElementById('wordDivs');
const scoreDisplay = document.getElementById('score-value'); 
let score = 0;//alert('scoreDisplay : '+score);

vocas.forEach((voca) => {
    let pictureDiv = createImgCard(voca.image.url,voca.name)
    let wordDiv = createItemCard(voca.name)

    container.appendChild(pictureDiv);
    wordDivs.appendChild(wordDiv);    
});
shuffleElement(wordDivs)
container.addEventListener('dragover', (e) => {
    e.preventDefault();
});

container.addEventListener('drop', (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('text/plain');
    const picture = e.target.closest(".dropTarget");

    if (picture) {
        const pictureName = picture.name;
        if (word === pictureName) {
            score++;
            scoreDisplay.textContent = score;
            wordDivs.querySelector('#'+word).remove();
            speakword(word);
        }
        else{speakword('try again')}
    }
});