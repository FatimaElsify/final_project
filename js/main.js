let verticalNavLayer = document.querySelector('.layer-nav');
let xIcon = document.querySelector('.x-icon');
let barIcon1 = document.querySelector('.bar-icon1');
let barIcon2 = document.querySelector('.bar-icon2');
let xSpan = document.querySelectorAll('.x-span');
let cartIcon = document.querySelector('.shop-cart');

let navVer = document.querySelector('.nav-ver');
let aside = document.querySelector('.aside');
let navMen = document.querySelector('.nav-men');
let navCart = document.querySelector('.nav-cart');
let langMenu = document.querySelector('.lang-menu');



// open and close vertical
// xIcon.addEventListener('click', function(e){
//     e.preventDefault(); 
//     verticalNavLayer.classList.remove('show');
// });
barIcon1.addEventListener('click', function(e) {
    e.preventDefault(); 

    // اظهار قائمة اللغات فقط
    verticalNavLayer.classList.add('show');
    langMenu.classList.add('show');
    langMenu.classList.remove('hide');

    // إخفاء العناصر الأخرى
    
    navVer.classList.add('hide');
    navMen.classList.add('hide');
    navCart.classList.add('hide');
    navVer.classList.remove('show');
    navMen.classList.remove('show');
    navCart.classList.remove('show');
});
barIcon2.addEventListener('click', function(e){
    e.preventDefault(); 
    verticalNavLayer.classList.add('show');
    langMenu.classList.remove('show');
    navVer.classList.add('show');
    navVer.style.left = '0px';
})
cartIcon.addEventListener('click', function(e){
    e.preventDefault(); 
    verticalNavLayer.classList.add('show');
    navCart.classList.add('show');
    
})
xSpan.forEach(icon => {icon.addEventListener('click', function(e){
    e.preventDefault(); 
    verticalNavLayer.classList.remove('show')});
    
});


// Close layer-nav if clicked outside of nav-ver
document.addEventListener('click', function(event){
    if (
    !navVer.contains(event.target) && 
    !navMen.contains(event.target) && 
    !langMenu.contains(event.target) && 
    !navCart.contains(event.target) && 
    verticalNavLayer.contains(event.target)) {
        verticalNavLayer.classList.remove('show');
    }
});