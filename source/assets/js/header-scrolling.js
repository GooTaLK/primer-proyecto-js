const d = document,
      w = window;

export default function headerScroll(id) {
    const $header = d.querySelector(id);

    const hideShowHeader = () => {
        (d.documentElement.scrollTop > 300 || w.pageYOffset > 300)
            ? $header.classList.add("lift")
            : $header.classList.remove("lift");
    }

    w.addEventListener("scroll", e => {
        hideShowHeader();
    })

    hideShowHeader();
}