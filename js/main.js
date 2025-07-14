;// icons of nav bar

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
if (closebtn) closebtn.addEventListener('click', function (e) {
    e.preventDefault()
    loginModal.classList.add('hide')
})

//  open search
if (seachIcon) seachIcon.addEventListener('click', function (e) {
    e.preventDefault()
    searchForm.classList.remove('hide')
})

// close search
if (closeSearch) closeSearch.addEventListener('click', function (e) {
    e.preventDefault()
    searchForm.classList.add('hide')
})

//  open bar menu
if (navbarIcon) navbarIcon.addEventListener('click', function (e) {
    e.preventDefault()
    barMenu.classList.remove('hide')
})

// close bar menu
if (closeBar) closeBar.addEventListener('click', function (e) {
    e.preventDefault()
    barMenu.classList.add('hide')
})

// احذف كود عداد العربة من الهيدر بالكامل
// احتفظ فقط بكود السايد بار (renderCartSidebar)
function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem('cartData') || '[]');
  let badge = document.getElementById('cartBadge');
  if (!badge) return;
  if (cart.length > 0) {
    badge.textContent = cart.length;
    badge.style.display = 'inline-block';
  } else {
    badge.textContent = '';
    badge.style.display = 'none';
  }
}
function renderCartSidebar(showProducts = false) {
  let cart = JSON.parse(localStorage.getItem('cartData') || '[]');
  let countDiv = document.getElementById('cartCountAndTotal');
  let listDiv = document.getElementById('cartProductsList');
  let summaryDiv = document.getElementById('cartSummary');
  if (!listDiv || !summaryDiv || !countDiv) return;
  if (cart.length === 0) {
    countDiv.innerHTML = '';
    listDiv.innerHTML = '<div class="text-center text-secondary my-4">Your cart is empty</div>';
    summaryDiv.innerHTML = '';
    return;
  }
  let total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  countDiv.innerHTML = `<div class="fw-bold mb-2">${cart.length} Item${cart.length > 1 ? 's' : ''}</div><div class="mb-2">Total: <span class="fw-bold">$${total.toFixed(2)}</span></div>`;
  if (showProducts) {
    let html = '<ul class="list-unstyled">';
    cart.forEach((item, idx) => {
      html += `<li class="d-flex align-items-center mb-2"><img src="${item.img}" style="width:40px;height:40px;object-fit:cover;border-radius:6px;margin-right:10px;"> <span style="flex:1">${item.title}</span> <span class="fw-bold">$${item.price}</span> <button class="btn btn-sm btn-outline-danger ms-2 remove-cart-item" data-idx="${idx}"><i class="fa fa-trash"></i></button></li>`;
    });
    html += '</ul>';
    listDiv.innerHTML = html;
    summaryDiv.innerHTML = '';
    // زر حذف منتج واحد
    listDiv.querySelectorAll('.remove-cart-item').forEach(btn => {
      btn.onclick = function() {
        let idx = parseInt(this.getAttribute('data-idx'));
        cart.splice(idx, 1);
        localStorage.setItem('cartData', JSON.stringify(cart));
        renderCartSidebar(true);
      }
    });
  } else {
    listDiv.innerHTML = '';
    summaryDiv.innerHTML = '';
  }
  updateCartBadge();
}
// زر حذف كل المنتجات من النافذة الجانبية
let clearBtnSidebar = document.getElementById('clearCartBtnSidebar');
if(clearBtnSidebar){
  clearBtnSidebar.onclick = function(){
    localStorage.setItem('cartData', '[]');
    renderCartSidebar();
    updateCartBadge();
  }
}
// زر حذف كل المنتجات من زر النافبار في صفحة المنتجات
let clearBtn = document.getElementById('clearCartBtn');
if(clearBtn){
  clearBtn.onclick = function(){
    localStorage.setItem('cartData', '[]');
    renderCartSidebar();
    updateCartBadge();
  }
}
// عند فتح العربة (إزالة hide من nav-cart) يتم تحديث العرض بدون المنتجات
if(cartIcon && navCart){
  cartIcon.addEventListener('click', function(){
    renderCartSidebar(false);
  });
}
// زر CONTINUE SHOPPING يفتح صفحة المنتجات المشتراة
let continueBtn = document.querySelector('.cart-btn.w-100');
if(continueBtn){
  continueBtn.onclick = function(e){
    e.preventDefault();
    window.location.href = 'purchased.html';
  }
}
// عند إضافة منتج للعربة من صفحة المنتجات
let product = document.querySelector('.product');
if (product) {
  // عناصر الفلترة
  const categoryFilter = document.getElementById('categoryFilter');
  const minPrice = document.getElementById('minPrice');
  const maxPrice = document.getElementById('maxPrice');
  const filterBtn = document.getElementById('filterBtn');

  let allProducts = [];

  // --- كود تفعيل الفلتر من رابط الصفحة ---
  function applyCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat && categoryFilter) {
      categoryFilter.value = cat === 'all' ? '' : cat;
      filterProducts();
    }
  }

  function renderProducts(products) {
      let content = '';
      if (!products.length) {
          content = '<div class="alert alert-info text-center">No products match your filters.</div>';
      }
      for (let i = 0; i < products.length; i++) {
          // Star rating
          let stars = '';
          let rate = Math.round(products[i].rating.rate);
          for (let s = 1; s <= 5; s++) {
              stars += `<i class="fa-star fa${s <= rate ? 's text-warning' : 'r text-secondary'}"></i>`;
          }
          content += `
          <div class="col-md-3 col-sm-4 mt-4 cursor-pointer position-relative">
            <div class="card border-0 h-100 shadow-sm rounded-4">
              <img src="${products[i].image}" class="card-img-top productImg" alt="product img" loading="lazy" style="height:250px;object-fit:contain;background:#fafafa">
              <div class="card-body">
                <h6 class="mt-3 text-truncate" title="${products[i].title}">${products[i].title}</h6>
                <p class="orange fw-bold fs-5">$${products[i].price}</p>
                <div class="rate mb-2">${stars} <span class="ms-2 small">(${products[i].rating.count})</span></div>
                <button class="mb-3 btn btn-submit w-100 add-to-cart">Add to cart</button>
              </div>
            </div>
          </div>
          `;
      }
      product.innerHTML = content;
  }

  async function getProducts() {
      try {
          let response = await fetch('https://fakestoreapi.com/products');
          let products = await response.json();
          allProducts = products;
          renderProducts(products);
          applyCategoryFromURL(); // <-- تفعيل الفلتر بعد جلب المنتجات
      } catch (e) {
          product.innerHTML = '<div class="alert alert-danger text-center">Error loading products. Please try again later.</div>';
      }
  }

  function filterProducts() {
      let filtered = allProducts.filter(p => {
          let catOk = !categoryFilter.value || p.category === categoryFilter.value;
          let minOk = !minPrice.value || p.price >= parseFloat(minPrice.value);
          let maxOk = !maxPrice.value || p.price <= parseFloat(maxPrice.value);
          return catOk && minOk && maxOk;
      });
      renderProducts(filtered);
  }

  filterBtn && filterBtn.addEventListener('click', filterProducts);
  categoryFilter && categoryFilter.addEventListener('change', filterProducts);
  [minPrice, maxPrice].forEach(inp => inp && inp.addEventListener('input', function(e){
      if(e.key === 'Enter') filterProducts();
  }));

  getProducts();

  // إضافة للعربة
  document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('add-to-cart')) {
      let card = e.target.closest('.card');
      let img = card.querySelector('img').src;
      let title = card.querySelector('h6').title || card.querySelector('h6').textContent;
      let price = parseFloat(card.querySelector('.fw-bold').textContent.replace(/[^\d.]/g, ''));
      let productObj = {img, title, price};
      let cart = JSON.parse(localStorage.getItem('cartData') || '[]');
      cart.push(productObj);
      localStorage.setItem('cartData', JSON.stringify(cart));
      renderCartSidebar();
      updateCartBadge();
      showCenterMessage('Product added to cart!');
    }
  });
}

// حدث العداد عند كل تغيير للعربة
updateCartBadge();

function showCenterMessage(msg) {
  let msgDiv = document.getElementById('centerMsgDiv');
  if (!msgDiv) {
    msgDiv = document.createElement('div');
    msgDiv.id = 'centerMsgDiv';
    msgDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#ffd600;color:#000;padding:20px 40px;border-radius:12px;z-index:9999;font-size:20px;font-weight:bold;box-shadow:0 2px 16px #0003;text-align:center;';
    document.body.appendChild(msgDiv);
  }
  msgDiv.textContent = msg;
  msgDiv.style.display = 'block';
  setTimeout(()=>{msgDiv.style.display='none';}, 2000);
}
