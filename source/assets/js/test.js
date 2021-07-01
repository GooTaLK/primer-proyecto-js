export default function btnOnOff(onBtn, offBtn) {
    document.addEventListener("click", e => {
        if(e.target.matches(onBtn)) {
            if(!document.querySelector(onBtn).hasAttribute("disabled")) {
                document.querySelector(onBtn).setAttribute("disabled", "disabled");
                addElement();
                clockBlinking();
            }
        }
        
        if(e.target.matches(offBtn)) {
            if(document.querySelector(onBtn).hasAttribute("disabled")) {
                document.querySelector(onBtn).removeAttribute("disabled", "disabled");
                removeElement();
            }
        }
    })
}

const addElement = () => {
    const clock = document.createElement("div");
    document.querySelector("#section1 h2").after(clock);
}

const  removeElement = () => {
    document.querySelector("#section1 div").remove();
}

const clockBlinking = () => {
    let mer = "";
    const hour = () => {
        let h = new Date().getHours();
        if(h > 12) {
            h -= 12;
            mer = "P.M.";
            return h;
        } else {
            mer = "A.M.";
            return h;
        }
    }
    //toLocateTimeString :v
    setInterval(() => {document.querySelector("#section1 div").textContent = `${hour()}:${new Date().getMinutes()}:${new Date().getSeconds()} ${mer}`}, 1000)
}

/* ----- Movimiento de la bola ----- */

const d = document;
let x = 0,
    y = 0;

export const moveBall = () => {
    d.addEventListener("keydown", e => {
        let direction = moving(e);

        switch (direction) {
            case "left":
                // e.preventDefault();
                x--;
                break;
            case "left-up":
                e.preventDefault();
                x--;
                y--;
                break;
            case "up":
                e.preventDefault();
                y--;
                break;
            case "up-right":
                e.preventDefault();
                x++;
                y--;
                break;
            case "right":
                // e.preventDefault();
                x++;
                break;
            case "right-down":
                e.preventDefault();
                x++;
                y++;
                break;
            case "down":
                e.preventDefault();
                y++;
                break;
            case "down-left":
                e.preventDefault();
                x--;
                y++;
                break;
            default:
                break;
        }
        // if(e.key === "ArrowLeft") x--;
        // if(e.key === "ArrowRight") x++;
        // if(e.key === "ArrowUp") y--;
        // if(e.key === "ArrowDown") y++;

        d.querySelector(".ball").style.transform = `translate(${x*10}px, ${y*10}px)`;
    })
}

export const alertKeys = () => {
    d.addEventListener("keydown", e => {
        if(e.key === "a" && e.altKey) alert("Depesivo estoy");
        if(e.key === "r" && e.altKey) prompt("Depesivo estoy");
        if(e.key === "c" && e.altKey) confirm("Depesivo estoy");
    })
}

const moving = (e) => {
    if(e.keyCode === 37) return "left";
    if(e.keyCode === 37 && e.keyCode === 38) return "left-up";
    if(e.keyCode === 38) return "up";
    if(e.keyCode === 38 && e.keyCode === 39) return "up-right";
    if(e.keyCode === 39) return "right";
    if(e.keyCode === 39 && e.keyCode === 40) return "right-down";
    if(e.keyCode === 40) return "down";
    if(e.keyCode === 40 && e.keyCode === 37) return "down-left";
}