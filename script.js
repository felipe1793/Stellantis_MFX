let video = document.querySelector("#cel")
let btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    if(!navigator.mediaDevices || navigator.mediaDevices.getUserMedia) {
        alert("Navegador não suporta este recurso")
        return
    }

    navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
        video.srcObject = stream
        video.play();
    })
})