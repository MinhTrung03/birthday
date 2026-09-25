console.log("SCRIPT V3 LOADED");

/* =========================
   MỞ MÓN QUÀ
========================= */

function showSurprise() {
    const gift = document.getElementById("giftBox");
    const hero = document.getElementById("hero");
    const surprise = document.getElementById("surprise");
    const music = document.getElementById("music");

    if (gift) {
        gift.style.transition = "0.5s";
        gift.style.transform = "scale(0) rotate(360deg)";
    }

    if (hero) {
        hero.style.display = "none";
    }

    if (surprise) {
        surprise.style.display = "block";

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: {
                y: 0.6
            }
        });
    }

    if (music) {
        music.currentTime = 0.3;

        music.play()
            .then(function () {
                console.log("Music started");
            })
            .catch(function (err) {
                console.log("Music chưa thể tự phát:", err);
            });
    }
}


/* =========================
   GALLERY
========================= */

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
    "image/13.jpg"
];

let current = 0;
let sliderInterval = null;
let isChangingPhoto = false;


/* =========================
   PRELOAD ẢNH
========================= */

function preloadPhotos() {
    photos.forEach(function (photo) {
        const img = new Image();
        img.src = photo;
    });
}


/* =========================
   HIỂN THỊ GALLERY
========================= */

function showGallery() {
    const surprise = document.getElementById("surprise");
    const gallery = document.getElementById("gallery");
    const videoSection = document.getElementById("videoSection");

    if (surprise) {
        surprise.style.display = "none";
    }

    if (gallery) {
        gallery.style.display = "block";
    }

    if (videoSection) {
        videoSection.style.display = "block";
    }

    if (gallery) {
        gallery.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    preloadPhotos();

    if (sliderInterval === null) {
        sliderInterval = setInterval(function () {
            changePhoto(1);
        }, 4000);
    }
}


/* =========================
   CHUYỂN ẢNH MƯỢT
========================= */

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

    const nextImage = new Image();

    nextImage.onload = function () {
        slider.style.opacity = "0";

        setTimeout(function () {
            slider.src = photos[nextIndex];
            current = nextIndex;
            slider.style.opacity = "1";

            setTimeout(function () {
                isChangingPhoto = false;
            }, 350);

        }, 250);
    };

    nextImage.onerror = function () {
        console.log(
            "Không tìm thấy ảnh:",
            photos[nextIndex]
        );

        isChangingPhoto = false;
    };

    nextImage.src = photos[nextIndex];
}


/* =========================
   NÚT ẢNH
========================= */

function nextPhoto() {
    changePhoto(1);
}

function prevPhoto() {
    changePhoto(-1);
}


/* =========================
   PHẦN THƯ / QUÀ
========================= */

function showLetter() {
    const letterSection =
        document.getElementById("letterSection");

    if (!letterSection) {
        return;
    }

    letterSection.style.display = "block";

    setTimeout(function () {
        letterSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);
}

/* =========================
   HIỆN PHẦN CUỐI
========================= */

function showThanks() {

    const thanksSection =
        document.getElementById("thanksSection");

    if (!thanksSection) {
        return;
    }

    thanksSection.style.display = "block";

    setTimeout(function () {

        thanksSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);
}

/* =========================
   CHỮ CHẠY
========================= */

const typingText =
    "You are the best friend ever ❤️";

let typingIndex = 0;

function typeWriter() {
    const typing =
        document.getElementById("typing");

    if (!typing) {
        return;
    }

    if (typingIndex < typingText.length) {
        typing.innerHTML +=
            typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter, 80);
    }
}


/* =========================
   LOAD TRANG
========================= */

window.addEventListener("load", function () {

    console.log("PAGE LOADED");

    typeWriter();

    preloadPhotos();

    const loader =
        document.getElementById("loader");

    if (!loader) {
        console.log("Không tìm thấy loader!");
        return;
    }

    setTimeout(function () {

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

            console.log("Loader đã tắt!");

        }, 500);

    }, 5000);
});


/* =========================
   TIM BAY
========================= */

setInterval(function () {

    const heart =
        document.createElement("div");

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

setInterval(function () {

    if (typeof confetti !== "function") {
        return;
    }

    confetti({
        particleCount: 5,
        spread: 60,
        origin: {
            x: Math.random(),
            y: 0
        }
    });

}, 1000);


/* =========================
   PHÁO HOA
========================= */

function fireworkShow() {

    if (typeof confetti !== "function") {

        console.log(
            "Confetti library not loaded"
        );

        return;
    }

    for (let i = 0; i < 8; i++) {

        setTimeout(function () {

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

document.addEventListener(
    "mousemove",
    function (e) {

        const sparkle =
            document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left =
            e.pageX + "px";

        sparkle.style.top =
            e.pageY + "px";

        document.body.appendChild(sparkle);

        setTimeout(function () {
            sparkle.remove();
        }, 800);
    }
);


/* =========================
   BÓNG BAY
========================= */

setInterval(function () {

    const balloon =
        document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML = "🎈";

    balloon.style.left =
        Math.random() * window.innerWidth + "px";

    balloon.style.fontSize =
        (40 + Math.random() * 30) + "px";

    document.body.appendChild(balloon);

    setTimeout(function () {
        balloon.remove();
    }, 10000);

}, 2500);


console.log("SCRIPT V3 READY");
