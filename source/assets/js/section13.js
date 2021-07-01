const d = document;

export default function autoVideo() {
    const $video = d.querySelectorAll("[data-auto-video]");

    const cb = entries => {
        entries.forEach(entry => {
            entry.isIntersecting ? entry.target.play() : entry.target.pause();

            d.addEventListener("visibilitychange", e => {
                d.visibilityState === "visible" && entry.isIntersecting ? entry.target.play() : entry.target.pause();
            })
        });
    }

    const observer = new IntersectionObserver(cb, {
        // rootMargin: "-100px 0px"
        threshold: 1
    });

    $video.forEach(el => observer.observe(el));
}
