import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
const text = ["텍스트1", "텍스트2", "텍스트3", "텍스트4"];

const Intro = () => {
  const sectionRef = useRef(null);
  const itemRef = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const item = itemRef.current;

    let tl = gsap.timeline();
    tl.to("section .t1", { xPercent: -500 }, "text")
      .to("section .t2", { xPercent: 500 }, "text")
      .to("section .t3", { xPercent: -500 }, "text")
      .to("section .t4", { xPercent: 500 }, "text");
    let scrollTween = ScrollTrigger.create({
      animation: tl,
      trigger: section,
      start: "top top",
      end: "+=2000",
      pin: true,
      scrub: true,
    });
    return () => {
      scrollTween.kill();
    };
  }, []);
  return (
    <section id="intro" ref={sectionRef}>
      <div className="intro__inner">
        {text.map((text, key) => (
          <div
            key={key}
            className={`intro__item__text t${key + 1}`}
            ref={(el) => (itemRef.current[key] = el)}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Intro;
