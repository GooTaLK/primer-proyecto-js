const d = document;

export default function searchImg(input, content) {
    d.addEventListener("keyup", e => {
        if(e.target.matches(input)) {
            d.querySelectorAll(content).forEach(el => 
                el.textContent.toLowerCase().includes(e.target.value)
                    ? el.classList.remove("hidden", "filter")
                    : el.classList.add("hidden", "filter")
            )

            if(e.key === "Escape") e.target.value = "";
        }
    })
}