import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";

export default function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 1,
        ease: "power4.easeInOut",
        onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="Fact is" />
      <p ref={ref} id="#headline" className={cn({ "is-reveal": reveal })}>
      The middle class in the United States makes up approximately 52% of the population, which is down from 61% in 1970, according to the Pew Research Center. Although new jobs continue to be added to the economy, it's important to find a field of work with solid growth potential but also pays a good salary.
      </p>
    </section>
  );
}
