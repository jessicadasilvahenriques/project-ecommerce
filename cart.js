export async function addToCart(productId) {
  const data = new Date().toISOString().split("T")[0];

  const cart = {
    userId: 1,
    date: data,
    products: [
      {
        productId: productId,
        quantity: 1
      }
    ]
  };

  try {
    const response = await fetch("https://fakestoreapi.com/carts/7", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cart)
    });

    if (response.ok) {
      const result = await response.json();

      console.log("Carrinho atualizado:", result);
      alert("Produto adicionado ao carrinho!");
    } else {
      alert("Erro ao adicionar produto!");
    }

  } catch (error) {
    console.log("Erro:", error);
    alert("Erro ao adicionar produto!");
  }
}
