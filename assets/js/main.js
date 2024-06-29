// nav


// document.addEventListener("DOMContentLoaded", ()=>{
//     const links = document.querySelectorAll('.nav-link');

//     links.forEach(link => {
//         link.addEventListener('click', function() {
            

//             // Tüm linklerden 'active' sınıfını kaldır
//             links.forEach(l => l.classList.remove('active'));

//             // Tıklanan bağlantıya 'active' sınıfını ekle
//             this.classList.add('active');
//         });
//     });
// });





// window.addEventListener('load', function() {
//     // Carousel'ı başlatmak için gerekli seçiciyi tanımlayalım
//     var carouselElement = document.querySelector('.row');

//     function toggleCarousel() {
//         if (window.innerWidth <= 768) { // Ekran genişliği 768 pikselden büyükse
//             if (!carouselElement.classList.contains('carousel')) {
//                 // Carousel yoksa ekleyelim
//                 carouselElement.classList.add('carousel');
//             }
//         } else {
//             if (carouselElement.classList.contains('carousel')) {
//                 // Carousel varsa kaldıralım
//                 carouselElement.classList.remove('carousel');
//                 console.log(error);
//             }
//         }
//     }

//     // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde carousel durumunu güncelleyelim
//     window.addEventListener('resize', toggleCarousel);
//     window.addEventListener('load', toggleCarousel);

//     // Carousel'ı başlatmak için gerekli seçiciyi tanımlayalım
//     var carousel = new bootstrap.Carousel(carouselElement, {
//         interval: 2000, // Carousel'ın otomatik geçiş süresi (isteğe bağlı)
//         wrap: true // Carousel'ın başa dönmesi (isteğe bağlı)
//     });
// });


document.getElementById("toogle-product-button").addEventListener("click", function() {
    window.location.href = "urunler.html"; // Yönlendirmek istediğiniz sayfa
  });
  

