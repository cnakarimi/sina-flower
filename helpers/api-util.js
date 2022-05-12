import { PRODUCTS, PERSONELS } from "../db";

export async function getAllProducts() {
  return PRODUCTS;
}

export async function getPersonnel() {
  return PERSONELS;
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
