const canvas = document.getElementById("shirtCanvas");
const ctx = canvas.getContext("2d");

const mainColorInput = document.getElementById("mainColor");
const detailColorInput = document.getElementById("detailColor");
const sleeveTypeInput = document.getElementById("sleeveType");
const playerNameInput = document.getElementById("playerName");
const fontSelect = document.getElementById("fontSelect");
const playerNumberInput = document.getElementById("playerNumber");
const logoUpload = document.getElementById("logoUpload");
const saveDesignBtn = document.getElementById("saveDesign");
const downloadDesignBtn = document.getElementById("downloadDesign");

let logoImage = null;

function drawShirt() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja la camiseta
    ctx.fillStyle = mainColorInput.value;
    ctx.fillRect(100, 50, 300, 400);

    // Mangas
    ctx.fillStyle = detailColorInput.value;
    if (sleeveTypeInput.value === "long") {
        ctx.fillRect(50, 50, 50, 200);
        ctx.fillRect(400, 50, 50, 200);
    } else {
        ctx.fillRect(50, 50, 50, 100);
        ctx.fillRect(400, 50, 50, 100);
    }

    // Nombre
    ctx.font = 40px ${fontSelect.value};
    ctx.fillText(playerNameInput.value, 150, 500);

    // Número
    ctx.font = 80px ${fontSelect.value};
    ctx.fillText(playerNumberInput.value, 230, 350);

    // Logo (si está cargado)
    if (logoImage) {
        ctx.drawImage(logoImage, 200, 150, 100, 100);
    }
}

// Actualiza el diseño en tiempo real
[
    mainColorInput,
    detailColorInput,
    sleeveTypeInput,
    playerNameInput,
    fontSelect,
    playerNumberInput
].forEach(input => input.addEventListener("input", drawShirt));

logoUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            logoImage = new Image();
            logoImage.src = e.target.result;
            logoImage.onload = drawShirt;
        };
        reader.readAsDataURL(file);
    }
});

drawShirt();

// Guardar diseño
saveDesignBtn.addEventListener("click", () => {
    const design = {
        mainColor: mainColorInput.value,
        detailColor: detailColorInput.value,
        sleeveType: sleeveTypeInput.value,
        playerName: playerNameInput.value,
        font: fontSelect.value,
        playerNumber: playerNumberInput.value,
        logo: logoImage ? logoImage.src : null
    };
    localStorage.setItem("shirtDesign", JSON.stringify(design));
    alert("Diseño guardado.");
});

// Descargar diseño
downloadDesignBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "mi_remera.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});