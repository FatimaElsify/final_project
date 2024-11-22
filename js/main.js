// icons of nav bar

let user = document.querySelector('.user')
let cartIcon = document.querySelector('.shop-cart')
let seachIcon = document.querySelector('.s-glass')
let navbarIcon = document.querySelector('.bar-icon')

// menus for baar icons
let navCart = document.querySelector('.nav-cart')
let loginModal = document.querySelector('.login-modal')
let searchForm = document.querySelector('.search-form')
let barMenu = document.querySelector('.bar-menu')

// closing buttons
let closeSearch = document.querySelector('.close-search')
let xIcon = document.querySelectorAll('.x-icon')
let closebtn = document.querySelector('.close-icon')
let closeBar = document.querySelector('.close-bar')

// open cart
cartIcon.addEventListener('click', function (e) {
    e.preventDefault()

    navCart.classList.remove('hide')
})

// close cart
xIcon.forEach((icon) => {
    icon.addEventListener('click', function (e) {
        e.preventDefault()
        navCart.classList.add('hide')
    })
})

// open log in modal
user.addEventListener('click', function (e) {
    e.preventDefault()

    loginModal.classList.remove('hide')
})
// close login modal
closebtn.addEventListener('click', function (e) {
    e.preventDefault()
    loginModal.classList.add('hide')
})

//  open search
seachIcon.addEventListener('click', function (e) {
    e.preventDefault()
    searchForm.classList.remove('hide')
})

// close search
closeSearch.addEventListener('click', function (e) {
    e.preventDefault()
    searchForm.classList.add('hide')
})

//  open bar menu
navbarIcon.addEventListener('click', function (e) {
    e.preventDefault()
    barMenu.classList.remove('hide')
})

// close bar menu
closeBar.addEventListener('click', function (e) {
    e.preventDefault()
    barMenu.classList.add('hide')
})

// get products
let product = document.querySelector('.product')

async function getProducts() {
    let content = ''

    let response = await fetch('https://fakestoreapi.com/products')
    let products = await response.json()
    if (!response.ok) {
        throw new Error('HTTP error')
    }
    console.log(products)
    for (let i = 0; i < products.length; i++) {
        content += `
    <div class="col-md-3 col-sm-4 mt-4 cursor-pointer  position-relative">
      <div class="card border-0 h-100" >
  <img src=${products[i].image} class="card-img-top productImg" alt="product img">
  <div class="card-body">
    <h5 class="mt-3">${products[i].title}</h5>
    <p class=" orange fw-bold fs-5">LE ${products[i].price}</p>
    <div class="rate">
    ${products[i].rating.rate} <i class="fa-solid fa-star "></i>
    </div>
    <button  class="mb-3 btn btn-submit w-100 ">Add to cart</button>
  </div>
</div>
</div>

        
    `
        product.innerHTML = content
    }
}

getProducts()
