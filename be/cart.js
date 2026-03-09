let cart = [];

const addToCart = (product) => {
    cart.push(product);
    console.log("Đã thêm: ", product);
};

const removeItem = (id) => {
    cart = cart.filter(item => item.id !== id);
};

const updateQty = (id, qty) => {
    let item = cart.find(i => i.id === id);
    if (item) item.quantity = qty;
};