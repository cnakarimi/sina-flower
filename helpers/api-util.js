export async function getAllProducts() {
  const response = await fetch("http://localhost:8000/products");
  const data = await response.json();

  const products = [];

  for (const key in data) {
    products.push({ id: key, ...data[key] });
  }
  return products;
}

export async function getPersonnel() {
  const response = await fetch("http://localhost:8000/personnel");
  const data = await response.json();

  const personnel = [];

  for (const key in data) {
    personnel.push({ id: key, ...data[key] });
  }
  return personnel;
}

export async function suggestedItems() {
  const allProducts = await getAllProducts();
  return allProducts.filter((product) => product.suggested);
}

export async function getProductById(id) {
  const allProducts = await getAllProducts();
  return allProducts.find((product) => product.id === id);
}

export async function getCategoriesProducts(category) {
  const allProducts = await getAllProducts();
  return allProducts.filter((product) => product.category === category);
}
