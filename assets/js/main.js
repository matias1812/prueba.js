const ul = document.querySelector('.products')

const product__footer = document.querySelector('.product__footer')

product__footer.addEventListener('click', clickHandler)
    console.log(product__footer)




async function apiCall(){
  try {const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  
    render(data)
  } catch (error) {
    console.error(error.message)
  }
}

function clickHandler(e) {
  e.preventDefault(e)
  const product__like = e.children.closest('.product__like')
  if (product__like) {
    apiCall()
  }
}

function render(products) {
    let html = ''
    for (const product of products) {
        html += `<li class="product">
        <div class="product__image-container">
          <img src="${product.image}" alt="${product.title}" class="product__image" />
        </div>
        <div class="product__content">
          <header class="product__header">
            <h6 class="product__category">${product.category}</h6>
            <h2 class="product__title">${product.title}</h2>
            <p class="product__price">${product.price}</p>
            <p class="product__description">${product.description}</p>
          </header>
          <footer class="product__footer">
            <a href="#" data-id="${product.id}" class="product__like"><i class="icon-heart-empty"></i></a>
            <a href="#" class="product__add-to-cart">Add to Cart</a>
          </footer>
        </div>
      </li>`
    }
    
    ul.innerHTML = html
}





apiCall()