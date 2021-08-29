// VENOBOX
$(document).ready(function () {
  $(".venobox").venobox();
});

// SLICK
$(document).ready(function () {
  $(".newIn-movies").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".comingSoon-slide__list").slick({
    slidesToShow: 6,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// COMING SOON
const handleRemoveActiveElement = (arrayElement) => {
  arrayElement.forEach((element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  });
};

const handleChangeComingSoon = () => {
  const comingList = document.querySelectorAll(
    ".comingSoon__content .comingSoon__item"
  );
  const comingSlideList = document.querySelectorAll(
    ".comingSoon-slide__list .comingSoon-slide__item"
  );

  comingSlideList.forEach((slide) => {
    slide.addEventListener("click", () => {
      const dataSlide = slide.getAttribute("data-slide");
      const comingMain = document.getElementById(dataSlide);

      handleRemoveActiveElement(comingSlideList);
      slide.classList.add("active");

      if (comingMain) {
        handleRemoveActiveElement(comingList);
        comingMain.classList.add("active");
      }
    });
  });
};

// Navbar
const handleNavbar = () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    let heightScreen = pageYOffset;
    console.log(heightScreen);

    if (heightScreen > 700) {
      navbar.classList.add("navbarFixed");
    } else {
      if (navbar.classList.contains("navbarFixed")) {
        navbar.classList.add("navbarFixed--remove");

        setTimeout(() => {
          navbar.classList.remove("navbarFixed");
          navbar.classList.remove("navbarFixed--remove");
        }, 200);
      }
    }
  });
};

// Function
handleChangeComingSoon();
handleNavbar();
