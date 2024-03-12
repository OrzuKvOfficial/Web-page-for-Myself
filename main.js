
    $(document).ready(function () {
        $('#welcomeText').css('opacity', '1');
        $('#welcomeText').css('transform', 'translateY(0)');
    });

    function animateCards() {
        $('.card').each(function (index) {
            $(this).css('transition-delay', index * 200 + 'ms');
            $(this).addClass('show');
        });
    }

    animateCards();

    $(window).scroll(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth <= 576) {
            animateCards();
        }
    });


    var data = [
        {
            ID: 1010,
            Isim: "Orzubek",
            Familya: "Kamariddinoov",
            Yosh: 18,
            "Soch rangi": "Qora",
            Boyi: 190,
            Rasm: "3742348736.jpg" // Sizning shaxsiy rasmingizni nomi
        },
        {
            ID: 1020,
            Isim: "John",
            Familya: "Doe",
            Yosh: 30,
            "Soch rangi": "Qizil",
            Boyi: 180,
            Rasm: "3742348736.jpg" // Sizning rasmingizning URL manzili
        },
        // Qolgan obyektlar...
        // 20 ta obyekt
    ];

    function searchByID() {
        clearNavItems(); // Yangi qidiruv amal qilgandan so'ng nav-itemlarni o'chiramiz

        var searchID = parseInt(document.getElementById("searchInput").value); // ID ni olish
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = ""; // Natijani qayta yozishdan oldin divni bo'shatish

        // Obyektlarni qidirish
        var found = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i].ID === searchID) {
                found = true;
                var personHTML = "<div class='card'>";
                personHTML += "<div class='card-body'>";
                personHTML += "<h5 class='card-title'>" + data[i].Isim + " " + data[i].Familya + "</h5>";
                personHTML += "<p class='card-text'>Yosh: " + data[i].Yosh + "</p>";
                personHTML += "<p class='card-text'>Soch rangi: " + data[i]["Soch rangi"] + "</p>";
                personHTML += "<p class='card-text'>Boyi: " + data[i].Boyi + "</p>";
                personHTML += "<img src='" + data[i].Rasm + "' class='card-img-top' alt='" + data[i].Isim + "'>";
                personHTML += "</div>";
                personHTML += "</div>";
                resultDiv.innerHTML += personHTML;
                break;
            }
        }

        if (!found) {
            resultDiv.innerHTML = "<div class='alert alert-danger' role='alert'>Bunday ID topilmadi</div>";
        }
    }

    function clearNavItems() {
        var navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(function (navItem) {
            navItem.style.display = 'none';
        });
    }


    // 1. Kötü Niyetli Kodları Engelleyin
// Kullanıcı girişleri veya dış kaynaklardan gelen verileri güvenli bir şekilde işleyin.
function cleanInput(input) {
    // Örnek bir temizleme işlemi - bu işlemi gerektiğine göre ayarlayabilirsiniz.
    return input.replace(/[<>&'"]/g, '');
}

// 2. XSS (Cross-Site Scripting) Saldırılarını Önleyin
// Kullanıcı girdilerini güvenli bir şekilde çıktıya dönüştürün.
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// 3. Clickjacking Saldırılarını Önleyin
// Sayfanızın görsel alanını gizlemek için X-Frame-Options kullanın.
// Bu, başka sitelerin içeriklerini iframe içinde gömülü olarak yüklemeyi önler.
// Örneğin:
// response.setHeader('X-Frame-Options', 'DENY'); 

// 4. Tarayıcıda Güvenli Oturum Yönetimi
// Güvenli oturum yönetimi için HTTPS kullanın.
// Kullanıcı oturumlarını belirlemek için JWT (JSON Web Token) gibi güvenli yöntemler kullanın.

// 5. Güvenlik Açıklarını İzleyin
// Tarayıcıların güvenlik açıklarını hızlıca kapatmak için düzenli olarak güncelleyin.

// 6. Güvenlik Testlerini Yapın
// Web uygulamanızı düzenli olarak güvenlik açıkları için test edin.

// 7. Güncel Yazılımlar ve Kütüphaneler
// Kullandığınız kütüphaneleri ve yazılımları düzenli olarak güncelleyin.

// 8. Gereksiz Bilgi Paylaşımını Önleyin
// Hata mesajlarında gereksiz bilgileri paylaşmayın. Sadece gerekli bilgileri paylaşın.

// Örnek kullanım:
let userInput = "<script>alert('XSS saldırısı!');</script>";
let cleanedInput = cleanInput(userInput);
let escapedHtml = escapeHtml(cleanedInput);
console.log(escapedHtml); // <script>alert('XSS saldırısı!');</script> --> Güvenli hale getirilmiş çıktı

// Ma'lumotni kriptografiya qilish uchun kriptografiya kutubxonasini ishlatish
const CryptoJS = require('crypto-js');

// Ma'lumotni kriptografiya qilish funksiyasi
function encryptData(data, key) {
    return CryptoJS.AES.encrypt(data, key).toString();
}

// Kriptografiya qilingan ma'lumotni qaytarish funksiyasi
function decryptData(encryptedData, key) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Ma'lumot kriptografiya qilinadi
const originalData = "Maxfiy ma'lumot";
const secretKey = "sirli_kalit";
const encryptedData = encryptData(originalData, secretKey);
console.log("Kriptografiya qilingan ma'lumot:", encryptedData);

// Kriptografiya qilingan ma'lumotni qaytarish
const decryptedData = decryptData(encryptedData, secretKey);
console.log("Qaytarilgan ma'lumot:", decryptedData);

// Xavfsizlik uchun harakat qilish
const imageElement = document.createElement('img');
imageElement.src = 'https://example.com/image.jpg';
imageElement.addEventListener('error', () => {
    console.error('Rasm yuklanmadi');
});
document.body.appendChild(imageElement);

// Hisoblash mashinasini yaratish
var calculator = {
    // Qo'shilish funktsiyasi
    add: function(x, y) {
        return x + y;
    },
    // Ayirish funktsiyasi
    subtract: function(x, y) {
        return x - y;
    },
    // Ko'paytirish funktsiyasi
    multiply: function(x, y) {
        return x * y;
    },
    // Bo'lish funktsiyasi
    divide: function(x, y) {
        if (y === 0) {
            return "Nolga bo'lish mumkin emas";
        }
        return x / y;
    }
};

// Test qilish
console.log("Qo'shish: " + calculator.add(5, 3));       // Natija: 8
console.log("Ayirish: " + calculator.subtract(10, 4));  // Natija: 6
console.log("Ko'paytirish: " + calculator.multiply(2, 6)); // Natija: 12
console.log("Bo'lish: " + calculator.divide(8, 2));     // Natija: 4
console.log("Bo'lish: " + calculator.divide(10, 0));    // Natija: "Nolga bo'lish mumkin emas"
