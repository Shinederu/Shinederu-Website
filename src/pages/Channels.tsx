import TwitchEmbed from "@/components/TwitchEmbed";
import YouTubeVideos from "@/components/YouTubeVideos";

const Channels = () => {
    return (
        <>
            <main className="text-white py-10 px-4">
                {/* Section Twitch */}
                <section className="mb-12">
                    <div className="max-w-4xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold">Twitch</h2>
                        <p className="mt-2">
                            Si tu souhaites regarder mes streams en direct, tout se passe sur Twitch !
                        </p>
                        <div className="mt-4">
                            <TwitchEmbed />
                        </div>
                        <p className="mt-4">
                            Comme je n'ai pas de planning, il faut rester connecté pour ne rien louper !
                        </p>
                        <div className="mt-4 text-center">
                            <a
                                href={import.meta.env.VITE_TWITCH_CHANNEL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-500"
                            >
                                Voir la chaîne Twitch
                            </a>
                        </div>
                    </div>
                </section>

                {/* Section YouTube */}
                <section>
                    <div className="max-w-4xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold">YouTube</h2>
                        <p className="mt-2">
                            Retrouve ici les huit dernières rediffusions postées sur YouTube ! Le reste est disponible sur la chaîne !
                        </p>
                        <div className="mt-4">
                            <YouTubeVideos />
                        </div>
                        <div className="mt-4 text-center">
                            <a
                                href={import.meta.env.VITE_YOUTUBE_CHANNEL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-red-600 rounded-lg text-white hover:bg-red-500"
                            >
                                Voir la chaîne Twitch
                            </a>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
};

export default Channels;
