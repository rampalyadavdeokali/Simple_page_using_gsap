var tl =gsap.timeline()

tl.to("#full",{
    right:0,
    duration:1
})

tl.from("#full h4",{
    right:0,
    duration:1,
    x:150,
    stagger:0.3,
    opacity:0
})