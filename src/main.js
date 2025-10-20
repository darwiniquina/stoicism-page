import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother, ScrambleTextPlugin);

document.addEventListener("DOMContentLoaded", (event) => {

    ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
    });

    gsap.set('body', { display: 'block', })

    let heroTextSplit = SplitText.create('#hero h1', { type: 'chars' })

    gsap.to("header", {
        opacity: 0,
        filter: "blur(10px)",
        scrollTrigger: {
            trigger: "#stoicism",
            start: "top 70%",
            endTrigger: "body",
            end: "bottom bottom",
            markers: true,
            toggleActions: "play none none reverse",
        }
    })

    let heroTimeLine = gsap.timeline({ defaults: { filter: "blur(10px)", opacity: 0, duration: 1, } })
        .from('#hero img', { y: 100, })
        .from(heroTextSplit.chars, {
            filter: "blur(10px)", y: gsap.utils.wrapYoyo([-100, 100]), ease: "power4.inOut", stagger: {
                each: 0.06,
                from: "center",
            }
        })
        .from("header", { y: -100, })
        .from("#hero p", { y: 100, }, "<")

    // STOIC TIME LINE

    let stoicParagraphSplit = SplitText.create('#stoicism .paragraph', { type: 'lines', mask: "lines", autoSplit: true })

    gsap.to('.stoicism-stoic', {
        scrambleText: { text: "STOIC", chars: "XO", revealDelay: 0.5, speed: 0.5, },
        scrollTrigger: { trigger: ".stoicism-stoic", start: "top 90%", endTrigger: "#stoicism", end: "50% bottom", scrub: true, }
    })

    gsap.from('#stoicism img', {
        xPercent: 200, filter: "blur(10px)",
        scrollTrigger: { trigger: "#stoicism", start: "top 90%", endTrigger: "#stoicism", end: "55% bottom", scrub: true, }
    })

    gsap.to('.stoicism-ism', {
        scrambleText: { text: "ISM", chars: "XO", revealDelay: 0.5, speed: 0.6, },
        scrollTrigger: { trigger: ".stoicism-ism", start: "top 90%", endTrigger: "#stoicism", end: "80% bottom", scrub: true, }
    })

    gsap.from(stoicParagraphSplit.lines, {
        y: 100, ease: "power4.inOut", stagger: 0.5,
        scrollTrigger: { trigger: '#stoicism .paragraph', start: "top 80%", endTrigger: "#stoicism", end: "bottom bottom", scrub: true, }
    })



});

