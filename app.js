const products = [
    {
        id: 1,
        title: "Nike Blazer Mid '77 ",
        price: 110,
        category: "Nike Air Force 2",
        stock:30,
        rating: 4.5,
        brand: "Nike",
        isAvailable: true,
        image: "./one.png"
    },
    {
        id: 2,
        title: "Nike SB x Run the Jewels Dunk",
        price: 140,
        category: "Nike Air Force ",
        stock: 60,
        rating: 4.8,
        brand: "Nike",
        isAvailable: true,
        image: "./two.png"
    },
    {
        id: 3,
        title: "Nike Air Force 1 High '07 PRM",
        price: 160,
        category: "Nike Air Force 1",
        stock: 45,
        rating: 4.6,
        brand: "Nike",
        isAvailable: true,
        image: "./thre.png"
    },
    {
        id: 4,
        title: "Jordan 1 Retro Spider-Man",
        price: 170,
        category: "Nike Air Force 1",
        stock: 300,
        rating: 4.3,
        brand: "Nike",
        isAvailable: true,
        image: "./four.png"
    },
    {
        id: 5,
        title: "Nike SB Zoom Blazer Low",
        price: 140,
        category: "Nike Air Force 3",
        stock: 80,
        rating: 4.7,
        brand: "Nike",
        isAvailable: true,
        image: "./five.png"
    },
    {
        id: 6,
        title: "Nike Air Force 1 Low Unity",
        price: 120,
        category: "Nike Air Force 4",
        stock: 35,
        rating: 4.4,
        brand: "Nike",
        isAvailable: true,
        image: "./six.png"
    },
    {
        id: 7,
        title: "Nike Air Force 1 GTX ",
        price: 110,
        category: "Nike Air Force 5",
        stock: 90,
        rating: 4.6,
        brand: "Nike",
        isAvailable: true,
        image: "./seven.png"
    },
    {
        id: 8,
        title: "Nike WMNS Air Force 1 '07 LX",
        price: 140,
        category: "Nike Air Force 5",
        stock: 150,
        rating: 4.2,
        brand: "Nike",
        isAvailable: true,
        image: "./eight.png"
    },
    // {
    //     id: 9,
    //     title: "Webcam HD",
    //     price: 50,
    //     category: "Electronics",
    //     stock: 40,
    //     rating: 4.1,
    //     brand: "A4Tech",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/109/300/300"
    // },
    // {
    //     id: 10,
    //     title: "Monitor 24 inch",
    //     price: 180,
    //     category: "Electronics",
    //     stock: 25,
    //     rating: 4.7,
    //     brand: "LG",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/110/300/300"
    // },
    // {
    //     id: 11,
    //     title: "Office Chair",
    //     price: 210,
    //     category: "Furniture",
    //     stock: 15,
    //     rating: 4.5,
    //     brand: "IKEA",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/111/300/300"
    // },
    // {
    //     id: 12,
    //     title: "Desk Lamp",
    //     price: 35,
    //     category: "Furniture",
    //     stock: 70,
    //     rating: 4.3,
    //     brand: "Philips",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/112/300/300"
    // },
    // {
    //     id: 13,
    //     title: "Backpack",
    //     price: 65,
    //     category: "Fashion",
    //     stock: 50,
    //     rating: 4.4,
    //     brand: "Nike",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/113/300/300"
    // },
    // {
    //     id: 14,
    //     title: "Sneakers",
    //     price: 95,
    //     category: "Fashion",
    //     stock: 40,
    //     rating: 4.6,
    //     brand: "Adidas",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/114/300/300"
    // },
    // {
    //     id: 15,
    //     title: "T-Shirt",
    //     price: 20,
    //     category: "Fashion",
    //     stock: 200,
    //     rating: 4.2,
    //     brand: "Puma",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/115/300/300"
    // },
    // {
    //     id: 16,
    //     title: "Jeans",
    //     price: 50,
    //     category: "Fashion",
    //     stock: 90,
    //     rating: 4.3,
    //     brand: "Levis",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/116/300/300"
    // },
    // {
    //     id: 17,
    //     title: "Coffee Maker",
    //     price: 110,
    //     category: "Home",
    //     stock: 30,
    //     rating: 4.5,
    //     brand: "Bosch",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/117/300/300"
    // },
    // {
    //     id: 18,
    //     title: "Electric Kettle",
    //     price: 45,
    //     category: "Home",
    //     stock: 65,
    //     rating: 4.4,
    //     brand: "Tefal",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/118/300/300"
    // },
    // {
    //     id: 19,
    //     title: "Blender",
    //     price: 75,
    //     category: "Home",
    //     stock: 40,
    //     rating: 4.1,
    //     brand: "Philips",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/119/300/300"
    // },
    // {
    //     id: 20,
    //     title: "Microwave Oven",
    //     price: 160,
    //     category: "Home",
    //     stock: 20,
    //     rating: 4.6,
    //     brand: "Samsung",
    //     isAvailable: true,
    //     image: "https://picsum.photos/id/120/300/300"
    // }
];

let filteredProducts = [...products];
let currentCategory = 'all';
let currentSort = 'featured';


const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortBtn = document.getElementById('sortBtn');
const sortMenu = document.getElementById('sortMenu');
const sortOptions = document.querySelectorAll('.sort-option');


function renderProducts(productsToRender) {
    productGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p class="no-products">No products found</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <span class="product-stock">${product.stock} in stock</span>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });
}


function filterProducts() {
    let result = products;


    if (currentCategory !== 'all') {
        result = result.filter(product => product.category === currentCategory);
    }


    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        result = result.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }


    result = sortProducts(result);

    filteredProducts = result;
    renderProducts(filteredProducts);
}


function sortProducts(productsToSort) {
    const sorted = [...productsToSort];

    switch (currentSort) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        case 'featured':
        default:
            return sorted.sort((a, b) => b.rating - a.rating);
    }
}


searchInput.addEventListener('input', filterProducts);

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        filterProducts();
    });
});

sortBtn.addEventListener('click', () => {
    sortMenu.classList.toggle('show');
});

sortOptions.forEach(option => {
    option.addEventListener('click', () => {
        currentSort = option.dataset.sort;
        sortMenu.classList.remove('show');
        filterProducts();
    });
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('.sort-dropdown')) {
        sortMenu.classList.remove('show');
    }
});


renderProducts(products);
