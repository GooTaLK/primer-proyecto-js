const d = document;

export default function contactForm(id) {
    const $form = d.querySelector(id),
          $required = d.querySelectorAll(`${id} [required]`),
          $submitError = d.querySelector(`${id}__submit-error`),
          $submitSucces = d.querySelector(`${id}__submit-succes`),
          patterns = {
              name: /^[A-Za-zÑñ]+(\s[A-Za-zÑñ]+)?$/,
              lastName: /^[A-Za-zÑñ]+(\s[A-Za-zÑñ]+)?$/,
              email: /^[\wÑñ-]{4,8}(\.[\wÑñ]{2,7})?@[A-Za-zÑñ]{4,8}\.[A-Za-zÑñ]{2,4}(\.[A-Za-zÑñ]{2,4})?$/,
              comment: /^.{1,255}$/
          };

    $required.forEach(input => {
        input.addEventListener("keyup", e => {
            if(patterns[e.target.name].test(e.target.value)) {
                input.classList.remove("invalidated");
                input.classList.add("validated");
                // d.querySelector(`#grupo__${e.target.name} i`).classList.remove("hidden");
                d.querySelector(`#grupo__${e.target.name} ${id}__correction`).classList.add("none");
            } else {
                input.classList.remove("validated");
                input.classList.add("invalidated");
                // d.querySelector(`#grupo__${e.target.name} i`).classList.add("hidden");
                d.querySelector(`#grupo__${e.target.name} ${id}__correction`).classList.remove("none");
            }
            
            if(e.target.value === "") {
                input.classList.remove("invalidated");
                input.classList.remove("validated");
                d.querySelector(`#grupo__${e.target.name} ${id}__correction`).classList.add("none");
            }
        })
    })

    $form.addEventListener("submit", e => {
        e.preventDefault();

        let acces = false;

        $required.forEach(el => el.classList.contains("validated") ? acces = true : acces = false);
        if(acces) {
            $submitError.classList.add("none");
            $submitSucces.classList.remove("hidden");
        } else {
            $submitError.classList.remove("none");
            $submitSucces.classList.add("hidden");
        }
    })
}