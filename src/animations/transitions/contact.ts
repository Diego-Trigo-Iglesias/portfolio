import gsap from "gsap";
import { sceneWeightsInOut } from "../scenes";

const setup = (contact: HTMLElement) => {
  const inTl = gsap.timeline({
    scrollTrigger: {
      trigger: contact,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
  });

  inTl.fromTo(sceneWeightsInOut.contact, { in: 0 }, { in: 1, duration: 1, ease: "none" }, 0);

  const outTl = gsap.timeline({
    scrollTrigger: {
      trigger: contact,
      start: "bottom bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  outTl.fromTo(sceneWeightsInOut.contact, { out: 0 }, { out: 1, duration: 1, ease: "none" }, 0);
};

const destroy = () => {
  // ScrollTriggers are auto-reverted on component unmount
};

export const contact = { setup, destroy };
