

// icons of nav bar

let user = document.querySelector('.user');
let cartIcon = document.querySelector('.shop-cart');
let seachIcon = document.querySelector('.s-glass');
let navbarIcon = document.querySelector('.bar-icon');


// menus for baar icons 
let navCart = document.querySelector('.nav-cart');
let loginModal = document.querySelector('.login-modal');
let searchForm = document.querySelector('.search-form');
let barMenu = document.querySelector('.bar-menu');


// closing buttons
let closeSearch = document.querySelector('.close-search');
let xIcon = document.querySelectorAll('.x-icon');
let closebtn = document.querySelector('.close-icon');
let closeBar = document.querySelector('.close-bar');





// open cart 
cartIcon.addEventListener('click', function(e){
    e.preventDefault(); 
   
    navCart.classList.remove('hide');
    
})

// close cart
xIcon.forEach(icon => {icon.addEventListener('click', function(e){
    e.preventDefault(); 
    navCart.classList.add('hide')});
    
});

// open log in modal
user.addEventListener('click', function(e){
    e.preventDefault(); 
   
    loginModal.classList.remove('hide');
    
})
// close login modal
closebtn.addEventListener('click', function(e){
    e.preventDefault(); 
    loginModal.classList.add('hide')});
    
//  open search
seachIcon.addEventListener('click', function(e){
    e.preventDefault();
    searchForm.classList.remove('hide')
})

// close search
closeSearch.addEventListener('click', function(e){
    e.preventDefault(); 
    searchForm.classList.add('hide')});

//  open bar menu
navbarIcon.addEventListener('click', function(e){
    e.preventDefault();
    barMenu.classList.remove('hide')
})

// close bar menu
closeBar.addEventListener('click', function(e){
    e.preventDefault(); 
    barMenu.classList.add('hide')});



    
