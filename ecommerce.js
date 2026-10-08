class Ecommerce {
  constructor() {
    this.products = [];
    this.cart = [];
  }

  // Adicionar produto
  addProduct(product) {
    this.products.push(product);
  }

  // Alterar preço de um produto
  setProductPrice(productId, price) {
    const product = this.products.find(product => product.id === productId);

    if (product) {
      product.price = price;
    }
  }

  // Mostrar todos os produtos
  getAllProducts() {
    return this.products;
  }

  // Mostrar nomes dos produtos
  getAllProductsNames() {
    return this.products.map(product => product.name).join("; ");
  }

  // Procurar produto pelo ID
  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  // Procurar produtos por preço
  getProductsByPrice(initialPrice, finalPrice) {
    return this.products.filter(product =>
      product.price >= initialPrice && product.price <= finalPrice
    );
  }

  // Adicionar produto ao carrinho
  addProductToCart(product) {
    this.cart.push(product);
  }


  // Mostrar carrinho
  getCart() {
    return this.cart;
  }

  // Calcular total do carrinho
  getCartTotalPrice() {
    let total = 0;

    this.cart.forEach(product => {
      total = total + product.price;
    });

    return total;
  }
}


// TESTES

const loja = new Ecommerce();

// Adicionar produtos
loja.addProduct({ id: 1, name: "Camisola", price: 20 });
loja.addProduct({ id: 2, name: "Calças", price: 35 });
loja.addProduct({ id: 3, name: "Sapatilhas", price: 60 });

// Mostrar produtos
console.log("Todos os produtos:", loja.getAllProducts());

// Mostrar nomes
console.log("Nomes:", loja.getAllProductsNames());

// Procurar produto
console.log("Produto ID 2:", loja.getProductById(2));

// Procurar por preço
console.log("Produtos entre 20 e 40:", loja.getProductsByPrice(20, 40));

// Alterar preço
loja.setProductPrice(1, 25);
console.log("Preço atualizado:", loja.getProductById(1));

// Adicionar ao carrinho
loja.addProductToCart(loja.getProductById(1));
loja.addProductToCart(loja.getProductById(2));

// Mostrar carrinho
console.log("Carrinho:", loja.getCart());

// Mostrar total
console.log("Total:", loja.getCartTotalPrice());
