const cars = [
            {
                name: "Bugatti Chiron Super Sport",
                price: "$3,900,000",
                emoji: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2024/01/resize_2020-bugatti-chiron-super-sport-300-1-1.jpg",
                brief: "The pinnacle of automotive engineering",
                specs: {
                    "Engine": "8.0L W16 Quad-Turbo",
                    "Horsepower": "1,577 HP",
                    "0-60 mph": "2.3 seconds",
                    "Top Speed": "273 mph",
                    "Torque": "1,180 lb-ft",
                    "Transmission": "7-speed DSG"
                }
            },
            {
                name: "Koenigsegg Jesko Absolute",
                price: "$3,400,000",
                emoji: "https://i.ytimg.com/vi/PYWbyELOJQQ/maxresdefault.jpg",
                brief: "Swedish hypercar perfection",
                specs: {
                    "Engine": "5.0L Twin-Turbo V8",
                    "Horsepower": "1,600 HP",
                    "0-60 mph": "2.5 seconds",
                    "Top Speed": "330 mph (theoretical)",
                    "Torque": "1,106 lb-ft",
                    "Transmission": "9-speed Light Speed"
                }
            },
            {
                name: "Pagani Huayra R",
                price: "$3,700,000",
                emoji: "https://avatars.mds.yandex.net/i?id=f04a8562916d4260861d48fbf94c1431_l-10928869-images-thumbs&n=13",
                brief: "Art on wheels with a screaming V12",
                specs: {
                    "Engine": "6.0L Naturally Aspirated V12",
                    "Horsepower": "850 HP",
                    "0-60 mph": "2.8 seconds",
                    "Top Speed": "217 mph",
                    "Torque": "553 lb-ft",
                    "Transmission": "6-speed Sequential"
                }
            },
            {
                name: "McLaren Speedtail",
                price: "$2,250,000",
                emoji: "https://avatars.dzeninfra.ru/get-zen_doc/4797662/pub_6390f1cbee1bc829b574b348_6390f1d4ee1bc829b574b656/scale_1200",
                brief: "Hyper-GT with revolutionary design",
                specs: {
                    "Engine": "4.0L Twin-Turbo V8 Hybrid",
                    "Horsepower": "1,055 HP",
                    "0-60 mph": "2.5 seconds",
                    "Top Speed": "250 mph",
                    "Torque": "848 lb-ft",
                    "Transmission": "7-speed SSG"
                }
            },
            {
                name: "Ferrari SF90 Stradale",
                price: "$625,000",
                emoji: "https://i.ytimg.com/vi/QEOkbOkhfCY/maxresdefault.jpg",
                brief: "Ferrari's first plug-in hybrid supercar",
                specs: {
                    "Engine": "4.0L Twin-Turbo V8 + 3 Electric Motors",
                    "Horsepower": "986 HP",
                    "0-60 mph": "2.5 seconds",
                    "Top Speed": "211 mph",
                    "Torque": "590 lb-ft",
                    "Transmission": "8-speed Dual-Clutch"
                }
            },
            {
                name: "Lamborghini Revuelto",
                price: "$608,000",
                emoji: "https://i.pinimg.com/originals/68/7f/c3/687fc3592cd3fd2db157f6b2a1ad2bd6.jpg",
                brief: "The first V12 hybrid Lamborghini",
                specs: {
                    "Engine": "6.5L V12 + 3 Electric Motors",
                    "Horsepower": "1,001 HP",
                    "0-60 mph": "2.5 seconds",
                    "Top Speed": "217 mph",
                    "Torque": "807 lb-ft",
                    "Transmission": "8-speed Dual-Clutch"
                }
            },
            {
                name: "Porsche 918 Spyder",
                price: "$1,700,000",
                emoji: "https://i.pinimg.com/originals/c6/dd/79/c6dd793381baee4ea14ec63272b8cc81.jpg",
                brief: "German engineering excellence",
                specs: {
                    "Engine": "4.6L V8 + 2 Electric Motors",
                    "Horsepower": "887 HP",
                    "0-60 mph": "2.2 seconds",
                    "Top Speed": "214 mph",
                    "Torque": "944 lb-ft",
                    "Transmission": "7-speed PDK"
                }
            },
            {
                name: "Aston Martin Valkyrie",
                price: "$3,200,000",
                emoji: "https://i.ytimg.com/vi/enyEa-1dktQ/maxresdefault.jpg",
                brief: "F1 technology for the road",
                specs: {
                    "Engine": "6.5L Cosworth V12 Hybrid",
                    "Horsepower": "1,160 HP",
                    "0-60 mph": "2.5 seconds",
                    "Top Speed": "250 mph",
                    "Torque": "664 lb-ft",
                    "Transmission": "7-speed Sequential"
                }
            },
            {
                name: "Rimac Nevera",
                price: "$2,400,000",
                emoji: "https://i.ytimg.com/vi/KpHM0a00ngQ/maxresdefault.jpg",
                brief: "Pure electric hypercar beast",
                specs: {
                    "Engine": "4 Electric Motors",
                    "Horsepower": "1,914 HP",
                    "0-60 mph": "1.85 seconds",
                    "Top Speed": "258 mph",
                    "Torque": "1,740 lb-ft",
                    "Transmission": "Single-Speed"
                }
            }
        ];

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

        $(document).on('click', '.car-card', function() {
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
                            <div class="spec-label">${label}</div>
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
            $('.nav-link').each(function() {
                if ($(this).attr('onclick').includes(pageName)) {
                    $(this).addClass('active');
                }
            });
            
            $('.navbar-collapse').collapse('hide');
            
            $('html, body').animate({ scrollTop: 0 }, 300);
        }

        $('#contactForm').on('submit', function(e) {
            e.preventDefault();
            
            const form = this;
            
            if (!form.checkValidity()) {
                e.stopPropagation();
                $(form).addClass('was-validated');
                return;
            }
            
            const firstName = $('#firstName').val();
            const lastName = $('#lastName').val();
            const email = $('#email').val();
            const phone = $('#phone').val();
            const subject = $('#subject').val();
            const message = $('#message').val();
            const newsletter = $('#newsletter').is(':checked');
            
            $('#formAlert').html(`
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <i class="fas fa-check-circle me-2"></i>
                    <strong>Success!</strong> Thank you ${firstName}, your message has been sent successfully. We'll get back to you soon!
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `).fadeIn();
            
            form.reset();
            $(form).removeClass('was-validated');
            
            $('html, body').animate({
                scrollTop: $('#formAlert').offset().top - 100
            }, 500);
        });

        $(document).ready(function() {
            renderCarGrid();
            
            $('input[type="email"]').on('blur', function() {
                const email = $(this).val();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (email && !emailRegex.test(email)) {
                    $(this).addClass('is-invalid');
                } else if (email) {
                    $(this).removeClass('is-invalid');
                }
            });
        });