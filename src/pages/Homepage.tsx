const Homepage = () => {
  return (<>
    {/* Main Content */}
    <main className="text-white py-10 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">Salutation jeune aventurier !</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Bienvenue sur mon site ! Je suis Shinederu, un mec assez random qui joue à des jeux vidéo. Profite bien de cet
          espace mis à ta disposition !
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">Les Directs</h2>
            <p className="mt-2">
              Il arrive de temps en temps que je lance des streams sur Twitch. Je n'ai aucun planning et ça n'est clairement
              pas mon activité principale. Mais j'aime bien en faire un de temps en temps pour m'amuser. Si tu veux en être
              informé, active les notifications Twitch ou rejoins mon Discord !
            </p>
          </div>
          <a
            href={import.meta.env.VITE_TWITCH_CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 self-start"
          >
            Rejoindre Twitch
          </a>
        </div>

        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">Les Rediffusions</h2>
            <p className="mt-2">
              Si t'aimes bien mes lives, j'ai une bonne nouvelle pour toi ! L'intégralité des streams que j'ai réalisés sont
              disponibles sur YouTube ! Te laissant ainsi l'opportunité d'en profiter un nombre incalculable de fois et même
              de laisser ton avis en commentaire.
            </p>
          </div>
          <a
            href={import.meta.env.VITE_YOUTUBE_CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-500 self-start"
          >
            Voir les rediffusions
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center">À la Une</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold">Spôdeur se met aux lives</h3>
              <p className="mt-2">Mon copain Spôdeur a commencé à streamer ! Son contenu change de ses vidéos YouTube, alors allez découvrir ses lives !</p>
            </div>
            <p className="mt-4 text-sm text-gray-400 self-end">Publié le 28 janvier 2025</p>
          </div>
          <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold">Le retour des lives</h3>
              <p className="mt-2">Après une pause, je suis de retour pour lancer des directs avec les copaings ! Rejoins-moi sur Twitch pour partager ces moments fun !</p>
            </div>
            <p className="mt-4 text-sm text-gray-400 self-end">Publié le 28 janvier 2025</p>
          </div>
          <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold">Refonte du site web</h3>
              <p className="mt-2">Une toute nouvelle charte graphique est arrivée, avec de nombreuses fonctionnalités et possibilités qui apparaîtront très bientôt ! Alors restez à l'écoute :3</p>
            </div>
            <p className="mt-4 text-sm text-gray-400 self-end">Publié le 28 janvier 2025</p>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold">Rejoins ma Communauté</h2>
        <p className="mt-2">Envie de discuter avec des aventuriers comme toi ? Rejoins le Discord !</p>
        <a
          href={import.meta.env.VITE_DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-500"
        >
          Rejoindre Discord
        </a>
      </section>
    </main>
  </>
  );
};

export default Homepage;
