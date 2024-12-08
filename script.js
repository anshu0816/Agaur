document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); 
    showSlide(currentSlide); 
});


document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));

            cart.push({ id: productId, name: productName, price: productPrice });
            alert(`Added ${productName} to cart!`);
            console.log(cart); 
        });
    });

    
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            cartSidebar.style.display = 'block'; 
        });
    });

    closeBtn.addEventListener('click', function() {
        cartSidebar.style.display = 'none'; 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.team-member').forEach(member => {
        member.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member-id');
            const details = document.getElementById(`member${memberId}-details`);
            
            
            document.querySelectorAll('#member-details > div').forEach(div => div.style.display = 'none');
            
            
            details.style.display = 'block';
        });
    });
});
