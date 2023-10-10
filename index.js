
const projects = document.querySelectorAll(".text-section p");
const imageContainers = document.querySelectorAll(".image-container");

projects.forEach((project,) => {
    project.addEventListener("click", () => {
         
        imageContainers.forEach((container) => {
            container.classList.remove("active");
        });

         
        const target = project.getAttribute("data-target");

         
        document.querySelector(`.image-container.${target}`).classList.add("active");
    });
});

const wrapper2 = document.querySelector(".wrapper2");
const svg = wrapper2.querySelector(".svg");
const text = wrapper2.querySelector(".h22");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: wrapper2,
    start: "top center",
    end: "center center",
    scrub: true,
    
  },
});


tl.from(svg, { x: -180, opacity: 0, duration: 20 }); 
tl.from(text, { x: 50, opacity: 0, duration: 30 }, "-=1");