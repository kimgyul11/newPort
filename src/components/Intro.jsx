import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
const text = ["Creative", "Passion", "挑戦する", "노력하는"];

const Intro = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;

    //타임라인
    let tl = gsap.timeline();
    tl.to("section .t1", { xPercent: -500 }, "text")
      .to("section .t2", { xPercent: 500 }, "text")
      .to("section .t3", { xPercent: -500 }, "text")
      .to("section .t4", { xPercent: 500 }, "text")
      .fromTo(
        "#intro",
        { background: "black" },
        { backgroundColor: "white" },
        "text"
      );

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
          <div key={key} className={`intro__item__text t${key + 1}`}>
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Intro;
