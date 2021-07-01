const d = document;

let n = 0;

export default function slider(btnBef, btnNext, selector) {
    const $items = d.querySelectorAll(selector),
          $bBtn = d.querySelector(btnBef),
          $nBtn = d.querySelector(btnNext);

    const hideAction = () => {
        $items.forEach(el => el.classList.add("hidden"));
        $items[n].classList.remove("hidden");
    }

    const hoverBtn = () => {
        (n === 0) ? $bBtn.classList.remove("prev") : $bBtn.classList.add("prev");
        (n === $items.length - 1) ? $nBtn.classList.remove("next") : $nBtn.classList.add("next");
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btnBef)) {
            if(n !== 0) {
                n--;
                hideAction();
                hoverBtn();
            }
        }
        
        if(e.target.matches(btnNext)) {
            if(n !== $items.length - 1) {
                n++;
                hideAction();
                hoverBtn();
            }
        }

        if(e.target.matches(selector) || e.target.matches(`${selector} *`)) {
            if(n !== 0) {
                $items[n].querySelector("img").classList.toggle("hidden");
                $items[n].querySelector("p").classList.toggle("hidden");
            }
        }
    })

    hoverBtn();
}