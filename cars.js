let cars = [
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
        emoji: "https://i.ytimg.com/vi/zccQRZMRHFc/maxresdefault.jpg",
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
        emoji: "https://i.ytimg.com/vi/-cw2Yz468A0/maxresdefault.jpg",
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
    },
    {
        name: "Lotus Evija",
        price: "$2,100,000",
        emoji: "https://avatars.mds.yandex.net/i?id=7e1e3eabeb45962a3de5a0c10a93b853035b77a4-4552383-images-thumbs&n=13",
        brief: "British all-electric hypercar",
        specs: {
            "Engine": "4 Electric Motors",
            "Horsepower": "1,972 HP",
            "0-60 mph": "2.0 seconds",
            "Top Speed": "200 mph",
            "Torque": "1,254 lb-ft",
            "Transmission": "Single-speed"
        }
    },
    {
        name: "Devil Sixteen",
        price: "$10,000,000",
        emoji: "https://avatars.mds.yandex.net/i?id=71f93a8f0a22684084cf4a96f7a7a588_l-4566264-images-thumbs&n=13",
        brief: "An outrageous pursuit of ultimate power",
        specs: {
            "Engine": "12.3L V16 Quad-Turbo",
            "Horsepower": "5,007 HP",
            "0-60 mph": "1.8 seconds (claimed)",
            "Top Speed": "347 mph (claimed)",
            "Torque": "3,757 lb-ft",
            "Transmission": "Custom 7-speed"
        }
    },
    {
        name: "Mercedes-AMG ONE",
        price: "$2,700,000",
        emoji: "https://i.ytimg.com/vi/6pHOxdc6CdU/maxresdefault.jpg",
        brief: "A Formula 1 car for the street",
        specs: {
            "Engine": "1.6L Turbo Hybrid V6",
            "Horsepower": "1,049 HP",
            "0-60 mph": "2.7 seconds",
            "Top Speed": "219 mph",
            "Torque": "664 lb-ft",
            "Transmission": "7-speed automated manual"
        }
    },
    {
    name: "McLaren P1",
    price: "$1,150,000",
    emoji: "https://avatars.mds.yandex.net/i?id=55b793da992fb0299516d8f33ef81647_l-5275490-images-thumbs&n=13",
    brief: "Hybrid hypercar that changed the game",
    specs: {
        "Engine": "3.8L Twin-Turbo V8 Hybrid",
        "Horsepower": "903 HP",
        "0-60 mph": "2.8 seconds",
        "Top Speed": "217 mph",
        "Torque": "664 lb-ft",
        "Transmission": "7-speed dual-clutch"
    }
},
{
    name: "McLaren 720S",
    price: "$299,000",
    emoji: "https://wallpapers.com/images/hd/mclaren-720s-background-ji90kguz01kswi77.jpg",
    brief: "Superlight speed and balance perfected",
    specs: {
        "Engine": "4.0L Twin-Turbo V8",
        "Horsepower": "710 HP",
        "0-60 mph": "2.9 seconds",
        "Top Speed": "212 mph",
        "Torque": "568 lb-ft",
        "Transmission": "7-speed dual-clutch"
    }
},
{
    name: "BMW M8 Competition",
    price: "$134,000",
    emoji: "https://www.digitaltrends.com/wp-content/uploads/2018/03/dt-geneva-bmw-m8-gran-coupe-2.jpg?p=1",
    brief: "Luxury and performance in perfect harmony",
    specs: {
        "Engine": "4.4L Twin-Turbo V8",
        "Horsepower": "617 HP",
        "0-60 mph": "3.0 seconds",
        "Top Speed": "190 mph",
        "Torque": "553 lb-ft",
        "Transmission": "8-speed automatic"
    }
},
{
    name: "BMW i8",
    price: "$148,000",
    emoji: "https://avatars.mds.yandex.net/i?id=8c292be604391ab375e2cf1a804f5528_l-5339293-images-thumbs&n=13",
    brief: "A futuristic hybrid sports car",
    specs: {
        "Engine": "1.5L Turbo I3 + Electric Motor",
        "Horsepower": "369 HP",
        "0-60 mph": "4.2 seconds",
        "Top Speed": "155 mph",
        "Torque": "420 lb-ft",
        "Transmission": "6-speed automatic"
    }
},
{
    name: "Audi R8 V10 Performance",
    price: "$208,000",
    emoji: "https://avatars.mds.yandex.net/i?id=3dcd4e410e4fc2fa4d9b391081f84acf_l-4496126-images-thumbs&n=13",
    brief: "Naturally aspirated perfection",
    specs: {
        "Engine": "5.2L V10",
        "Horsepower": "612 HP",
        "0-60 mph": "3.1 seconds",
        "Top Speed": "205 mph",
        "Torque": "428 lb-ft",
        "Transmission": "7-speed dual-clutch"
    }
},
{
    name: "Audi RS e-tron GT",
    price: "$142,000",
    emoji: "https://i.ytimg.com/vi/AP9AALBLiDY/maxresdefault.jpg",
    brief: "Electric performance with quattro precision",
    specs: {
        "Engine": "Dual Electric Motors",
        "Horsepower": "637 HP",
        "0-60 mph": "3.1 seconds",
        "Top Speed": "155 mph",
        "Torque": "612 lb-ft",
        "Transmission": "Single-speed"
    }
},
{
    name: "BMW M4 CSL",
    price: "$139,900",
    emoji: "https://cdn.motor1.com/images/mgl/NGGMgy/s1/2022-bmw-m4-csl.jpg",
    brief: "Track-focused evolution of the M legend",
    specs: {
        "Engine": "3.0L Twin-Turbo Inline-6",
        "Horsepower": "543 HP",
        "0-60 mph": "3.6 seconds",
        "Top Speed": "191 mph",
        "Torque": "479 lb-ft",
        "Transmission": "8-speed automatic"
    }
},
{
    name: "McLaren 765LT",
    price: "$385,000",
    emoji: "https://avatars.mds.yandex.net/i?id=23f1f10ebcdb4622a6a8b57dceaa3841_l-6416987-images-thumbs&n=13",
    brief: "Longtail heritage with extreme performance",
    specs: {
        "Engine": "4.0L Twin-Turbo V8",
        "Horsepower": "755 HP",
        "0-60 mph": "2.7 seconds",
        "Top Speed": "205 mph",
        "Torque": "590 lb-ft",
        "Transmission": "7-speed dual-clutch"
    }
},
{
    name: "Audi Quattro Sport (1984)",
    price: "$75,000 (classic)",
    emoji: "https://s.auto.drom.ru/i24292/com/770/769954.jpg",
    brief: "Rally legend that defined Audi performance",
    specs: {
        "Engine": "2.1L Turbo Inline-5",
        "Horsepower": "302 HP",
        "0-60 mph": "4.8 seconds",
        "Top Speed": "155 mph",
        "Torque": "258 lb-ft",
        "Transmission": "5-speed manual"
    }
},
{
    name: "BMW M1 (1978)",
    price: "$450,000 (classic)",
    emoji: "https://avatars.mds.yandex.net/i?id=764bbac1d22e5c9813f74d74dbe8bbcc_l-5553595-images-thumbs&n=13",
    brief: "BMW’s first and only supercar",
    specs: {
        "Engine": "3.5L Inline-6",
        "Horsepower": "273 HP",
        "0-60 mph": "5.4 seconds",
        "Top Speed": "162 mph",
        "Torque": "243 lb-ft",
        "Transmission": "5-speed manual"
    }
},
{
    name: "BMW 3.0 CSL Hommage (2015)",
    price: "$1,500,000 (concept)",
    emoji: "https://avatars.mds.yandex.net/i?id=04726e1d0a486743edebfbca2f3dcb4c_l-5495963-images-thumbs&n=13",
    brief: "A modern tribute to the legendary 1970s CSL coupe",
    specs: {
        "Engine": "3.0L Twin-Turbo Inline-6",
        "Horsepower": "500 HP",
        "0-60 mph": "3.9 seconds",
        "Top Speed": "190 mph",
        "Torque": "480 lb-ft",
        "Transmission": "7-speed dual-clutch"
    }
},
{
    name: "Mercedes-AMG GT 63 S 4-Door Coupe (2024)",
    price: "$180,000",
    emoji: "https://avatars.mds.yandex.net/i?id=50f81cd47f1bf100b6be05ddbbfbbad7_l-8320910-images-thumbs&n=13",
    brief: "A luxurious four-door supercar blending comfort and brutal AMG performance",
    specs: {
        "Engine": "4.0L Twin-Turbo V8 + Hybrid System",
        "Horsepower": "831 HP",
        "0-60 mph": "2.9 seconds",
        "Top Speed": "196 mph",
        "Torque": "1,084 lb-ft",
        "Transmission": "9-speed AMG SPEEDSHIFT MCT"
    }
}

];