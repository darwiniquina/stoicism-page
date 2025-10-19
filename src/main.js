import './style.css'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", (event) => {

    let heroTextSplit = SplitText.create(".hero-text", { type: "chars" });
    let heroParagraphSplit = SplitText.create(".hero-paragraph", { type: "chars" });
    let bannerSplit = SplitText.create(".banner", { type: "chars" });

    gsap.from(bannerSplit.chars, {
        color: "red",
        filter: "blur(50px)",
        stagger: {
            ease: "power1.inOut",
            each: 0.05,
            from: "left",
            repeat: -1,
            yoyo: true,
            repeatDelay: 2,
        }
    })

    gsap.set('body', {
        display: 'block',
    })

    let tl = gsap.timeline();

    tl.from(".hero-image", {
        opacity: 0,
        filter: "blur(100px)",
        duration: 1,
    })

    tl.from(heroTextSplit.chars, {
        filter: "blur(100px)",
        duration: 1,
        ease: 'power1.inOut',
        stagger: {
            each: 0.05,
            from: "start",
        },
    }, "<0.5 ")

    tl.from(heroParagraphSplit.chars, {
        x: -100,
        y: 200,
        filter: "blur(100px)",
        duration: 1,
        ease: 'power1.inOut',
        stagger: {
            each: 0.005,
            from: "start",
        },
    })
});

