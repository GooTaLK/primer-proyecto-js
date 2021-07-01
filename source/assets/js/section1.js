const d = document;
let intervalID1;

export default function btnOnOff(onBtn, offBtn, element, classID, afterWhere, action) {
    d.addEventListener("click", e => {
        if(e.target.matches(onBtn)) {
            if(!e.target.disabled) {
                e.target.disabled = true;
                addElement(element, classID, afterWhere);
                act(action, classID);
            }
        }
        
        if(e.target.matches(offBtn)) {
            if(d.querySelector(onBtn).disabled) {
                d.querySelector(onBtn).disabled = false;
                removeElement(classID);
                clearInterval(intervalID1);
            }
        }
    })
}

export const addElement = (element, classID, afterWhere) => {
    const el = d.createElement(element);
    el.classList.add(classID);
    d.querySelector(afterWhere).after(el);
}

export const removeElement = (classID) => {
    d.querySelector(`.${classID}`).remove();
}

const act = (action, classID) => {
    if(action === "clock") clockBlinking(classID);
    if(action === "alarm") alarm(classID);
}

const clockBlinking = (classID) => {
    intervalID1 = setInterval(() => {
        let currentTime = new Date(),
            hour = currentTime.getHours(),
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            mer,
            h,
            m,
            s;
        (hour > 11) ? mer = "P.M." : mer = "A.M.";
        (hour > 12) ? h = hour - 12 : h = hour;
        (minutes < 10) ? m = "0" + minutes : m = minutes;
        (seconds < 10) ? s = "0" + seconds : s = seconds;
        d.querySelector(`.${classID}`).textContent = `${h}:${m}:${s} ${mer}`;
    }, 1000);
}


const alarm = (classID) => {
    d.querySelector(`.${classID}`).textContent = "Joe...";
    let audio = d.createElement("audio");
    audio.classList.add("alarm");
    audio.setAttribute("src", "source/sound/ameno.mp3");
    d.querySelector(`.${classID}`).appendChild(audio);
    d.querySelector(".alarm").play();
}