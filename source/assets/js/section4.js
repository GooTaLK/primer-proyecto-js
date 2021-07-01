const d = document,
      w = window;

export default function responsiveFrame(id, mq, contMobile, contDesktop) {
    let mediaQuery = w.matchMedia(mq);

    const responsiveChange = e => {
        if (e.matches) {
            d.getElementById(id).innerHTML = contDesktop;
        } else {
            d.getElementById(id).innerHTML = contMobile;
        }
    }

    mediaQuery.addEventListener("change", responsiveChange);
    responsiveChange(mediaQuery);
}