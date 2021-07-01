export default function shiftActive(key, subject) {
    document.addEventListener("click", e => {
        if(e.target.matches(key) || e.target.matches(`${key} *`)) {
            document.querySelector(subject).classList.toggle("is-active");
            document.querySelector(key).classList.toggle("is-active");
        }
        
        if(e.target.matches(`${subject} a`)) {
            document.querySelector(subject).classList.toggle("is-active");
            document.querySelector(key).classList.toggle("is-active");
        }
    })
}