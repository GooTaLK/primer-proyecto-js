const d = document,
      w = window;

export default function scrollBtn(btn) {
    const scrollBtn = d.querySelector(btn);
    
    const hideShowBtn = () => {
        (d.documentElement.scrollTop > 500 || w.pageYOffset > 500)
            ? scrollBtn.classList.remove("hidden")
            : scrollBtn.classList.add("hidden");
    }
    
    w.addEventListener("scroll", () => {
        hideShowBtn();
    })
    
    d.addEventListener("click", e => {
        if(e.target.matches(btn)) scrollTo({behavior: "smooth", top: 0});
    })

    hideShowBtn();
}