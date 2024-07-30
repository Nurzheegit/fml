function updateImage() {
  const quality = document.getElementById("qualitySelect").value;
  const slider = document.getElementById("slider");
  const audioPlayer = document.getElementById("audioPlayer");
  const audioControls = document.getElementById("audioControls");

  slider.innerHTML = ""; // Очистить слайдер

  if (quality === "1080p") {
    const images = [
      "./images/ais1.jpg",
      "./images/ais2.jpg",
      "./images/ais3.jpg",
      "./images/ais4.png",
      "./images/ais5.jpg",
    ];
    images.forEach((imageSrc) => {
      const img = document.createElement("img");
      img.src = imageSrc;
      slider.appendChild(img);
    });
    initializeSlider(); // Инициализировать слайдер
    audioPlayer.src = "./images/tek.mp3";
    audioPlayer.currentTime = 27;
    audioPlayer.play();
    audioControls.style.display = "block"; // Показать элементы управления аудио
  } else {
    audioPlayer.pause();
    audioControls.style.display = "none"; // Скрыть элементы управления аудио
    const img = document.createElement("img");
    img.src = `./images/${quality}.jpg`;
    img.classList.add("active");
    slider.appendChild(img);
  }
}

function initializeSlider() {
  const slides = document.querySelectorAll("#slider img");
  let currentIndex = 0;
  slides[currentIndex].classList.add("active");

  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 2000);
}

function toggleAudio() {
  const audioPlayer = document.getElementById("audioPlayer");
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

function changeVolume(volume) {
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.volume = volume / 100;
}
