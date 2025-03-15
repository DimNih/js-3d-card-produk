// Data produk dalam array
const products = [
    {
        name: "TopoKey",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 5,
        price: "$149.99",
        modelSrc: "https://assets.codepen.io/3421562/topo_keyboard.glb",
        colors: [
            { deg: 0, color: "#2cb4f0" },
            { deg: 110, color: "#ff69e4" },
            { deg: 290, color: "#16b83f" }
        ],
        accent: "#2e2e2e"
    },
    {
        name: "PandaKey",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        rating: 3,
        price: "$99.99",
        modelSrc: "https://assets.codepen.io/3421562/panda_keyboard.glb",
        colors: [
            { deg: 0, invert: 0, color: "#1e1e1e" },
            { deg: 0, invert: 1, color: "#eee" }
        ],
        accent: "#ffffff"
    }
];

// Fungsi untuk merender card tambahan
function renderAdditionalProducts() {
    const container = document.getElementById('product-container');
    
    products.forEach(product => {
        // Buat elemen card
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.setProperty('--accent', product.accent);

        // Overflow dan model
        const overflow = document.createElement('div');
        overflow.classList.add('overflow');
        const model = document.createElement('div');
        model.classList.add('model');
        const modelViewer = document.createElement('model-viewer');
        modelViewer.setAttribute('camera-orbit', '64deg 25deg 64m');
        modelViewer.setAttribute('src', product.modelSrc);
        modelViewer.setAttribute('shadow-intensity', '0.4');
        model.appendChild(modelViewer);
        overflow.appendChild(model);
        card.appendChild(overflow);

        // Glass effect
        const glass = document.createElement('div');
        glass.classList.add('glass');
        card.appendChild(glass);

        // Content
        const content = document.createElement('div');
        content.classList.add('content');

        // Judul
        const h2 = document.createElement('h2');
        h2.textContent = product.name;
        content.appendChild(h2);

        // Deskripsi
        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = product.description;
        content.appendChild(description);

        // Rating
        const rating = document.createElement('div');
        rating.classList.add('rating');
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            star.textContent = i < product.rating ? '★' : '☆';
            rating.appendChild(star);
        }
        content.appendChild(rating);

        // Harga
        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = product.price;
        content.appendChild(price);

        // Opsi warna
        const options = document.createElement('div');
        options.classList.add('options');
        product.colors.forEach(color => {
            const div = document.createElement('div');
            div.style.background = color.color;
            const params = color.invert !== undefined ? `${color.deg}, ${color.invert}` : `${color.deg}`;
            div.setAttribute('onclick', `changeModelStyle(this, ${params})`);
            options.appendChild(div);
        });
        content.appendChild(options);

        card.appendChild(content);
        container.appendChild(card);
    });
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    renderAdditionalProducts();

    const modelViewers = document.querySelectorAll('model-viewer');
    const cards = document.querySelectorAll('.card');
    const defaultOrbit = '64deg 25deg 64m';
    const hoverOrbit = '90deg -42deg 80m';

    const applyOrbit = (modelViewer, orbit) => {
        modelViewer.setAttribute('camera-orbit', orbit);
        modelViewer.setAttribute('interpolation-decay', '200');
    };

    cards.forEach((card, index) => {
        const modelViewer = modelViewers[index];
        if (modelViewer) {
            card.addEventListener('mouseenter', () => applyOrbit(modelViewer, hoverOrbit));
            card.addEventListener('mouseleave', () => applyOrbit(modelViewer, defaultOrbit));
            modelViewer.addEventListener('load', () => {
                modelViewer.classList.add('loaded');
            });
        }
    });
});

// Fungsi untuk mengubah model
function changeModelStyle(element, deg, invert = 0) {
    const card = element.closest('.card');
    const modelViewer = card.querySelector('model-viewer');
    if (modelViewer) {
        modelViewer.style.filter = `hue-rotate(${deg}deg) invert(${invert})`;
    }
}