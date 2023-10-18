const container = document.getElementById('container');
container.className += ' d-flex justify-content-end';
const scoreDisplay = document.getElementById('score-value'); 

let score = 0;//alert('scoreDisplay : '+score);

const pictureDivs = document.createElement('div');
pictureDivs.className += ' d-flex justify-content-end';
const wordDivs = document.createElement('div'); 
wordDivs.className += ' d-flex justify-content-end';



//vòng lặp để tạo ảnh và ô chữ kéo thả
vocas.forEach((voca) => {
    let pictureDiv = createImgCard(voca.image.url,voca.name)
    let wordDiv = createItemCard(voca.name)

    pictureDivs.appendChild(pictureDiv);
    wordDivs.appendChild(wordDiv);    
});

// --------------------------------------------Function to shuffle an array using the Fisher-Yates algorithm
shuffleElement(wordDivs)
//-------------------------------------------------------------------------------------------------------------

container.appendChild(pictureDivs);container.appendChild(wordDivs); //alert('typeof wordDivs');

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
        }
    }
});