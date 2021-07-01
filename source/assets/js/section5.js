const d = document,
      w = window;

export default function responsiveTester(formID) {
    const form = d.getElementById(formID);

    let tester;

    d.addEventListener("submit", e => {
        if(e.target === form) {
            e.preventDefault();
            tester = w.open(form.tUrl.value, "_blank", `width=${form.tWidth.value}, height=${form.tHeight.value}`, true);
        }
    })

    d.addEventListener("click", e => {
        if(e.target === form.tCloseBtn) tester.close();
    })
}