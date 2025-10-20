import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother, ScrambleTextPlugin);

document.addEventListener("DOMContentLoaded", (event) => {

    let smoother = ScrollSmoother.create({
        smooth: 3,
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
        scrollTrigger: { trigger: '#stoicism .paragraph', start: "top 80%", endTrigger: "#stoicism", end: "90% bottom", scrub: true, }
    })

    // EPICTETUS TIME LINE

    gsap.from('.epictetus-left', {
        xPercent: -100, filter: "blur(10px)", stagger: 0.5,
        scrollTrigger: { trigger: ".epictetus-left", start: "top 90%", endTrigger: "#epictetus", end: "80% bottom", scrub: true, }
    })

    gsap.from('.epictetus-center', {
        yPercent: 100, filter: "blur(10px)", stagger: 0.5,
        scrollTrigger: { trigger: "#epictetus", start: "top 90%", endTrigger: "#epictetus", end: "80% bottom", scrub: true }
    })

    gsap.from('.epictetus-right', {
        xPercent: 100, filter: "blur(10px)", stagger: 0.5,
        scrollTrigger: { trigger: ".epictetus-right", start: "top 90%", endTrigger: "#epictetus", end: "80% bottom", scrub: true, }
    })


    //  SENECA

    let senecaTextSplit = SplitText.create('#seneca h1', { type: 'chars', mask: "chars", autoSplit: true })
    let senecaParagraphSplit = SplitText.create('#seneca p', { type: 'chars', mask: "chars", autoSplit: true })

    gsap.from(senecaTextSplit.chars, {
        filter: "blur(10px)", y: gsap.utils.wrapYoyo([-100, 100]), ease: "power4.inOut",
        stagger: { each: 0.06, from: "random", },
        scrollTrigger: { trigger: "#seneca", start: "top 80%", endTrigger: "#seneca", end: "80% bottom", scrub: true, }
    })

    gsap.from(senecaParagraphSplit.chars, {
        filter: "blur(10px)", y: gsap.utils.wrapYoyo([-100, 100]), ease: "back", stagger: { each: 0.06, from: "random", },
        scrollTrigger: { trigger: '#seneca p', start: "top 80%", endTrigger: "#seneca", end: "bottom bottom", scrub: true, }
    })

    gsap.from("#seneca img", {
        yPercent: 200, filter: "blur(10px)",
        scrollTrigger: { trigger: "#seneca", start: "top 80%", endTrigger: "#seneca", end: "90% bottom", scrub: true, }
    })

    // MARCUS
    let marcusTextSplit = SplitText.create('#marcus h1', { type: 'lines', mask: "lines", autoSplit: true })
    let marcusParagraphSplit = SplitText.create('#marcus p', { type: 'lines', mask: "lines", autoSplit: true })

    gsap.from(marcusTextSplit.lines, {
        filter: "blur(10px)", y: gsap.utils.wrapYoyo([-100, 100]), ease: "back", stagger: { each: 0.06, from: "random", },
        scrollTrigger: { trigger: "#marcus h1", start: "top 80%", endTrigger: "#marcus", end: "80% bottom", scrub: true, }
    })

    gsap.from(marcusParagraphSplit.lines, {
        y: 100, ease: "power4.inOut", stagger: 0.5,
        scrollTrigger: { trigger: '#marcus p', start: "top 80%", endTrigger: "#marcus", end: "bottom bottom", scrub: true }
    })

    gsap.from("#marcus img", {
        yPercent: 200, filter: "blur(10px)",
        scrollTrigger: { trigger: "#marcus", start: "top 80%", endTrigger: "#marcus", end: "90% bottom", scrub: true, }
    })

    // FOOTER PAGE

    let thankyouPopup = document.querySelector(".thankyou-popup")

    gsap.from(thankyouPopup, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".thankyou-placeholder",
            start: "top bottom",
            toggleActions: "play none none reverse",
        }

    })

    thankyouPopup.addEventListener("click", (e) => {
        smoother.scrollTo("#hero", true, "center center")
    })

    // NAVIGATIONS

    let navStoic = document.querySelector(".nav-stoic")
    let navEpic = document.querySelector(".nav-epic")
    let navSenec = document.querySelector(".nav-senec")
    let navMarcus = document.querySelector(".nav-marcus")

    navStoic.addEventListener("click", (e) => {
        smoother.scrollTo("#stoicism", true, "center center")
        e.preventDefault()
    })

    navEpic.addEventListener("click", (e) => {
        smoother.scrollTo("#epictetus", true, "center center")
        e.preventDefault()
    })

    navSenec.addEventListener("click", (e) => {
        smoother.scrollTo("#seneca", true, "center center")
        e.preventDefault()
    })

    navMarcus.addEventListener("click", (e) => {
        smoother.scrollTo("#marcus", true, "center center")
        e.preventDefault()
    })
});

