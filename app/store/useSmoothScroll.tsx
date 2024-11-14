import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const useSmoothScroll = () => {
  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
    },
    {
      dependencies: [location],
    }
  );
};

export default useSmoothScroll;
