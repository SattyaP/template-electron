const { ipcRenderer } = require('electron')

ipcRenderer.send('halo')
ipcRenderer.on("hai", () => {
    document.querySelector("h1").innerText = "Halo World Bro"
})