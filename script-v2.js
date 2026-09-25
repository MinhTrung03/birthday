
console.log("SCRIPT V2 LOADED");

/* =========================
   MỞ MÓN QUÀ
========================= */

function showSurprise() {

    const gift = document.getElementById("giftBox");

    if (gift) {
        gift.style.transition = "0.5s";
        gift.style.transform = "scale(0) rotate(360deg)";
    }

    document.getElementById("hero").style.display = "none";
    document.getElementById("surprise").style.display = "block";

    document.getElementById("surprise").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    if (typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
    }

    const music = document.getElementById("music");

    if (music) {
        music.currentTime = 0.3;

        music.play()
            .then(() => {
                console.log("Music started");
            })
            .catch((err) => {
                console.log("Music chưa thể tự phát:", err);
            });
    }
}

/* =========================
   GALLERY
========================= */

let sliderInterval = null;
let isChangingPhoto = false;

const photos = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg",
    "image/5.jpg",
    "image/6.jpg",
    "image/7.jpg",
    "image/8.jpg",
    "image/9.jpg",
    "image/10.jpg",
    "image/11.jpg",
    "image/12.jpg",
    "image/13.jpg",
];

let current = 0;


/* Preload ảnh để chuyển ảnh mượt hơn */

function preloadPhotos() {

    photos.forEach((photo) => {

        const img = new Image();
        img.src = photo;

    });

}


/* Hiển thị gallery */

function showGallery() {

    document.getElementById("surprise").style.display = "none";

    document.getElementById("gallery").style.display = "block";

    document.getElementById("videoSection").style.display = "block";

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    preloadPhotos();

    /*
        Chỉ tạo 1 interval.
        Không tạo thêm interval nếu đã có.
    */

    if (sliderInterval === null) {

        sliderInterval = setInterval(() => {

            changePhoto(1);

        }, 4000);

    }
}


/* Chuyển ảnh */

function changePhoto(direction) {

    if (isChangingPhoto) {
        return;
    }

    const slider = document.getElementById("slider");

    if (!slider) {
        return;
    }

    isChangingPhoto = true;

    let nextIndex = current + direction;

    if (nextIndex >= photos.length) {
        nextIndex = 0;
    }

    if (nextIndex < 0) {
        nextIndex = photos.length - 1;
    }

    /*
        Load ảnh tiếp theo trước.
        Khi ảnh đã load xong mới đổi ảnh hiện tại.
    */

    const nextImage = new Image();

    nextImage.src = photos[nextIndex];

    nextImage.onload = function () {

        slider.style.opacity = "0";

        setTimeout(() => {

            slider.src = photos[nextIndex];

            current = nextIndex;

            slider.style.opacity = "1";

            setTimeout(() => {

                isChangingPhoto = false;

            }, 350);

        }, 250);

    };

    nextImage.onerror = function () {

        console.log("Không tìm thấy ảnh:", photos[nextIndex]);

        isChangingPhoto = false;

    };
}


/* Ảnh tiếp theo */

function nextPhoto() {

    changePhoto(1);

}


/* Ảnh trước */

function prevPhoto() {

    changePhoto(-1);

}


/* =========================
   HIỂN THỊ THƯ / QUÀ
========================= */

function showLetter() {

    const letterSection = document.getElementById("letterSection");

    if (!letterSection) {
        return;
    }

    /*
        Hiện phần thư / quà
    */

    letterSection.style.display = "block";

    /*
        QUAN TRỌNG:
        Không tự động nhảy xuống phần kết nữa.
    */

    setTimeout(() => {

        letterSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

    /*
        Không mở thanksSection ở đây.
        Không scroll xuống cuối.
    */

}


/* =========================
   CHỮ CHẠY
========================= */

const text = "You are the best friend ever ❤️";

let i = 0;

function typeWriter() {

    const typing = document.getElementById("typing");

    if (!typing) {
        return;
    }

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 80);

    }

}


/* =========================
   LOAD TRANG
========================= */

window.addEventListener("load", function () {

    typeWriter();

    /*
        Preload ảnh ngay từ đầu
        để khi mở gallery ảnh chuyển mượt hơn.
    */

    preloadPhotos();

});


/* =========================
   TIM BAY
========================= */

setInterval(function () {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
        (20 + Math.random() * 20) + "px";

    heart.style.bottom = "-30px";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 5000);

}, 800);


/* =========================
   CONFETTI NHẸ
========================= */

if (typeof confetti === "function") {

    setInterval(() => {

        confetti({

            particleCount: 5,

            spread: 60,

            origin: {
                x: Math.random(),
                y: 0
            }

        });

    }, 1000);

}


/* =========================
   PHÁO HOA
========================= */

function fireworkShow() {

    if (typeof confetti !== "function") {

        console.log("Confetti library not loaded");

        return;

    }

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            confetti({

                particleCount: 150,

                spread: 120,

                startVelocity: 50,

                origin: {

                    x: Math.random(),

                    y: Math.random() * 0.6

                }

            });

        }, i * 500);

    }

}

/* =========================
   HIỆU ỨNG LẤP LÁNH
========================= */

document.addEventListener("mousemove", function (e) {

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        e.pageX + "px";

    sparkle.style.top =
        e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 800);

});


/* =========================
   BÓNG BAY
========================= */

setInterval(() => {

    const balloon =
        document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML = "🎈";

    balloon.style.left =
        Math.random() * window.innerWidth + "px";

    balloon.style.fontSize =
        (40 + Math.random() * 30) + "px";

    document.body.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 10000);

}, 2500);

window.addEventListener("load", function () {

    console.log("SCRIPT V2 LOADED");

    const loader = document.getElementById("loader");

    if (!loader) {
        console.log("Không tìm thấy loader");
        return;
    }

    setTimeout(function () {

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 500);

    }, 5000);

});
```
