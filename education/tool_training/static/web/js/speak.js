const speakButton = document.getElementById('speakButton');
const textArea = document.getElementById('textArea');alert(textArea.value);

speakButton.addEventListener('click', () => {
    const text = textArea.value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
});
//<button id="speakButton">Speak</button>
//<textarea id="textArea" rows="4" cols="50">Hello, this is a text to speech example.</textarea>

function speakword(word){
    var newtext = word;
    var newutterance = new SpeechSynthesisUtterance(newtext);
    window.speechSynthesis.speak(newutterance);
  }