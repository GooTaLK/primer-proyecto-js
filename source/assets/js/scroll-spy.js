const d = document;

export default function scrollSpy() {
    const $boxes = d.querySelectorAll("section[data-scroll-spy]"),
          options = {
              threshold: 0.5
          };

    const callback = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");

            entry.isIntersecting 
                ? d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active") 
                : d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
        });
    }

    const observer = new IntersectionObserver(callback, options);

    $boxes.forEach(el => observer.observe(el));
}