import ActusCards from "@/components/cards/ActusCards";
import InfoCards from "@/components/cards/InfoCards";
import Title from "@/components/decoration/Title";

const Homepage = () => {
  return (
    <>
      {/* Main Content */}
      <section className=" mb-8">
        <Title title="Salutation jeune aventurier !" size={1} />
        <p>
          Bienvenue sur mon site ! Je suis Shinederu, un mec assez random qui joue à des jeux vidéo. Profite bien de cet
          espace mis à ta disposition !
        </p>
      </section>

      <InfoCards />

      <section className="mb-4 inline-block w-11/12">
        <Title title="À la une" size={2} />
        <div className="grid grid-cols-4 gap-3 mt-4">
          <ActusCards title="Nouveau design web !" message="Finalement l'autre style n'était pas assez adapter a mes envies. Difficile d'y ajouter des éléments sans rendre le tout moche... Du coup, un nouveau style néon a fait son apparition" date="08 février 2025" btnLabel="" link="" />
          <ActusCards title="Spôdeur se met aux lives" message="Mon copain Spôdeur a commencé à streamer ! Son contenu change de ses vidéos YouTube, alors allez découvrir ses lives !" date="28 janvier 2025" btnLabel="Visiter sa chaîne Twitch" link="https://www.twitch.tv/spodeuroof" />
          <ActusCards title="Retour des lives" message="Après une pause, je suis de retour pour lancer des directs avec les copaings ! Rejoins-moi sur Twitch pour partager ces moments fun !" date="28 janvier 2025" btnLabel="" link="" />
          <ActusCards title="Refonte du site web" message="Une toute nouvelle charte graphique est arrivée, avec de nombreuses fonctionnalités et possibilités qui apparaîtront très bientôt ! Alors restez à l'écoute :3" date="28 janvier 2025" btnLabel="" link="" />
        </div>
      </section>
    </>
  );
};

export default Homepage;
