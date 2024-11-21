

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




    // loging accounts
    
    // الحصول على عناصر النموذج
    const loginForm = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login-button');
    const userIcon = document.querySelector('.user a .fa-user');

    // دالة التحقق من صحة البيانات المدخلة
    function validateForm(email, password) {
        if (!email || !password) {
            alert('Please fill in all fields');
            return false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // التحقق من كلمة السر 
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return false;
        }

        return true;
    }

    // التعامل مع حدث التقديم
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // منع إرسال النموذج بشكل افتراضي

        const email = emailInput.value;
        const password = passwordInput.value;

        if (validateForm(email, password)) {
            const formData = {
                email: email,
                password: password
            };

            console.log('User Data:', formData);

            setTimeout(() => {
                alert('Successfully logged in!'); // رسالة نجاح
                document.querySelector('.login-modal').classList.add('hide');
                
                if (userIcon) {
                    userIcon.style.color = "green"; //تغيير اللون للأخضر
                }
            }, 1000); 
        }
    });
    
