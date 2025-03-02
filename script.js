document.addEventListener("DOMContentLoaded", function () {
    // パーティクルエフェクトの設定
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#1E90FF", "#FFFFFF", "#F0D95C"] },
            "shape": {
                "type": ["circle", "edge", "triangle", "polygon", "star"],
                "polygon": { "nb_sides": 5 }
            },
            "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 2, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#1E90FF", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "repulse": { "distance": 100, "duration": 0.4 },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
  
    // マウスエフェクトの設定
    const mouseEffect = document.querySelector(".mouse-effect");
    document.addEventListener("mousemove", (e) => {
        mouseEffect.style.left = `${e.clientX}px`;
        mouseEffect.style.top = `${e.clientY}px`;
    });
    
    document.addEventListener("click", (e) => {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
  });
  