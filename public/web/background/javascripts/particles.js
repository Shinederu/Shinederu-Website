document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById("particleCanvas");
    const ctx = canvas.getContext("2d");

    // Redimensionne le canvas pour couvrir toute la fenêtre
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Configuration des particules
    const particles = [];
    const particleCount = 100; // Nombre de particules
    const maxSpeed = 1.5;

    // Générer une particule
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1, // Taille des particules
            speedX: (Math.random() - 0.5) * maxSpeed,
            speedY: (Math.random() - 0.5) * maxSpeed,
            alpha: Math.random() * 0.8 + 0.2 // Transparence
        };
    }

    // Initialisation des particules
    for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
    }

    // Animation
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const p of particles) {
            // Dessiner chaque particule
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
            ctx.fill();
            ctx.closePath();

            // Mettre à jour la position
            p.x += p.speedX;
            p.y += p.speedY;

            // Repositionner si hors de l'écran
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        }

        requestAnimationFrame(animateParticles);
    }

    // Lancer l'animation
    animateParticles();
});
