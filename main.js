
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





    
    let display = document.getElementById('display');
    let currentInput = '0';
    let operator = '';
    let previousInput = '';
    
    function addNumber(num) {
        if (currentInput === '0') {
            currentInput = num;
        } else {
            currentInput += num;
        }
        display.value = currentInput;
    }
    
    function addOperator(op) {
        if (operator !== '') {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '0';
    }
    
    function addDecimal() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            display.value = currentInput;
        }
    }
    
    function calculate() {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
            default:
                result = currentInput;
        }
        display.value = result;
        currentInput = result;
        operator = '';
        previousInput = '';
    }
    
    function clearDisplay() {
        display.value = '0';
        currentInput = '0';
        operator = '';
        previousInput = '';
    }








    
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







    // O'yin maydoni yaratish
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;
document.body.appendChild(canvas);

// Toplar uchun obyektlar
const ball1 = {
  x: 100,
  y: canvas.height / 2,
  radius: 20,
  speed: 5,
  dx: 5,
  dy: -4,
  color: 'red'
};

const ball2 = {
  x: canvas.width - 100,
  y: canvas.height / 2,
  radius: 20,
  speed: 5,
  dx: -5,
  dy: 4,
  color: 'blue'
};

// Toplarni yaratish
function drawBall(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

// Toplarni yangilash
function update() {
  // Toplarni harkatini hisoblash
  ball1.x += ball1.dx;
  ball1.y += ball1.dy;
  ball2.x += ball2.dx;
  ball2.y += ball2.dy;

  // Maydon chegarasi tekshirish
  if (ball1.x - ball1.radius < 0 || ball1.x + ball1.radius > canvas.width) {
    ball1.dx *= -1;
  }
  if (ball1.y - ball1.radius < 0 || ball1.y + ball1.radius > canvas.height) {
    ball1.dy *= -1;
  }
  if (ball2.x - ball2.radius < 0 || ball2.x + ball2.radius > canvas.width) {
    ball2.dx *= -1;
  }
  if (ball2.y - ball2.radius < 0 || ball2.y + ball2.radius > canvas.height) {
    ball2.dy *= -1;
  }
}

// O'yinni qayta yopish va yangilash
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(ball1);
  drawBall(ball2);
  update();
  requestAnimationFrame(animate);
}

// O'yinni boshlash
animate();

