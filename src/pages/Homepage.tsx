const Homepage = () => {
  return (<>
    {/* Main Content */}
    <section className=" mb-8 inline-block w-11/12">
      <h1>Salutation jeune aventurier !</h1>
      <p>
        Bienvenue sur mon site ! Je suis Shinederu, un mec assez random qui joue à des jeux vidéo. Profite bien de cet
        espace mis à ta disposition !
      </p>
    </section>

    <section className="pb-8 mb-6 w-11/12 inline-block border-b-2 border-[#6a11cb]">
      <div className="grid grid-cols-2 gap-8">
        {/* Bloc 1 : Les Directs */}
        <div className="flex flex-col items-start bg-[#10101f] p-6 rounded-xl border-2  border-[#6a11cb]">
          <div>
            <h2 className="text-xl font-bold mb-2 border-b-2 border-[#6a11cb] pb-1">
              Les Directs
            </h2>
            <p className="text-[#f0f0f0] leading-relaxed">
              Il arrive de temps en temps que je lance des streams sur Twitch. Je n'ai aucun planning et ça n'est clairement
              pas mon activité principale. Mais j'aime bien en faire un de temps en temps pour m'amuser. Si tu veux en être
              informé, active les notifications Twitch ou rejoins mon Discord !
            </p>
          </div>
          <div className="flex justify-center w-full">
            <a
              href={import.meta.env.VITE_TWITCH_CHANNEL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] py-3 px-5 mt-4 rounded-md font-bold transition-transform duration-200 hover:scale-105"
            >
              Rejoindre Twitch
            </a>
          </div>
        </div>

        {/* Bloc 2 : Les Rediffusions */}
        <div className="flex flex-col items-start bg-[#10101f] p-6 rounded-xl border-2  border-[#cb1111]">
          <div>
            <h2 className="text-xl font-bold mb-2 border-b-2 border-[#cb1111] pb-1">
              Les Rediffusions
            </h2>
            <p className="text-[#f0f0f0] leading-relaxed">
              Si t'aimes bien mes lives, j'ai une bonne nouvelle pour toi ! L'intégralité des streams que j'ai réalisés sont
              disponibles sur YouTube ! Te laissant ainsi l'opportunité d'en profiter un nombre incalculable de fois et même
              de laisser ton avis en commentaire.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <a
              href={import.meta.env.VITE_YOUTUBE_CHANNEL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] py-3 px-5 mt-4 rounded-md font-bold transition-transform duration-200 hover:scale-105"
            >
              Voir les rediffusions
            </a>
          </div>
        </div>
      </div>
    </section>






    <section className="border-b-2 border-[#6a11cb] pb-4 mb-4 inline-block w-11/12">
      <h2>À la Une</h2>
      <div>

        <div>
          <div>
            <h3>Spôdeur se met aux lives</h3>
            <p>Mon copain Spôdeur a commencé à streamer ! Son contenu change de ses vidéos YouTube, alors allez découvrir ses lives !</p>
          </div>
          <p>Publié le 28 janvier 2025</p>
        </div>
        <div>
          <div>
            <h3>Le retour des lives</h3>
            <p>Après une pause, je suis de retour pour lancer des directs avec les copaings ! Rejoins-moi sur Twitch pour partager ces moments fun !</p>
          </div>
          <p>Publié le 28 janvier 2025</p>
        </div>
        <div>
          <div>
            <h3>Refonte du site web</h3>
            <p>Une toute nouvelle charte graphique est arrivée, avec de nombreuses fonctionnalités et possibilités qui apparaîtront très bientôt ! Alors restez à l'écoute :3</p>
          </div>
          <p>Publié le 28 janvier 2025</p>
        </div>
      </div>
    </section>

    <section className="border-b-2 border-[#6a11cb] pb-4 mb-4 inline-block w-11/12">
      <h2>Rejoins ma Communauté</h2>
      <p>Envie de discuter avec des aventuriers comme toi ? Rejoins le Discord !</p>
      <a
        href={import.meta.env.VITE_DISCORD_INVITE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-3 px-5 mt-4 rounded-md font-bold transition-transform duration-200 hover:scale-105 hover:shadow-lg"
      >
        Rejoindre Discord
      </a>
    </section>
  </>
  );
};

export default Homepage;
