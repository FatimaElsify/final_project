let verticalNavLayer = document.querySelector('.layer-nav');
let aside = document.querySelector('.aside');
let navMen = document.querySelector('.nav-men');


// تعريف المتغيرات
let sidebar = document.querySelector('.sidebar');
let overlay = document.querySelector('.overlay');
let overlay2 = document.querySelector('.overlay2');
let overlay3 = document.querySelector('.overlay3');
let overlayLog = document.querySelector('.overlay-log');
const overlays = [overlay, overlay2, overlay3, overlayLog, sidebar];
let sidebar2 = document.querySelector('.sidebar2');
let navCart = document.querySelector('.nav-cart');
let navVer = document.querySelector('.nav-ver');
let langMenu = document.querySelector('.lang-menu');
let barIcon1 = document.querySelector('.bar-icon1');
let barIcon2 = document.querySelector('.bar-icon2');
let cartIcon2 = document.querySelector('.shop-cart2');
let xIcon = document.querySelector('.x-icon');
let xIcon2 = document.querySelector('.x-icon2');
let xIcon3 = document.querySelector('.x-icon3');
let xSpan = document.querySelectorAll('.x-span');
const closeButton = document.querySelector('.close-button');
const userIcon = document.querySelector('.user-icon');  


document.addEventListener("DOMContentLoaded", () => {
    // حدد العناصر التي تريد إضافة كلاس "hide" لها
    const overlays = [overlay, overlay2, overlay3, overlayLog, sidebar];
  
    // أضف الكلاس "hide" لكل عنصر
    overlays.forEach((overlayEl) => {
      overlayEl.classList.add("hide");
    });
  });
  
// فتح الـ Sidebar
barIcon1.addEventListener('click', function(e) {
    e.preventDefault(); 
    overlay.classList.remove('hide');
    sidebar.style.right = '15px';
    
});

// إغلاق الـ Sidebar
xIcon.addEventListener('click', function(e){
    e.preventDefault(); 
    sidebar.style.right = '-350px';
    overlay.classList.add('hide');;
});

// فتح الـ Cart
cartIcon2.addEventListener('click', function(e) {
    e.preventDefault(); 
    navCart.style.right = '15px';
    overlay3.classList.remove('hide');;
});

// إغلاق الـ Cart
xIcon3.addEventListener('click', function(e){
    e.preventDefault(); 
    navCart.style.right = '-30px';
    overlay3.classList.add('hide');
});

// فتح الـ Sidebar2
if (sidebar){
    barIcon2.addEventListener('click', function (e) {
    e.preventDefault();
    sidebar2.style.left = '0';
    overlay2.classList.remove('hide');
});
}


// إغلاق الـ Sidebar2
xIcon2.addEventListener('click', function () {
    sidebar2.style.left = '-350px';
    overlay2.classList.add('hide');
});

// إغلاق عندما النقر على الخلفية
// document.addEventListener("DOMContentLoaded", () => {
//     // حدد العناصر التي تريد إضافة كلاس "hide" لها
//     const overlays = [overlay, overlay2, overlay3, overlayLog];
  
//     // أضف الكلاس "hide" لكل عنصر
//     overlays.forEach((overlayEl) => {
//       overlayEl.classList.add("hide");
//     });
//   });

userIcon.forEach(icon => {
    
    overlayLog.classList.remove('hide');





})
// إغلاق الـ verticalNavLayer عند النقر خارجها
// document.addEventListener('click', function(event) {
//     if (!verticalNavLayer.contains(event.target) && !navVer.contains(event.target)) {
//         verticalNavLayer.classList.add('hide');
//     }
// });



////////////////////*log in*////////////

userIcon.addEventListener('click', function(e) {
    e.preventDefault();  
    overlayLog.classList.remove('hide'); 
});

closeButton.addEventListener('click', function() {
    overlayLog.classList.add('hide');  // إضافة الكلاس hide لإخفاء النافذة
});


  
  // Example submit handler
  document.querySelector(".login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Logged in!");
  });




// //   search part =================

// //searchIcon
// document.getElementById("searchIcon").addEventListener("click", function () {
//   document.getElementById("searchButton").addEventListener("click", function () {
//     const query = document.getElementById("searchInput").value.toLowerCase(); // الحصول على النص المكتوب
//     const images = document.querySelectorAll("#imageGallery img"); // اختيار كل الصور
//     const resultsContent = document.getElementById("resultsContent"); // الحاوية لعرض النتائج
//     const overlayResult = document.getElementById("overlay-result"); // النافذة
  
//     // تفريغ النتائج السابقة
//     resultsContent.innerHTML = "";
  
//     // البحث في الصور وإضافتها للنتائج
//     let found = false;
//     images.forEach((img) => {
//       const imageName = img.getAttribute("data-name").toLowerCase();
//       if (imageName.includes(query)) {
//         const imgClone = img.cloneNode(true); // نسخ الصورة
//         resultsContent.appendChild(imgClone); // إضافتها للنتائج
//         found = true;
//       }
//     });
  
//     // إذا لم يتم العثور على نتائج
//     if (!found) {
//       resultsContent.innerHTML = "<p class='text-center text-danger'>No results found!</p>";
//     }
  
//     // عرض النافذة
//     overlayResult.style.display = "flex";
//   });
  
//   // زر الإغلاق
//   document.getElementById("closeResults").addEventListener("click", function () {
//     document.getElementById("overlay-result").style.display = "none";
//   });
//   });
  
//   // زر البحث
  
  














































// ++++++++++++++++++



  
//   document.querySelector('.overlay').addEventListener('click', function() {
//     document.querySelector('.sidebar').style.right = '-350px';  // إخفاء القائمة
//     document.querySelector('.overlay').style.display = 'none';  // إخفاء الخلفية
//   });

//   xIcon.addEventListener('click', function(e){
//         e.preventDefault(); 
//         document.querySelector('.sidebar').style.right = '-350px';  // إخفاء القائمة
//     document.querySelector('.overlay').style.display = 'none';  // إخفاء الخلفية

//     });
// // =======================
// cartIcon.addEventListener('click', function(e) {
//     e.preventDefault(); 
//     document.querySelector('.nav-cart').style.right = '0';  // تحريك القائمة لتظهر
//     document.querySelector('.overlay3').style.display = 'block';  // إظهار الخلفية الشفافة
//   });
  
//   document.querySelector('.overlay3').addEventListener('click', function() {
//     document.querySelector('.nav-cart').style.right = '-350px';  // إخفاء القائمة
//     document.querySelector('.overlay3').style.display = 'none';  // إخفاء الخلفية
//   });

//   xIcon3.addEventListener('click', function(e){
//         e.preventDefault(); 
//         document.querySelector('.nav-cart').style.right = '-350px';  // إخفاء القائمة
//     document.querySelector('.overlay3').style.display = 'none';  // إخفاء الخلفية

//     });
//     // =================================
//  // عند الضغط على الأيقونة bar-icon2، فتح الـ sidebar والـ overlay
// document.querySelector('.bar-icon2').addEventListener('click', function (e) {
//     e.preventDefault();
    
//     // إضافة الـ class لتفعيل الحركة على الـ sidebar و الـ overlay
//     document.querySelector('.sidebar2').style.left = '0';
//     document.querySelector('.overlay').classList.add('show');  // إظهار الـ overlay
// });

// // عند الضغط على الـ overlay (الخلفية الشفافة)، إغلاق الـ sidebar
// document.querySelector('.overlay2').addEventListener('click', function () {
//     document.querySelector('.sidebar2').style.left = '-350px';  // إخفاء الـ sidebar
//     document.querySelector('.overlay2').classList.remove('show');  // إخفاء الـ overlay
// });

// // عند الضغط على x-icon2 داخل الـ sidebar، إغلاق الـ sidebar والـ overlay
// document.querySelector('.x-icon2').addEventListener('click', function () {
//     document.querySelector('.sidebar2').style.left = '-350px';  // إخفاء الـ sidebar
//     document.querySelector('.overlay2').classList.remove('show');  // إخفاء الـ overlay
// });




// open and close vertical
// xIcon.addEventListener('click', function(e){
//     e.preventDefault(); 
//     verticalNavLayer.classList.remove('show');
// });
// barIcon1.addEventListener('click', function(e) {
//     e.preventDefault(); 

//     // اظهار قائمة اللغات فقط
//     verticalNavLayer.classList.add('show');
//     langMenu.classList.add('show');
//     langMenu.classList.remove('hide');

//     // إخفاء العناصر الأخرى
    
//     navVer.classList.add('hide');
//     navMen.classList.add('hide');
//     navCart.classList.add('hide');
//     navVer.classList.remove('show');
//     navMen.classList.remove('show');
//     navCart.classList.remove('show');
// });
// barIcon2.addEventListener('click', function(e){
//     e.preventDefault(); 
//     verticalNavLayer.classList.add('show');
//     langMenu.classList.remove('show');
//     navVer.classList.add('show');
//     navVer.style.left = '0px';
// })
// cartIcon.addEventListener('click', function(e){
//     e.preventDefault(); 
//     verticalNavLayer.classList.add('show');
//     navCart.classList.add('show');
    
// })
// xSpan.forEach(icon => {icon.addEventListener('click', function(e){
//     e.preventDefault(); 
//     verticalNavLayer.classList.remove('show');
//     document.querySelector('.sidebar').style.right = '-350px';  // إخفاء القائمة
//     document.querySelector('.overlay').style.display = 'none';  // إخفاء الخلفية
// });
    
// });


// // Close layer-nav if clicked outside of nav-ver
// document.addEventListener('click', function(event){
//     if (
//     !navVer.contains(event.target) && 
//     !navMen.contains(event.target) && 
//     !langMenu.contains(event.target) && 
//     !navCart.contains(event.target) && 
//     verticalNavLayer.contains(event.target)) {
//         verticalNavLayer.classList.remove('show');
//     }
// });











