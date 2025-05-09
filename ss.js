gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.from(".events img,.events-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".events",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }
})
