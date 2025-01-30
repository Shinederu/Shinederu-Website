import { useEffect } from "react";

const TwitchEmbed = () => {
  useEffect(() => {
    // Charger le script Twitch
    const script = document.createElement("script");
    script.src = "https://embed.twitch.tv/embed/v1.js";
    script.async = true;
    script.onload = () => {
      // Vérifier que le script Twitch est chargé
      if (window.Twitch) {
        new window.Twitch.Embed("twitch-embed", {
          width: 848,
          height: 480,
          channel: "shinederu",
          parent: ["www.shinederu.lol", "shinederu.lol", "172.16.20.11"],
        });
      }
    };

    const container = document.getElementById("twitch-embed-container");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Nettoyage : supprimer le script si le composant est démonté
      if (container) {
        container.innerHTML = ""; // Supprimer le contenu précédent
      }
    };
  }, []);

  return (
    <div id="lecteur-twitch">
      <div id="twitch-embed-container">
        <div id="twitch-embed"></div>
      </div>
    </div>
  );
};

export default TwitchEmbed;
