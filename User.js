class User {
    constructor(id, username, email, password, role = "customer") {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role; // customer | admin
        this.cart = [];
    }

    // Thêm sản phẩm vào giỏ hàng
    addToCart(product) {
        this.cart.push(product);
        console.log(`Đã thêm ${product.name} vào giỏ hàng.`);
    }

    // Xóa sản phẩm khỏi giỏ hàng
    removeFromCart(productId) {
        this.cart = this.cart.filter(p => p.id !== productId);
        console.log(`Đã xóa sản phẩm khỏi giỏ hàng.`);
    }

    // Xem giỏ hàng
    viewCart() {
        return this.cart;
    }

    // Thanh toán
    checkout() {
        if (this.cart.length === 0) {
            console.log("Giỏ hàng trống.");
            return;
        }

        console.log("Thanh toán thành công.");
        this.cart = [];
    }

    // Hiển thị thông tin user
    getProfile() {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            role: this.role
        };
    }
}

module.exports = User;