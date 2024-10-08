import { useEffect } from 'react';

const Streaming = () => {
    useEffect(() => {
        // Charger le script Twitch Embed
        const script = document.createElement('script');
        script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
        script.addEventListener('load', () => {
            if (window.Twitch) {
                new window.Twitch.Embed("twitch-embed", {
                    width: 1420,
                    height: 720,
                    channel: "shinederu",
                    parent: ["www.shinederu.lol", "shinederu.lol"]
                });
            }
        });
        document.body.appendChild(script);

        // Nettoyage lors du démontage du composant
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <h1>Streaming</h1>
            <p>Si tu souhaites regarder mes streams en direct, tout se passe sur Twitch ! </p>
            <div id="lecteur-twitch">
                <div id="twitch-embed"></div>
            </div>
            <p>Comme je n'ai pas de planning, faut rester connecté pour ne rien louper !</p>
        </>
    );
};

export default Streaming;
