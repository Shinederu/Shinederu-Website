import Title from "@/components/decoration/Title";
import TwitchEmbed from "@/components/integrations/TwitchEmbed";
import YouTubeEmbed from "@/components/integrations/YouTubeEmbed";


const Channels = () => {
    return (
        <>
            {/* Section Twitch */}
            <section className="border-b-4 border-[#6b6b6b] pb-12 mb-4 inline-block w-11/12">

                <Title title="Twitch" size={2} />
                <p>
                    Si tu souhaites regarder mes streams en direct, tout se passe sur Twitch !
                </p>
                <TwitchEmbed />
                <div className="flex flex-col items-center bg-[#10101f] p-6 rounded-xl border-2  border-[#6a11cb]">
                    <p>
                        Comme je n'ai pas de planning, il faut rester connecté pour ne rien louper ! Mais bon... qui sait, peut-être que j'en aurais un... un jour... ou l'autre...<br></br>
                        <i>(Astuce: Tu peux activer les notifs pour savoir si je lance un live !)</i>
                    </p>
                    <div className="mt-4 text-center">
                        <a
                            href={import.meta.env.VITE_TWITCH_CHANNEL_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] py-3 px-5 mt-4 rounded-md font-bold transition-transform duration-200 hover:scale-105"
                        >
                            Voir la chaîne Twitch
                        </a>
                    </div>
                </div>
            </section >


            {/* Section YouTube */}
            <section className="pb-6 mb-4 inline-block w-11/12">

                <Title title="YouTube" size={2} />
                <p>
                    Si tu souhaites regarder mes streams en direct, tout se passe sur Twitch !
                </p>
                <YouTubeEmbed />
                <div className="flex flex-col items-center bg-[#10101f] p-6 rounded-xl border-2  border-[#cb1111]">
                    <p>
                        T'as loupé un live ? T'inquiètes pas ! Tout mes lives sont disponibles sur YouTube !<br></br>
                        <i>(Oui c'est simplement une image au dessus (j'ai pas trouvé une intégration qui fonctionne))</i>
                    </p>
                    <div className="mt-4 text-center">
                        <a
                            href={import.meta.env.VITE_YOUTUBE_CHANNEL_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] py-3 px-5 mt-4 rounded-md font-bold transition-transform duration-200 hover:scale-105"
                        >
                            Voir la chaîne YouTube
                        </a>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Channels;
