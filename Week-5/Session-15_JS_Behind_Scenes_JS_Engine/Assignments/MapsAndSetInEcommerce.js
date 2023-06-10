let productViews = new WeakMap();
let cartItems = new WeakSet();

function incrementProductViews(productId) {

  // Check if the key is already present in the WeakMap
  if (productViews.has(productId)) {
    // Increment the view count by 1
    productViews.set(productId, productViews.get(productId) + 1);
    return `Product ID 123 is viewed for the ${productViews.get(productId)} time`;
  } else {
    // Add the key to the WeakMap with an initial view count of 1
    productViews.set(productId, 1);
    return `Product ID 123 is viewed for the ${productViews.get(productId)} time`;
  }
}

function addToCart(productId) {

  // Check if the key is already present in the WeakSet
  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    // Add the key to the WeakSet
    cartItems.add(productId);
    return "Product added to cart";
  }
}

const product = {id : 123};

console.log(incrementProductViews(product)); // Product ID 123 is viewed for the first time
console.log(incrementProductViews(product)); // Product ID 123 is viewed for the second time
console.log(addToCart(product)); // Output: "Product added to cart"
console.log(addToCart(product)); // Output: "Product already in cart"
console.log(addToCart(product)); // Output: "Product already in cart"
