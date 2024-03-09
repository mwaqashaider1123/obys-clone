function timelineOne(){
    var tl= gsap.timeline({
        scrollTrigger:{
            trigger: "#home",
            start: "top top",
            pin: true,
            // markers: true,
            scrub: 1,
            end: "bottom -150%"
        }
    })
    
    
    tl
    .to("#circle #btm img",{
        rotate: "-180deg",
        scale: 1,
        duration:1,
        stagger:.1,
        ease: Power1
    } , "hey")
    .to("#circle #top img",{
        scale: 1,
        duration:1,
        stagger:.1,
        ease: Power1
    } , "hey")
    .to("#cimage img",{
        scale: 0,
        duration:1,
        stagger:.1,
        ease: Power1
    } , "hey")
    .to("#centerimg h5",{
        opacity: 0,
        stagger:.1,
        ease: Power1
    } , "hey")
    .to("#circle",{
        scale: .6 ,
        ease: Power1
    } , "hey")
    .to("#overlay>h1#gallery",{
        bottom: "-50%",
        ease: Power1
    } , "hey")
    .to("#gola",{
        top: "50%",
        scale:2,
        ease: Power1
    } , "hey")
    .to("#tnav",{
        color: "#fff",
        duration: 1,
        ease: Power1
    } , "hey")
    .to("#gola",{
        opacity: 0,
        duration: 2.2,
        ease: Power1
    }, "hey1")
    .to("#smcircle",{
        scale: 0 ,
        duration: 2,
        ease: Power1
    } , "hey1")
    .to("#circle",{
        scale: 0 ,
        duration: 2,
        ease: Power1
    } , "hey1")
    .to("#overlay>h1#pf",{
        rotate: 0 ,
        bottom: "1%",
        ease: Power1
    } , "hey1")
    .to("#pinkpart",{
        rotate: 0 ,
        top: "0",
        duration:5,
        ease: Power1
    } , "hey1")
    .to("#pinkpart",{
        top: "-30%",
        duration:3,
        ease: Power1
    })
}

function timelineTwo(){
    var tl2= gsap.timeline({
        scrollTrigger:{
            trigger: "#second",
            start: "top top",
            pin: true,
            // markers: true,
            scrub: 1,
            end: "bottom -100%"
        }
    })
 
    tl2
    .to(".circle",{
        top: "50%",
        stagger:.1,
        ease: Power1
    })
    .to(".circle",{
        left: "50%",
        stagger:.1,
        ease: Power1
    })
    .to(".circle",{
        scale: 10,
        stagger:.1,
        ease: Power1
    })
    .to(".circle",{
        background: "linear-gradient(to right,#d5a7b4 ,#B4AAD5)",
        ease: Power1
    })
    .to("#stop h1",{
        left:"-150%",
        duration:8,
        ease: Power1
    }, "a")
    .to("#sbtm #two",{
        opacity: 0,
        duration:3,
        ease: Power1
    }, "a")
    .to("#sbtm #one",{
        opacity: 1,
        duration:3,
        delay:1,
        ease: Power1
    }, "a")


}

timelineOne();
timelineTwo();

