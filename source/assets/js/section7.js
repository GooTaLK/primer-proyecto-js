const d = document,
      w = window,
      n = navigator;

export default function disconnected(id, message) {
    const $id = d.getElementById(id);
    
    const isOnLine = () => {
        if(!n.onLine) {
            $id.textContent = message;
        } else {
            $id.textContent = "Ps sí tenes (Se debe mejorar)";
        }
    }
    
    w.addEventListener("online", e => isOnLine());
    w.addEventListener("offline", e => isOnLine());
    isOnLine();
}