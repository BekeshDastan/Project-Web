$(document).ready(function() {
  renderCarGrid();
});

function renderCarGrid() {
    const carGrid = $('#carGrid');
    carGrid.empty();

    cars.forEach((car, index) => {
        const card = $(`
                    <div class="col-lg-4 col-md-6">
                        <div class="car-card" data-index="${index}">
                            <div class="car-image">
                            <img src=${car.emoji}></img>
                            </div>
                            <div class="car-info">
                                <div class="car-name">${car.name}</div>
                                <div class="car-price">${car.price}</div>
                                <div class="car-brief">${car.brief}</div>
                            </div>
                        </div>
                    </div>
                `);
        carGrid.append(card);
    });
}

$(document).on('click', '.car-card', function () {
    const index = $(this).data('index');
    openModal(index);
});

function openModal(index) {
    const car = cars[index];
    $('#modalCarName').text(car.name);
    $('#modalCarPrice').text(car.price);

    const specsGrid = $('#specsGrid');
    specsGrid.empty();

    for (const [label, value] of Object.entries(car.specs)) {
        const specItem = $(`
                     <div class="col-md-6">
                        <div class="spec-item">
                            <div ="spec-label">${label}</div>
                            <div class="spec-value">${value}</div>
                        </div>
                    </div>
                `);
        specsGrid.append(specItem);
    }

    const modal = new bootstrap.Modal(document.getElementById('carModal'));
    modal.show();
}

function showPage(pageName) {
    $('.page').hide();
    $(`#${pageName}Page`).fadeIn(300);

    $('.nav-link').removeClass('active');
    $('.nav-link').each(function () {
        if ($(this).attr('onclick').includes(pageName)) {
            $(this).addClass('active');
        }
    });

    $('html, body').animate({ scrollTop: 0 }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alertBox.style.display = "block";
        alertBox.style.color = "green";
        alertBox.textContent = "Thank you! Your message has been sent successfully.";
        
        form.reset();
        setTimeout(() => {
          alertBox.style.display = "none";
        }, 5000);
      } else {

        alertBox.style.display = "block";
        alertBox.style.color = "red";
        alertBox.textContent = " Something went wrong. Please try again.";
      }

    } catch (error) {
      alertBox.style.display = "block";
      alertBox.style.color = "red";
      alertBox.textContent = " Network error. Please check your connection.";
    }
  });
});

(function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();     
      event.stopPropagation();
    }
    form.classList.add('was-validated'); 
  }, false);
})();