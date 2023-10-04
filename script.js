/**SECTION DISCOVER OBSERVER */
const sectionDiscover_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const headingDiscover = entry.target.querySelector(".discover__header");
    const luxuryCard = entry.target.querySelector(".discover-cards__luxury");
    const serenityCard = entry.target.querySelector(
      ".discover-cards__serenity"
    );

    const luxuryText = entry.target.querySelector(
      ".discover-cards__luxury--text"
    );
    const serenityText = entry.target.querySelector(
      ".discover-cards__serenity--text"
    );

    if (entry.isIntersecting) {
      headingDiscover.classList.add("heading-text-animation");
      luxuryCard.classList.add("movesUp-animation");
      serenityCard.classList.add("movesUp-animation");
      luxuryText.classList.add("luxury-text-animation");
      serenityText.classList.add("serenity-text-animation");
      return;
    }

    // function to remove animation classes
    // headingDiscover.classList.remove("animation");
  });
});

sectionDiscover_observer.observe(document.querySelector(".section__discover"));

/**SECTION ISLAND OBSERVER */
const sectionIsland_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const headingIsland = entry.target.querySelector(".island__header");
    const islandCard = entry.target.querySelector(".island-card");
    const islandCardHeading_sub = entry.target.querySelector(
      ".island-card__heading--sub"
    );

    const islandCardHeading_main = entry.target.querySelector(
      ".island-card__heading--main"
    );
    const booking_cta = entry.target.querySelector(".island-card__booking-cta");

    if (entry.isIntersecting) {
      headingIsland.classList.add("movesInLeft-animation");
      islandCard.classList.add("movesUp-animation");
      islandCardHeading_sub.classList.add("zoomIn-animation");
      islandCardHeading_main.classList.add("zoomIn-animation");
      booking_cta.classList.add("button-animation");
      return;
    }
  });
});

sectionIsland_observer.observe(document.querySelector(".section__island"));

/**SECTION ACTIVITIES OBSERVER */
const sectionActivities_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //activities header
    // const headingIsland = entry.target.querySelector(".island__header");
    const beach = entry.target.querySelector(".activities-gallery__beaches");
    const waterfalls = entry.target.querySelector(
      ".activities-gallery__waterfalls"
    );
    const conserCentres = entry.target.querySelector(
      ".activities-gallery__conservation-centre"
    );

    if (entry.isIntersecting) {
      beach.classList.add("movesUp-animation");
      waterfalls.classList.add("movesUp-animation");
      conserCentres.classList.add("movesUp-animation");
      return;
    }
  });
});

sectionActivities_observer.observe(
  document.querySelector(".section__activities")
);

/**SECTION VACATIONS OBSERVER */
const sectionVacation_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //vacations header
    // const headingIsland = entry.target.querySelector(".island__header");

    const vacationGallery = entry.target.querySelector(".vacation-gallery");

    if (entry.isIntersecting) {
      vacationGallery.classList.add("movesUp-animation");
      return;
    }
  });
});

sectionVacation_observer.observe(document.querySelector(".section__vacations"));

/**SECTION SPONSORS OBSERVER */
const sectionSponsors_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //sponsors header
    // const headingIsland = entry.target.querySelector(".island__header");

    const sponsorsLogo_box = entry.target.querySelector(".sponsors__box");

    if (entry.isIntersecting) {
      sponsorsLogo_box.classList.add("movesUp-animation");
      return;
    }
  });
});

sectionSponsors_observer.observe(document.querySelector(".section__sponsors"));

/**FOOTER OBSERVSER */
const footer_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const about__primary = entry.target.querySelector(".about__primary");
    const about__group = entry.target.querySelector(".about__group");
    const about__destinations = entry.target.querySelector(
      ".about__destinations"
    );

    const footer__logoBox = entry.target.querySelector(".footer__logo-box");
    const footer__social = entry.target.querySelector(".footer__social");
    const footer__copyRight = entry.target.querySelector(".footer__copy-right");

    if (entry.isIntersecting) {
      about__primary.classList.add("movesDown-animation");
      about__group.classList.add("movesDown-animation");
      about__destinations.classList.add("movesInLeft-animation");

      footer__logoBox.classList.add("movesUp-animation");
      footer__social.classList.add("movesUp-animation");
      footer__copyRight.classList.add("movesUp-animation");
      return;
    }
  });
});

footer_observer.observe(document.querySelector(".footer"));
