import gsap from "gsap";
import { sceneWeightsInOut } from "../scenes";
import { createMatchMedia } from "../utils/matchMedia";

export const aboutProgress = { value: 0 };

const setup = ({
  about,
  tlDescription,
  contentDescription,
  tlServices,
  contentServices,
  tlDetails,
  contentDetails,
  contentProgressCount,
}: {
  about: HTMLElement;
  tlDescription: gsap.core.Timeline;
  contentDescription: HTMLDivElement;
  tlServices: gsap.core.Timeline;
  contentServices: HTMLDivElement;
  tlDetails: gsap.core.Timeline;
  contentDetails: HTMLDivElement;
  contentProgressCount: HTMLDivElement;
}) => {
  setupInAnimation(about);
  setupOutAnimation(about);
  setupSectionsAnimation({
    about,
    tlDescription,
    contentDescription,
    tlServices,
    contentServices,
    tlDetails,
    contentDetails,
    contentProgressCount,
  });
};

const setupInAnimation = (about: HTMLElement) => {
  createMatchMedia((_context, { isMobile }) => {
    const tl = gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: about,
        start: isMobile ? "top bottom" : "-=200px bottom",
        end: "top top",
        scrub: true,
      },
    });

    tl.fromTo(sceneWeightsInOut.hero, { out: 0 }, { out: 1, ease: "none", duration: 1 }, 0);
    tl.fromTo(sceneWeightsInOut.about, { in: 0 }, { in: 1, ease: "none", duration: 1 }, 0);
    tl.fromTo(sceneWeightsInOut["about-1"], { in: 0 }, { in: 1, ease: "none", duration: 1 }, 0);
  });
};

const setupOutAnimation = (about: HTMLElement) => {
  const outTl = gsap.timeline({
    scrollTrigger: {
      trigger: about,
      start: "bottom bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  outTl.fromTo(sceneWeightsInOut["about"], { out: 0 }, { out: 1, ease: "none", duration: 1 }, 0);
  outTl.fromTo(sceneWeightsInOut["about-2"], { out: 0 }, { out: 1, ease: "none", duration: 1 }, 0);
};

const setupSectionsAnimation = ({
  about,
  tlDescription,
  contentDescription,
  tlServices,
  contentServices,
  tlDetails,
  contentDetails,
  contentProgressCount,
}: {
  about: HTMLElement;
  contentDescription: HTMLDivElement;
  contentServices: HTMLDivElement;
  contentDetails: HTMLDivElement;
  contentProgressCount: HTMLDivElement;
  tlDescription: gsap.core.Timeline;
  tlServices: gsap.core.Timeline;
  tlDetails: gsap.core.Timeline;
}) => {
  createMatchMedia((_context, { isLandscape }) => {
    const tl = gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: about,
        start: isLandscape ? "top 35%" : "top 25%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    const completed = { value: false };
    tl.to(completed, { value: true, duration: 0 }, 1);

    if (isLandscape) {
      const DETAILS_DELAY = 0;
      const DESCRIPTION_DELAY = 0.4;
      const SERVICES_DELAY = 0.8;

      tl.fromTo(contentDetails, { opacity: 0 }, { opacity: 1, duration: 0.15, ease: "power1.out" }, DETAILS_DELAY);
      tl.add(() => { tlDetails?.play(); }, DETAILS_DELAY);

      tl.fromTo(contentDescription, { opacity: 0 }, { opacity: 1, duration: 0.15, ease: "power1.out" }, DESCRIPTION_DELAY);
      tl.add(() => { tlDescription?.play(); }, DESCRIPTION_DELAY);

      tl.fromTo(contentServices, { opacity: 0 }, { opacity: 1, duration: 0.15, ease: "power1.out" }, SERVICES_DELAY);
      tl.add(() => { tlServices?.play(); }, SERVICES_DELAY);
    } else {
      const DESCRIPTION_DELAY = 0;
      const SERVICES_DELAY = 0.6;

      tl.fromTo(contentDescription, { opacity: 0, y: "10vh" }, { opacity: 1, y: "0vh", duration: 0.15, ease: "power1.out" }, DESCRIPTION_DELAY);
      tl.to(contentDescription, { opacity: 0, y: "-10vh", duration: 0.15, ease: "power1.out" }, SERVICES_DELAY - 0.075);
      tl.add(() => { tlDescription?.play(); }, DESCRIPTION_DELAY);

      tl.fromTo(contentServices, { opacity: 0, y: "10vh" }, { opacity: 1, y: "0vh", duration: 0.15, ease: "power1.out" }, SERVICES_DELAY);
      tl.add(() => { tlServices?.play(); }, SERVICES_DELAY);

      tl.fromTo(contentProgressCount, { opacity: 0, y: "10vh" }, { opacity: 1, y: "0vh", duration: 0.15, ease: "power1.out" }, DESCRIPTION_DELAY);
    }
  });
};

const destroy = () => {
  // MatchMedia instances are auto-reverted on component unmount
};

export const about = { setup, destroy };
