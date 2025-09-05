console.log("Página de videojuegos cargada correctamente 🎮");


document.querySelectorAll(".videojuego").forEach(vj => {
    vj.addEventListener("click", () => {
        alert("Seleccionaste: " + vj.querySelector("h2").textContent);
    });
});