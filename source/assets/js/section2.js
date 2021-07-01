const d = document;

let x = 0,
y = 0;

export default function moveBall(cat, box) {
    const ball = d.querySelector(cat),
          ballBox = d.querySelector(box);

    d.addEventListener("click", e => {
        e.target === ballBox ? ballBox.classList.add("active") : ballBox.classList.remove("active");
    })

    d.addEventListener("keydown", e => {
        let ballLimits = ball.getBoundingClientRect(),
            boxLimits = ballBox.getBoundingClientRect();

        if(ballBox.classList.contains("active")) {
            e.preventDefault();

            if(ballBox.classList.contains("active") && e.key === "ArrowLeft" && boxLimits.left + 20 < ballLimits.left) {
                x -= 10;
            }
    
            if(ballBox.classList.contains("active") && e.key === "ArrowRight" && boxLimits.right - 20 > ballLimits.right) {
                // e.preventDefault();
                x += 10;
            }
    
            if(ballBox.classList.contains("active") && e.key === "ArrowUp" && boxLimits.top + 20 < ballLimits.top) {
                // e.preventDefault();
                y -= 10;
            }
    
            if(ballBox.classList.contains("active") && e.key === "ArrowDown" && boxLimits.bottom - 20 > ballLimits.bottom) {
                // e.preventDefault();
                y += 10;
            }
    
            ball.style.transform = `translate(${x}px, ${y}px)`;
        }
    })
}

export const alertKeys = () => {
    d.addEventListener("keydown", e => {
        if(e.key === "a" && e.altKey) alert("Depesivo estoy");
        if(e.key === "r" && e.altKey) prompt("Depesivo estoy");
        if(e.key === "c" && e.altKey) confirm("Depesivo estoy");
    })
}