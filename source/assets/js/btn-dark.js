const d = document,
      ls = localStorage;

export default function switchTheme(btn) {
    const button = d.querySelector(btn),
          dark = d.querySelectorAll("[data-dark]"),
          darkTwo = d.querySelectorAll("[data-dark-two]"),
          darkThree = d.querySelectorAll("[data-dark-three]");

    let moon = "🌙",
        sun = "☀️";

    const darkTheme = () => {
        button.textContent = sun;
        dark.forEach(el => el.classList.add("dark-mode"));
        darkTwo.forEach(el => el.classList.add("dark-mode-two"));
        darkThree.forEach(el => el.classList.add("dark-mode-three"));
        ls.setItem("theme", "dark");
    }
    
    const lightTheme = () => {
        button.textContent = moon;
        dark.forEach(el => el.classList.remove("dark-mode"));
        darkTwo.forEach(el => el.classList.remove("dark-mode-two"));
        darkThree.forEach(el => el.classList.remove("dark-mode-three"));
        ls.setItem("theme", "light");
    }

    if(ls.getItem("theme") === null) ls.setItem("theme", "light");
    if(ls.getItem("theme") === "light") lightTheme();
    if(ls.getItem("theme") === "dark") darkTheme();

    d.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            if(button.textContent === moon) {
                darkTheme();
            } else if(button.textContent === sun) {
                lightTheme();
            }
        }
    })
}