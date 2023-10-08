document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".header .flex .navbar");
  let menuBtn = document.querySelector("#menu-btn");

  // Menü düğmesine tıklama işlevi ekle
  menuBtn.onclick = () => {
    navbar.classList.toggle("active");
  };

  // Sayfa kaydırıldığında menüyü kapat
  window.onscroll = () => {
    navbar.classList.remove("active");
  };

  // Tüm kartları seç
  let cards = document.querySelectorAll(".box");

  // Her kart için tıklama işlevi ekle
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Kartın içindeki <a> etiketini al
      let link = card.querySelector("a");

      // Eğer link varsa, linkin href özelliği ile yönlendirme yap
      if (link) {
        let destination = link.getAttribute("href");
        window.location.href = destination;
      }
    });
  });

  // input alanlarını sınırla
  document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
    inputNumber.oninput = () => {
      if (inputNumber.value.length > inputNumber.maxLength)
        inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };
  });

  // AOS animasyonlarını başlat
  AOS.init({
    duration: 400,
    delay: 200,
  });
});
