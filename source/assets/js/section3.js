const d = document;

let intervalID1;

export default function missDate(wherePlaceElement, when, what, message, sound) {
    const countdown = d.querySelector(wherePlaceElement);

    intervalID1 = setInterval(() => {
        const date = new Date(),
              newYear = new Date(when);

        let timeLess = new Date(newYear - date + 1),
            daysLess = timeLess / 86400000,
            hoursLess = (timeLess % 86400000) / 3600000,
            minsLess = ((timeLess % 86400000) % 3600000) / 60000,
            secLess = (((timeLess % 86400000) % 3600000) % 60000) / 1000,
            less = `Faltan ${Math.trunc(daysLess)} días, ${Math.trunc(hoursLess)} horas, ${Math.trunc(minsLess)} minutos y ${Math.trunc(secLess)} segundos para ${what}`;

        if(timeLess > 0) countdown.textContent = less;
        if(timeLess === 0) {
            let audio = d.createElement("audio");
            audio.classList.add("date-over");
            audio.setAttribute("src", sound);
            countdown.appendChild(audio);
            d.querySelector(".date-over").play();
            clearInterval(intervalID1);
            countdown.textContent = message;
        }
        if(timeLess < 0) countdown.innerHTML = "<h1>¡¡SE ACABÓ!!</h1>";
    }, 1000)
}