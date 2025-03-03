const searchBtn = document.getElementById('searchBtn');
const searchQuery = document.getElementById('searchQuery');
const imageResults = document.getElementById('imageResults');

searchBtn.addEventListener('click', async () => {
    const query = searchQuery.value.trim();
    if (!query) return alert('Escribe un término de búsqueda');

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=TU_API_KEY`);
        const data = await response.json();
        displayImages(data.results);
    } catch (error) {
        console.error('Error al buscar imágenes:', error);
    }
});

function displayImages(images) {
    imageResults.innerHTML = '';
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.urls.thumb;
        img.addEventListener('click', () => addImageToShirt(image.urls.full));
        imageResults.appendChild(img);
    });
}

function addImageToShirt(imgUrl) {
    console.log("Agregar imagen a la remera: ", imgUrl);
}
