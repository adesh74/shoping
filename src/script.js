fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('products');
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="100">
        <p>Price: $${product.price}</p>
        <p class="to_scroll">${product.description}</p>
        <h3>${product.title}</h3>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Error:', error));
