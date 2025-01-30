const Community = () => {
    return (
        <>
            <main className="text-white py-10 px-4">
                {/* Section Présentation */}
                <section className="mb-12">
                    <div className="max-w-4xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold">Rejoins ma Communauté</h2>
                        <p className="mt-2">
                            Rejoins une communauté fun et accueillante où tu pourras discuter de tout et de rien : jeux vidéo, tech, et même partager des mèmes !
                            Le serveur Discord est le meilleur endroit pour rester informé de mes lives, événements, et projets.
                        </p>
                        <div className="mt-4 text-center">
                            <a
                                href={import.meta.env.VITE_DISCORD_INVITE}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-500"
                            >
                                Rejoindre le Discord
                            </a>
                        </div>
                    </div>
                </section>

                {/* Section Widgets ou contenu futur */}
                <section>
                    <div className="max-w-4xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold">Et après ?</h2>
                        <p className="mt-2">
                            Cette page évoluera au fil du temps ! Je prévois d'ajouter de nouvelles fonctionnalités, comme un espace de discussion en direct ou d'autres moyens d'interagir avec la communauté.
                        </p>
                        <p className="mt-4 text-sm text-gray-400">
                            Pour l'instant, rejoins-nous sur Discord et n'hésite pas à partager tes idées pour améliorer cette page !
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Community;