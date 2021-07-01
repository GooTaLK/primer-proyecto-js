const d = document,
      n = navigator,
      ua = n.userAgent;

export default function aboutDevice(id) {
    const $id = d.getElementById(id),
          isMobile = {
              android: () => ua.match(/android/i),
              ios: () => ua.match(/iphone|ipad|ipod/i),
              windows: () => ua.match(/windows phone/i),
              any() {
                  return this.android() || this.ios() || this.windows();
              }
          },
          isDesktop = {
              linux: () => ua.match(/linux/i),
              mac: () => ua.match(/mac os/i),
              windows: () => ua.match(/windows nt/i),
              any() {
                  return this.linux() || this.mac() || this.windows();
              }
          },
          isBrowser = {
              chrome: () => ua.match(/chrome/i),
              safari: () => ua.match(/safari/i),
              firefox: () => ua.match(/firefox/i),
              opera: () => ua.match(/opera|opera mini/i),
              ie: () => ua.match(/msie|rv|iemobile/i),
              edge: () => ua.match(/edge|edg/i),
              any() {
                  return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
              }
          }

    $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li><br>
        <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li><br>
        <li>Navegador: (Esto es un problema :/)<b>${isBrowser.any()} ${isBrowser.edge()}</b></li>
    </ul>
    `
}