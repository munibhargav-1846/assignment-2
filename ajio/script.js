/* =====================================
   STYLEHUB SHOPPING WEBSITE
===================================== */


/* =====================================
   PRODUCTS
===================================== */

const products = [

    {
        id: 1,
        name: "Relaxed Fit Cotton T-Shirt",
        brand: "Urban Edit",
        category: "Men",
        price: 799,
        oldPrice: 1599,
        rating: 4.6,
        reviews: 128,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 2,
        name: "Classic Denim Jacket",
        brand: "Roadster",
        category: "Men",
        price: 1799,
        oldPrice: 3599,
        rating: 4.7,
        reviews: 94,
        badge: "TRENDING",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 3,
        name: "Minimal Oversized Shirt",
        brand: "Style Club",
        category: "Men",
        price: 1199,
        oldPrice: 2299,
        rating: 4.4,
        reviews: 75,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 4,
        name: "Satin Evening Dress",
        brand: "Femme Luxe",
        category: "Women",
        price: 1999,
        oldPrice: 3999,
        rating: 4.8,
        reviews: 156,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 5,
        name: "Relaxed Linen Co-ord",
        brand: "House of Style",
        category: "Women",
        price: 1599,
        oldPrice: 3199,
        rating: 4.5,
        reviews: 86,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 6,
        name: "Straight Fit Blue Jeans",
        brand: "Denim Lab",
        category: "Women",
        price: 1299,
        oldPrice: 2599,
        rating: 4.6,
        reviews: 112,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 7,
        name: "Classic White Sneakers",
        brand: "Sneaker Street",
        category: "Shoes",
        price: 1899,
        oldPrice: 3499,
        rating: 4.8,
        reviews: 245,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 8,
        name: "Retro Runner Sneakers",
        brand: "Sole House",
        category: "Shoes",
        price: 2299,
        oldPrice: 4499,
        rating: 4.7,
        reviews: 174,
        badge: "TRENDING",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 9,
        name: "Kids Casual Hoodie",
        brand: "Mini Mode",
        category: "Kids",
        price: 899,
        oldPrice: 1799,
        rating: 4.5,
        reviews: 65,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 10,
        name: "Leather Crossbody Bag",
        brand: "Carry Culture",
        category: "Accessories",
        price: 1099,
        oldPrice: 2199,
        rating: 4.6,
        reviews: 91,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 11,
        name: "Classic Black Sunglasses",
        brand: "Vision Studio",
        category: "Accessories",
        price: 699,
        oldPrice: 1399,
        rating: 4.3,
        reviews: 58,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 12,
        name: "Minimal Leather Watch",
        brand: "Timecraft",
        category: "Accessories",
        price: 1499,
        oldPrice: 2999,
        rating: 4.5,
        reviews: 104,
        badge: "TRENDING",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=85"
    }

];


/* =====================================
   STATE
===================================== */

let cart = JSON.parse(localStorage.getItem("stylehubCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("stylehubWishlist")) || [];

let currentProductId = null;


/* =====================================
   ELEMENTS
===================================== */

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortSelect =
    document.getElementById("sortSelect");

const resultText =
    document.getElementById("resultText");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartItems =
    document.getElementById("cartItems");

const overlay =
    document.getElementById("overlay");

const cartCount =
    document.getElementById("cartCount");

const wishlistCount =
    document.getElementById("wishlistCount");

const subtotal =
    document.getElementById("subtotal");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const productModal =
    document.getElementById("productModal");

const loginModal =
    document.getElementById("loginModal");


/* =====================================
   MONEY FORMAT
===================================== */

function money(amount) {

    return "₹" + amount.toLocaleString("en-IN");

}


/* =====================================
   DISCOUNT
===================================== */

function getDiscount(product) {

    return Math.round(
        ((product.oldPrice - product.price) /
            product.oldPrice) * 100
    );

}


/* =====================================
   SAVE DATA
===================================== */

function saveData() {

    localStorage.setItem(
        "stylehubCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "stylehubWishlist",
        JSON.stringify(wishlist)
    );

}


/* =====================================
   TOAST
===================================== */

function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =====================================
   UPDATE COUNTERS
===================================== */

function updateCounters() {

    const totalCart =
        cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    cartCount.textContent = totalCart;

    wishlistCount.textContent =
        wishlist.length;

}


/* =====================================
   RENDER PRODUCTS
===================================== */

function renderProducts(list = products) {

    productsGrid.innerHTML = "";

    resultText.textContent =
        `Showing ${list.length} product${list.length !== 1 ? "s" : ""}`;


    if (list.length === 0) {

        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fa-solid fa-face-sad-tear"></i>
                <h3>No products found</h3>
                <p>Try another search or category.</p>
            </div>
        `;

        return;

    }


    list.forEach(product => {

        const liked =
            wishlist.includes(product.id);

        const discount =
            getDiscount(product);

        const card = document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="badge">
                    ${product.badge}
                </span>

                <button
                    class="wishlist ${liked ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                >
                    <i class="${liked ? "fa-solid" : "fa-regular"} fa-heart"></i>
                </button>

                <button
                    class="quick-view"
                    onclick="openProduct(${product.id})"
                >
                    QUICK VIEW
                </button>

            </div>


            <div class="product-info">

                <div class="product-brand">
                    ${product.brand}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-rating">

                    <i class="fa-solid fa-star"></i>
                    ${product.rating}

                    <span>
                        (${product.reviews})
                    </span>

                </div>

                <div class="price-row">

                    <span class="price">
                        ${money(product.price)}
                    </span>

                    <del class="old-price">
                        ${money(product.oldPrice)}
                    </del>

                    <span class="discount">
                        ${discount}% OFF
                    </span>

                </div>

            </div>

        `;


        productsGrid.appendChild(card);

    });

}


/* =====================================
   FILTER + SEARCH + SORT
===================================== */

function applyFilters() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    const category =
        categoryFilter.value;

    const sort =
        sortSelect.value;


    let filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(search)
                ||
                product.brand
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =
                category === "All"
                ||
                product.category === category;


            return matchesSearch &&
                matchesCategory;

        });


    if (sort === "low") {

        filtered.sort(
            (a, b) => a.price - b.price
        );

    }


    if (sort === "high") {

        filtered.sort(
            (a, b) => b.price - a.price
        );

    }


    if (sort === "rating") {

        filtered.sort(
            (a, b) => b.rating - a.rating
        );

    }


    if (sort === "discount") {

        filtered.sort(
            (a, b) =>
                getDiscount(b) -
                getDiscount(a)
        );

    }


    renderProducts(filtered);

}


/* =====================================
   WISHLIST
===================================== */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                productId => productId !== id
            );

        showToast("Removed from wishlist");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist ❤️");

    }

    saveData();

    updateCounters();

    applyFilters();

}


/* =====================================
   ADD TO CART
===================================== */

function addToCart(id) {

    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }


    saveData();

    updateCounters();

    renderCart();

    showToast("Product added to bag");

}


/* =====================================
   CHANGE QUANTITY
===================================== */

function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }


    saveData();

    updateCounters();

    renderCart();

}


/* =====================================
   REMOVE ITEM
===================================== */

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveData();

    updateCounters();

    renderCart();

    showToast("Item removed");

}


/* =====================================
   RENDER CART
===================================== */

function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-bag-shopping"></i>

                <h3>Your bag is empty</h3>

                <p>
                    Add something you love.
                </p>

            </div>

        `;

        subtotal.textContent = "₹0";

        return;

    }


    let total = 0;


    cart.forEach(item => {

        const product =
            products.find(
                product => product.id === item.id
            );


        if (!product) return;


        total +=
            product.price *
            item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="cart-item-info">

                <h4>
                    ${product.name}
                </h4>

                <p>
                    ${product.brand}
                </p>

                <div class="cart-price">
                    ${money(product.price)}
                </div>

                <div class="quantity">

                    <button
                        onclick="changeQuantity(${product.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${product.id}, 1)"
                    >
                        +
                    </button>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${product.id})"
                >
                    REMOVE
                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    subtotal.textContent =
        money(total);

}


/* =====================================
   OPEN CART
===================================== */

function openCart() {

    cartDrawer.classList.add("active");

    overlay.classList.add("active");

}


/* =====================================
   CLOSE CART
===================================== */

function closeCart() {

    cartDrawer.classList.remove("active");

    overlay.classList.remove("active");

}


/* =====================================
   OPEN PRODUCT
===================================== */

function openProduct(id) {

    const product =
        products.find(
            product => product.id === id
        );


    if (!product) return;


    currentProductId = id;


    document.getElementById(
        "detailImage"
    ).src = product.image;


    document.getElementById(
        "detailBrand"
    ).textContent = product.brand;


    document.getElementById(
        "detailName"
    ).textContent = product.name;


    document.getElementById(
        "detailRating"
    ).innerHTML = `
        ⭐ ${product.rating}
        <span>(${product.reviews} reviews)</span>
    `;


    document.getElementById(
        "detailPrice"
    ).textContent =
        money(product.price);


    document.getElementById(
        "detailOldPrice"
    ).textContent =
        money(product.oldPrice);


    document.getElementById(
        "detailDiscount"
    ).textContent =
        `${getDiscount(product)}% OFF`;


    productModal.classList.add("active");

}


/* =====================================
   CLOSE PRODUCT MODAL
===================================== */

function closeProductModal() {

    productModal.classList.remove("active");

}


/* =====================================
   LOGIN
===================================== */

function openLogin() {

    loginModal.classList.add("active");

}


function closeLogin() {

    loginModal.classList.remove("active");

}


/* =====================================
   SALE
===================================== */

function filterSaleProducts() {

    const saleProducts =
        products.filter(
            product => getDiscount(product) >= 50
        );

    renderProducts(saleProducts);

    document.getElementById(
        "products"
    ).scrollIntoView({
        behavior: "smooth"
    });

    showToast("Showing sale products");

}


/* =====================================
   SHOW ALL
===================================== */

function showAllProducts() {

    searchInput.value = "";

    categoryFilter.value = "All";

    sortSelect.value = "recommended";

    renderProducts(products);

    document.getElementById(
        "products"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================
   SCROLL TO PRODUCTS
===================================== */

function scrollToProducts() {

    document.getElementById(
        "products"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================
   SHOW SALE BUTTON
===================================== */

function showSale() {

    filterSaleProducts();

}


/* =====================================
   CATEGORY BUTTONS
===================================== */

document
    .querySelectorAll(".category-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;

                categoryFilter.value =
                    category;

                applyFilters();

                document.getElementById(
                    "products"
                ).scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });


/* =====================================
   SEARCH
===================================== */

searchInput.addEventListener(
    "input",
    applyFilters
);


/* =====================================
   CATEGORY FILTER
===================================== */

categoryFilter.addEventListener(
    "change",
    applyFilters
);


/* =====================================
   SORT
===================================== */

sortSelect.addEventListener(
    "change",
    applyFilters
);


/* =====================================
   CART BUTTON
===================================== */

document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("mobileCartBtn")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


overlay.addEventListener(
    "click",
    closeCart
);


/* =====================================
   WISHLIST BUTTON
===================================== */

document
    .getElementById("wishlistBtn")
    .addEventListener(
        "click",
        () => {

            const wishlistProducts =
                products.filter(
                    product =>
                        wishlist.includes(product.id)
                );


            if (wishlistProducts.length === 0) {

                showToast(
                    "Your wishlist is empty"
                );

                return;

            }


            renderProducts(
                wishlistProducts
            );

            document.getElementById(
                "products"
            ).scrollIntoView({
                behavior: "smooth"
            });

        }
    );


/* =====================================
   LOGIN BUTTON
===================================== */

document
    .getElementById("loginBtn")
    .addEventListener(
        "click",
        openLogin
    );


/* =====================================
   LOGIN FORM
===================================== */

document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            closeLogin();

            showToast(
                "Login demo successful"
            );

            this.reset();

        }
    );


/* =====================================
   PRODUCT ADD BUTTON
===================================== */

document
    .getElementById("detailAddBtn")
    .addEventListener(
        "click",
        () => {

            if (currentProductId) {

                addToCart(
                    currentProductId
                );

                closeProductModal();

            }

        }
    );


/* =====================================
   SIZE BUTTONS
===================================== */

document
    .querySelectorAll(".size")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".size")
                    .forEach(size =>
                        size.classList.remove("active")
                    );

                button.classList.add("active");

            }
        );

    });


/* =====================================
   NEWSLETTER
===================================== */

document
    .getElementById("newsletterForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const email =
                document.getElementById(
                    "emailInput"
                ).value.trim();


            if (email === "") {

                showToast(
                    "Please enter your email"
                );

                return;

            }


            showToast(
                "Successfully subscribed!"
            );

            this.reset();

        }
    );


/* =====================================
   CHECKOUT
===================================== */

document
    .getElementById("checkoutBtn")
    .addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Your bag is empty"
                );

                return;

            }


            showToast(
                "Checkout demo ready!"
            );

        }
    );


/* =====================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
===================================== */

productModal.addEventListener(
    "click",
    function(event) {

        if (event.target === productModal) {

            closeProductModal();

        }

    }
);


loginModal.addEventListener(
    "click",
    function(event) {

        if (event.target === loginModal) {

            closeLogin();

        }

    }
);


/* =====================================
   ESC KEY
===================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeCart();

            closeProductModal();

            closeLogin();

        }

    }
);


/* =====================================
   INITIAL LOAD
===================================== */

renderProducts();

renderCart();

updateCounters();