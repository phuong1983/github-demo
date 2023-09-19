const speakButton = document.getElementById('speakButton');
const textArea = document.getElementById('textArea');

speakButton.addEventListener('click', () => {
    const text = textArea.value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
});

const text = textArea.value;
const utterance = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(utterance);