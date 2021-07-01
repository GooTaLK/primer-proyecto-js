const d = document;

export default function sorteo(participants, btn) {
    const $entry = d.querySelectorAll(participants);

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) alert($entry[Math.round(Math.random()*($entry.length-1))].textContent);
    })
}