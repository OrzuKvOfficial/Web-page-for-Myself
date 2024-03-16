
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