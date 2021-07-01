const d = document,
      w = window;

export default function speaker() {
    const $speakSelect = d.querySelector(".narrator__select"),
          $speakTextarea = d.querySelector(".narrator__textarea"),
          $speakbtn = d.querySelector(".narrator__btn"),
          speechMessage = new SpeechSynthesisUtterance();

    let voices = [];

    w.speechSynthesis.addEventListener("voiceschanged", e => {
        voices = w.speechSynthesis.getVoices();
        
        voices.forEach(voice => {
            const $option = d.createElement("option");
            $option.value = voice.name;
            $option.textContent = `${voice.name} - ${voice.lang}`;
            $speakSelect.insertAdjacentElement("beforeend", $option);
        })
    })

    d.addEventListener("change", e => {
        if(e.target === $speakSelect) speechMessage.voice = voices.find(voice => voice.name === e.target.value);
    })

    d.addEventListener("click", e => {
        if(e.target === $speakbtn) {
            speechMessage.text = $speakTextarea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    })
}