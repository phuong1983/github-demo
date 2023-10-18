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
  //shuffleElement(wordDivs)
  //-------------------------------------------------------------------------------------------------------------

  // Tạo các thành phần cho trò chơi
function createImgCard(imgUrl='-',imgName){
    const pictureDiv = document.createElement('div');
    pictureDiv.classList.add("dropTarget");
    pictureDiv.name = imgName;
    pictureDiv.className +=' p-2 d-flex flex-wrap thumbnail align-self-center card';
    if(imgUrl=='-'){
      pictureDiv.innerHTML = "${imgName}"
    } else{
      pictureDiv.innerHTML = `<img src="${imgUrl}" class="img-fluid flex-wrap shadow-2-strong" alt="${imgName}" />`;
    }  
  
    return pictureDiv;
  }
function createItemCard(itemName){
    let wordDiv = document.createElement('div');
    wordDiv.classList.add('draggable');
    wordDiv.className +=' p-2 align-self-center text-center card words';
    wordDiv.textContent = itemName;
    wordDiv.id = itemName;
    wordDiv.setAttribute('draggable', true);
  
    // Xử lý sự kiện kéo và thả
    wordDiv.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', itemName);//alert(pictureDiv.name);
    });
    return wordDiv;
  }

  
function speakword(word){
  var newtext = word;
  var newutterance = new SpeechSynthesisUtterance(newtext);
  window.speechSynthesis.speak(newutterance);
  console.log(word);
}