document.addEventListener('DOMContentLoaded', function () {
    const flowersPerSquarePixel = 0.0000028; // Densité optimale
        const margin = 120; // Marge minimale entre les fleurs
        const minRotationSpeed = 50; // Vitesse minimale de rotation (en secondes par tour)
        const maxRotationSpeed = 150; // Vitesse maximale de rotation (en secondes par tour)

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const flowerCount = Math.round(screenWidth * screenHeight * flowersPerSquarePixel);

        const flowers = [];

        for (let i = 0; i < flowerCount; i++) {
            const flower = document.createElement("img");
            flower.src = "./pictures/flower.png";
            flower.classList.add("flower");

            // Attribuer une taille en fonction des proportions
            let size;
            const rand = Math.random(); // Nombre aléatoire entre 0 et 1
            if (rand <= 0.20) {
                size = Math.random() * (528 - 350) + 350; // Grandes fleurs (10%)
            } else if (rand <= 0.25) {
                size = Math.random() * (230 - 144) + 144; // Petites fleurs (15%)
            } else {
                size = Math.random() * (350 - 230) + 230; // Fleurs moyennes (75%)
            }

            flower.style.width = `${size}px`;
            flower.style.height = `${size}px`;

            let x, y;
            let attempts = 0;
            do {
                // Position générée pour permettre une partie hors écran
                x = Math.random() * (screenWidth + size) - size / 2;
                y = Math.random() * (screenHeight + size) - size / 2;

                attempts++;
            } while (
                flowers.some(({ x: fx, y: fy, size: fSize }) => {
                    const dx = fx - x;
                    const dy = fy - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    return distance < ((size + fSize) / 2 + margin); // Vérifie la marge
                }) && attempts < 100
            );

            if (attempts < 100) {
                flower.style.left = `${x}px`;
                flower.style.top = `${y}px`;

                const rotationSpeed = Math.random() * (maxRotationSpeed - minRotationSpeed) + minRotationSpeed;
                const initialRotation = Math.random() * 360; // Rotation de départ aléatoire
                flower.style.transform = `rotate(${initialRotation}deg)`;
                flower.style.animation = `rotate ${rotationSpeed}s linear infinite`;

                document.body.appendChild(flower);

                flowers.push({ x, y, size });
            }
        }
});
