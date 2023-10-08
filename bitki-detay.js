// bitki-detay.js

// Bitki bilgilerini saklayın
const bitkiler = {
  kuşburnu: {
    ad: "Kuşburnu",
    resim: "images/tour-img-1.jpg",
    aciklama: "Kuşburnu ile ilgili açıklamalar burada yer alır.",
  },
  ekinezya: {
    ad: "Ekinezya",
    resim: "images/tour-img-2.jpg",
    aciklama: "Ekinezya ile ilgili açıklamalar burada yer alır.",
  },
  // Diğer bitkiler için aynı yapıyı kullanın
};

// DOM'un yüklendiğinden emin olun
document.addEventListener("DOMContentLoaded", function () {
  const bitkiLinkleri = document.querySelectorAll(".grid .box a");
  const ayrıntıIçerik = document.querySelector(".ayrıntı-içerik");

  bitkiLinkleri.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const hedefBitki = link.getAttribute("data-bitki");

      if (bitkiler[hedefBitki]) {
        const bitki = bitkiler[hedefBitki];

        // Ayrıntı içeriği oluştur
        const ayrıntıHTML = `
            <img src="${bitki.resim}" alt="" />
            <h3><span>${bitki.ad}</span></h3>
            <p>${bitki.aciklama}</p>
          `;

        // Ayrıntı içeriğini göster
        ayrıntıIçerik.innerHTML = ayrıntıHTML;
      }
    });
  });
});
