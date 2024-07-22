function homepageAnimation() {


    gsap.set(".slidesm", {
        scale: 5
    })

    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        }
    });

    t1
        .to(".videodiv", {
            "--clip": "0%",
            ease: Power2
        }, "anim")

        .to(".slidesm", {
            scale: 1,
            ease: Power2
        }, "anim")

        .to(".lft", {
            x: "-10%",
            ease: Power2
        }, "anim")
        .from(".rgt", {
            x: "10%",
            ease: Power2
        }, "anim")

}

function craftpageAnimation() {
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".craft",
            start: "top top",
            end: "top bottom",
            pin: true
        },
    })

    t2.from(".card-elem", {
        y: 700,
        transform: "scaleX(70%)",
        backgroundColor: "#AEDEE0",
        color: "black",
        stagger: 1,
        ease: Power2,
        duration: 2,
        delay: 0.2
    })
}

function realpageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom 120%",
            scrub: 1,
        },
        xPercent: -300,
        ease: Power4
    })
}

function listelemAnimation(){
    document.querySelectorAll(".listelem").forEach(function(val){
        val.addEventListener("mouseenter",function(){
            val.childNodes[3].style.opacity = 1;;
            let blue = val.childNodes[5];
            gsap.to(blue,{
                height:"100%",
                duration:0.6
            })
            
        })
        val.addEventListener("mousemove",function(dets){
            gsap.to(".picture",{
                // x: dets.x,
                // y: dets.y
            });
        })
        val.addEventListener("mouseleave",function(){
            val.childNodes[3].style.opacity = 0;
            let blue = val.childNodes[5];
            gsap.to(blue,{
                height:"0%",
                duration:0.6
            })
        })
    })
}

function capsulesAnimation(){
    gsap.from(".capsule",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top top",
            end:"bottom bottom",
            scrub:2
        },
        y:300,
        duration:0.5,
        opacity:0
    })
}

homepageAnimation();
craftpageAnimation();
realpageAnimation();
listelemAnimation();
capsulesAnimation();