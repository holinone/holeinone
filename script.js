document.addEventListener('DOMContentLoaded', function() {
    // قائمة التنقل المتجاوبة
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // إضافة خدمات إضافية في نموذج الحجز
    const addServicesButton = document.getElementById('add-services');
    const additionalServices = document.getElementById('additional-services');

    if (addServicesButton && additionalServices) {
        addServicesButton.addEventListener('click', function() {
            additionalServices.style.display = additionalServices.style.display === 'none' ? 'block' : 'none';
        });
    }

    // حساب السعر الإجمالي
    const packagesSelect = document.getElementById('packages');
    const servicesSelect = document.getElementById('services');
    const coursesSelect = document.getElementById('courses');
    const totalPriceDiv = document.getElementById('total-price');

    if (packagesSelect && servicesSelect && coursesSelect && totalPriceDiv) {
        function calculateTotalPrice() {
            let totalPrice = 0;

            const selectedPackage = packagesSelect.value;
            const selectedService = servicesSelect.value;
            const selectedCourse = coursesSelect.value;

            if (selectedPackage === '5-rounds') {
                totalPrice += 1000;
            } else if (selectedPackage === 'triple-tee') {
                totalPrice += 500;
            } else if (selectedPackage === 'spa-break') {
                totalPrice += 200;
            }

            if (selectedService === 'golf-lessons') {
                totalPrice += 50;
            } else if (selectedService === 'digital-training') {
                totalPrice += 30;
            } else if (selectedService === 'cart-rental') {
                totalPrice += 20;
            } else if (selectedService === 'club-rental') {
                totalPrice += 15;
            }

            if (selectedCourse === 'sea-view') {
                totalPrice += 150;
            } else if (selectedCourse === 'other-courses') {
                totalPrice += 100;
            }

            totalPriceDiv.textContent = `السعر الإجمالي: ${totalPrice} يورو`;
        }

        packagesSelect.addEventListener('change', calculateTotalPrice);
        servicesSelect.addEventListener('change', calculateTotalPrice);
        coursesSelect.addEventListener('change', calculateTotalPrice);

        calculateTotalPrice(); // حساب السعر عند تحميل الصفحة
    }

    // العدسة المكبرة
    const magnifierIcon = document.getElementById('magnifier-icon');

    if (magnifierIcon) {
        magnifierIcon.addEventListener('click', function() {
            document.body.style.zoom = document.body.style.zoom ? '' : '150%';
        });
    }

    // إرسال نموذج الاتصال
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // يمكنك هنا إضافة كود لإرسال البيانات إلى الخادم
            alert('تم إرسال رسالتك بنجاح!');
        });
    }

    // إرسال نموذج الحجز
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;

            // يمكنك هنا إضافة كود لإرسال البيانات إلى الخادم
            alert('تم حجز موعدك بنجاح!');
        });
    }
});
